import { test, expect } from '@playwright/test';

test('Search book', async ({ page }) => {

  await page.goto('https://demoqa.com/books');

  // get the name of required book
  const Name1 = page.locator('div.rt-td >> a >> nth=1'); // get the name of the second book of the list 
  const Author1 = await page.locator('div.rt-td >> nth=6').innerHTML(); // get the name of the author who write the book
  
  // fill the book's name in the search bar
  await page.fill('id=searchBox',await Name1.innerHTML());
  await page.locator('id=basic-addon2').click();
  
  const Author2 = await page.locator('div.rt-td >> nth=2').innerHTML();

  await expect(Author1).toEqual(Author2); // Validate  step
});
