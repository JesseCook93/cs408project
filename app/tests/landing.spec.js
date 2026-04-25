import { test, expect } from '@playwright/test';

// Tests for the landing page
test.describe('Landing Page', () => {
  test('should display landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Welcome to Boards!/);
    await expect(page.locator('p')).toContainText('Share anything you wish with your local community or group. With your own instance of Boards, you can share anything you wish with your local community or group. Simply share this with whoever you wish, and hit "Get Started" to begin posting!');
  });
});

test.describe('Header', () => {
  test('should have working header button links', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Boards'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'News'})).toBeVisible();
    await expect(page.getByRole('link', { name: 'Post'})).toBeVisible();
    await page.goto('/');
    await page.getByRole('link', { name: 'Boards'}).click()
    await expect(page).toHaveURL('/');
    await page.goto('/');
    await page.getByRole('link', { name: 'News'}).click()
    await expect(page).toHaveURL('/news');
    await page.goto('/');
    await page.getByRole('link', { name: 'Post'}).click()
    await expect(page).toHaveURL('/post');
  });
});

test.describe('Get Started Button', () => {
  test('should navigate to /post when Get Started button is clicked', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Get Started'}).click()
    await expect(page).toHaveURL('/post');
  });
});

test.describe('Footer', () => {
  test('should display footer with correct text', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toContainText('© 2026 Boards');
  });
});
