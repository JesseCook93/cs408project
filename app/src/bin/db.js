const Database = require('better-sqlite3');

const createNewsTableSQL = `
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    poster TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    details TEXT NOT NULL
  )`;


function createDatabaseManager(dbPath) {
  const database = new Database(dbPath);
  console.log('Database manager created for:', dbPath);
  database.pragma('foreign_keys = ON');
  database.exec(createNewsTableSQL);

  function ensureConnected() {
    if (!database.open) {
      throw new Error('Database connection is not open');
    }
  }
  return {
    dbHelpers: {

      clearDatabase: () => {
        if (process.env.NODE_ENV === 'test') {
          ensureConnected();
          database.prepare('DELETE FROM news').run();
        } else {
          console.warn('clearDatabase called outside of test environment. FIXME!');
        }
      },

      // Updated to seed db with news data based on wireframes
      seedInitialData: () => {
          ensureConnected();
          const insert = database.prepare('INSERT INTO news (title, poster, details) VALUES (?, ?, ?)');
          const testData = [
            { title: 'Lemonade Stand!', poster: 'Jesse', details: '1st news item.' },
            { title: 'Road Accident', poster: 'Dylan', details: '2nd news item.' }
          ];
          const insertMany = database.transaction((news) => {
            for (const newsPost of news) insert.run(newsPost.title, newsPost.poster, newsPost.details);
          });
          insertMany(testData);
          console.log('Seeding test data into database');
        }
      },

      getAllNews: () => {
        return database.prepare('SELECT * FROM news ORDER BY date DESC').all();
      },

      getRecentNews: () => {
        return database.prepare('SELECT * FROM news ORDER BY date DESC').limit(10).all();
      },

      getNewsById: (id) => {
        return database.prepare('SELECT * FROM news WHERE id = ?').get(id);
      },

      createNews: (title, poster, details) => {
        const info = database.prepare('INSERT INTO news (title, poster, details) VALUES (?, ?, ?)').run(title, poster, details);
        return info.lastInsertRowid;
      },

      updateNews: (id, title, poster, details) => {
        const info = database.prepare('UPDATE news SET title = ?, poster = ?, details = ? WHERE id = ?').run(title, poster, details, id);
        return info.changes;
      },

      deleteNews: (id) => {
        const info = database.prepare('DELETE FROM news WHERE id = ?').run(id);
        return info.changes;
      },
    }
  };


module.exports = {
  createDatabaseManager,
};
