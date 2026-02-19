import { test, expect } from '@playwright/test';



test.describe('Landing Page', () => {

  test('should display landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Hello World!/);
    await expect(page.locator('p')).toContainText('GitHub Repository: https://github.com/JesseCook93/cs408project');

  });



});
