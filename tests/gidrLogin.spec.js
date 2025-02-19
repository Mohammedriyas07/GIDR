import { test, expect, chromium } from "@playwright/test";

test("open GIDR page", async () => {
  const gidr_name = "My first Auto 1";
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.waitForTimeout(5000);
  await page.goto("https://gidr-sprint26-asia-northeast1.web.app/en");
  await page.click('[name="email"]');
  await page.keyboard.type("vijay.anand.allabothulla+10862@gidr.ai");
  await page.click('[name="password"]');
  await page.keyboard.type("Riyas@6262");
  await page.locator("//form/div/button").click();
  await page
    .locator("//div[text()='Signed in successfully']")
    .waitFor({ state: "visible" });
  await page.waitForFunction('document.title == "GIDR.ai"');

  await page
    .locator("//p[text()='Create GIDR']//parent::button")
    .waitFor({ state: "visible" });
  await page.locator("//p[text()='Create GIDR']//parent::button").click();
  await page.locator("//p[text()='Agent GIDR']").click();
  await page.getByPlaceholder("GIDR name").click();
  await page.keyboard.type(gidr_name);
  await page.getByPlaceholder("Enter a description...").click();
  await page.keyboard.type("My first Auto Gidr");
  await page.locator("//button[text()='Next']").click();
  await page
    .locator("//form/label/input")
    .setInputFiles("D:\\GIDR Excel\\Employee.xlsx");
  await page.locator("//button[text()='Next']").click();
  await page
    .locator("//div[text()='File uploaded']")
    .waitFor({ state: "visible" });
  await page.locator(`//p[text()='${gidr_name}']`).click();
});
