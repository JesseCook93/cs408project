import { test, expect } from '@playwright/test';

// Tests for the news page
test.describe('News Page', () => {
  test('should display news page', async ({ page }) => {
    await page.goto('/news');
    await expect(page).toHaveTitle(/News/);
  });
  
  test('should display news table with correct table headers, data', async ({ page }) => {
    await page.goto('/news');
    
    // Check table headers
    const headers = page.locator('thead th');
    await expect(headers).toHaveCount(4);
    await expect(headers.nth(0)).toHaveText('Title');
    await expect(headers.nth(1)).toHaveText('Poster');
    await expect(headers.nth(2)).toHaveText('Date');
    await expect(headers.nth(3)).toHaveText('Details');
    
    // Check table rows
    const rows = page.locator('tbody tr');
    await expect(rows).toHaveCount(2);
  });

  test('should verify first row data and view button', async ({ page }) => {
    await page.goto('/news');

    // Check first row data
    const rows = page.locator('tbody tr');
    const firstRowCells = rows.nth(0).locator('td');
    await expect(firstRowCells.nth(0)).toHaveText('Lemonade Stand!');
    await expect(firstRowCells.nth(1)).toHaveText('Jesse');
    await expect(firstRowCells.nth(2)).toHaveText(new Date().toLocaleDateString());
    await firstRowCells.nth(3).locator('a').click();
    await expect(page).toHaveURL('/postdetails/1');
  });

  test('should verify second row data and view button', async ({ page }) => {
    await page.goto('/news');

    // Check second row data
    const rows = page.locator('tbody tr');
    const secondRowCells = rows.nth(1).locator('td');
    await expect(secondRowCells.nth(0)).toHaveText('Road Accident');
    await expect(secondRowCells.nth(1)).toHaveText('Dylan');
    await expect(secondRowCells.nth(2)).toHaveText(new Date().toLocaleDateString());
    await secondRowCells.nth(3).locator('a').click();
    await expect(page).toHaveURL('/postdetails/2');
  });

});

