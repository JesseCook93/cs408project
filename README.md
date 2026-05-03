# Boards

A full-stack web application for creating and sharing posts with your own community. It is made to be simple to use for both users to use and developers to deploy and manage. The purpose of this is to give any community the ability to share information with each other online. This was built for CS408 in Spring 2026.

## Usage
Implemented Features:
- Supports viewing and creating any post one wishes for others
- Displays the most recent posts/news
- Deleting posts

## Tech Stack

| Layers | Technology |
|-------|-----------|
| Backend Language | Node.js |
| Backend Framework | Express |
| Database | SQLite |
| Frontend Templates | EJS |
| Frontend Styling | Vanilla CSS |
| Testing | Playwright (CI) |

## How to Run Locally

### Requirements

Node.js minimum version 20 and npm.

### First Time Setup

```bash
# Clone the repository
git clone https://github.com/JesseCook93/cs408project.git
cd ./cs408project/app

# Install dependencies (one time)
npm install
```
Startup the application with the following command (in ./cs408project/app)
```bash
npm start
```

Open 'http://localhost:3000' in your browser.

## How to Run for EC2
```bash
git clone https://github.com/JesseCook93/cs408project.git
cd ./cs408project
./dev.sh build install
```
This will build and install it on an EC2 instance, ready for immediate viewing.

## First Time Setup for Tests

```bash
# Must remain in ./app directory from First Time Setup
npm run test:setup
```
Run tests with this command:
```bash
npm test
```
---
