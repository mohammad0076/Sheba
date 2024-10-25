import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

setDefaultTimeout(60 * 10000 * 2);

Given('User navigates to the application', async function () {
  await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php');
   // Wait for 2 seconds
   await pageFixture.page.waitForTimeout(3000);
});
Given('User enter the username as {string}', async function (username) {
  await pageFixture.page
    .locator("//input[@placeholder='Username']")
    .type(username, { delay: 1000 }); 
});

Given('User enter the password as {string}', async function (password) {
  await pageFixture.page
    .locator("//input[@placeholder='Password']")
    .type(password, { delay: 1000 }); 
});

Given('Click on the login button', async function () {
    // Wait for the login button to be visible
    await pageFixture.page.waitForSelector("//button[normalize-space()='Login']");
    
    // Click the login button
    await pageFixture.page.click("//button[normalize-space()='Login']");
    await pageFixture.page.isVisible("//h6[normalize-space()='Dashboard']");
  });

  
  Given('User navigates to the "Apply Leave" page', async function () {
    await pageFixture.page.waitForSelector("//span[normalize-space()='Leave']");

  await pageFixture.page.click("//span[normalize-space()='Leave']");
  await pageFixture.page.waitForSelector("//a[normalize-space()='Apply']");
  await pageFixture.page.click("//a[normalize-space()='Apply']");
  await pageFixture.page.waitForTimeout(3000);
  });
  
  Given('User selects "CAN - FMLA" from the dropdown', async function () {

    await pageFixture.page.waitForSelector("//div[@class='oxd-select-text-input']", { timeout: 5000 });
    await pageFixture.page.click("//div[@class='oxd-select-text-input']"); // Open dropdown

    await pageFixture.page.waitForSelector("(//span[normalize-space()='CAN - FMLA'])[1]", { timeout: 5000 });
    await pageFixture.page.click("(//span[normalize-space()='CAN - FMLA'])[1]"); // Select option
  
    
  });
  
  Given('Check that the leave balance is visible', async function () {

    const leaveBalanceLabel = await pageFixture.page.waitForSelector("//label[normalize-space()='Leave Balance']", { timeout: 5000 });
    
 
    const isVisible = await leaveBalanceLabel.isVisible();
    if (!isVisible) {
      throw new Error("Leave Balance label is not visible");
    }
  });
  
  Given('User Select "From Date" of leave', async function () {
    await pageFixture.page.waitForSelector('//div[@class="oxd-grid-4 orangehrm-full-width-grid"]//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]', { timeout: 5000 });
    await pageFixture.page.click('//div[@class="oxd-grid-4 orangehrm-full-width-grid"]//div[1]//div[1]//div[2]//div[1]//div[1]//i[1]'); // Open dropdown
    await pageFixture.page.waitForTimeout(3000);
       await pageFixture.page.waitForSelector('.--non-working-day .oxd-calendar-date', { timeout: 5000 });
    await pageFixture.page.click('.--non-working-day .oxd-calendar-date'); // Open dropdown
    await pageFixture.page.waitForTimeout(3000);
});


 
  Given('User Select "To Date" of leave', async function () {
    
    const leaveBalanceLabel = await pageFixture.page.waitForSelector("//label[normalize-space()='Leave Balance']", { timeout: 5000 });
    
 
    const isVisible = await leaveBalanceLabel.isVisible();
    if (!isVisible) {
      throw new Error("Leave Balance label is not visible");
    }
  }); 


  When('User fills in the leave comment as {string}', async function (comment) {
    const textareaLocator = await pageFixture.page.locator('//textarea[@class="oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical"]');
    
    // Wait for the textarea to be visible
    await textareaLocator.waitFor({ state: 'visible' });

    // Fill the textarea with the provided comment
    await textareaLocator.fill(comment);
});

When('User apply for the leave', async function () {
    const applyButtonLocator = await pageFixture.page.locator('//button[normalize-space()="Apply"]');
    
    // Wait for the button to be visible
    await applyButtonLocator.waitFor({ state: 'visible' });
    await applyButtonLocator.click();
});

When(`Cehck that leave applied successfully`,async function () {
    const applyButtonLocator = await pageFixture.page.locator('//button[normalize-space()="Apply"]');

    await applyButtonLocator.waitFor({ state: 'visible' });

    const isVisible = await applyButtonLocator.isVisible();
})