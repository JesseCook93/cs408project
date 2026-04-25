import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should display landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Welcome to Boards!/);
    await expect(page.locator('p')).toContainText('Share anything you wish with your local community or group. With your own instance of Boards, you can share anything you wish with your local community or group. Simply share this with whoever you wish, and hit "Get Started" to begin posting!');
  });
});

test.describe('Get Started Button', () => {
  test('should navigate to /postdetails when Get Started button is clicked', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Get Started').click();
    await expect(page).toHaveURL('/postdetails');
  });
});
