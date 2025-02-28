import { test } from "@playwright/test";

test("open GIDR page", async ({ page }) => {
  const gidr_name = "My first Auto 22";
  // const browser = await chromium.launch();
  let input = "what is brake";
  //await page.waitForTimeout(5000);
  await page.goto("https://gidr-sprint26-asia-northeast1.web.app/en");
  await page.fill('[name="email"]', "vijay.anand.allabothulla+10862@gidr.ai");
  await page.fill('[name="password"]', "Riyas@6262");
  await page.click("//form/div/button");
  await page
    .locator("//div[text()='Signed in successfully']")
    .waitFor({ state: "visible" });
  await page
    .locator("//p[text()='Create GIDR']//parent::button")
    .waitFor({ state: "visible" });
  await page.click("//p[text()='Create GIDR']//parent::button");
  await page.click("//p[text()='Agent GIDR']");
  await page.fill('[placeholder="GIDR name"]', gidr_name);
  await page.fill(
    '[placeholder="Enter a description..."]',
    "My first Auto Gidr"
  );
  await page.click("//button[text()='Next']");
  await page.locator("//form/label/input").setInputFiles("Resource\\huffy.pdf");
  await page.click("//button[text()='Next']");

  await page
    .locator("//div[text()='File uploaded']")
    .waitFor({ state: "visible" });
  // //await page.locator(`//p[text()='${gidr_name}']`).click();

  await page
    .locator("//p[text()='Q&A Document']//parent::div/parent::div//input")
    .waitFor({ state: "visible" });
  // await page.evaluate(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  // });
  const element = page.locator(
    "//p[text()='Q&A Document']//parent::div/parent::div//input"
  );
  element.scrollIntoViewIfNeeded();
  await page.fill(
    "//p[text()='Q&A Document']//parent::div/parent::div//input",
    input
  );

  await page
    .locator("//p[text()='Q&A Document']//parent::div/parent::div//button")
    .waitFor({ state: "visible" });

  await page.click(
    "//p[text()='Q&A Document']//parent::div/parent::div//button"
  );

  await page
    .locator(`//div[@class='mui-bwy1ga']//p[text()='${input}']`)
    .waitFor({ state: "visible" });
  const query = await page.textContent(
    `//div[@class='mui-bwy1ga']//p[text()='${input}']`
  );
  // console.log(query);
  await page
    .locator("//div[@class='mui-1qanbqv']/div[4]")
    .waitFor({ state: "visible" });
  await page.getByTestId("q_a_gidget").waitFor({ state: "visible" });
  await page.getByTestId("q_a_gidget").hover();
  await page.locator("//div[@data-testid='q_a_gidget']/span[1]").hover();
  await page.mouse.down();

  await page.mouse.move(400, 1009);
  await page.mouse.up();

  const des = await page.getByTestId("column-4");
  const source = await page.locator(
    "//div[@class='mui-1onwun7']//p[text()='Q&A Web']//parent::div/parent::div"
  );
  await source.hover();
  await page.mouse.down();
  await page.mouse.move(100, 200);
  await des.hover();
  await page.mouse.up();

  await page.getByTestId("q_a_gidget").hover();
  await page.locator("//div[@data-testid='q_a_gidget']/span[1]").hover();

  await page.mouse.down();
  await page.mouse.move(820, 1009);
  await page.mouse.up();
  await page.getByTestId("back-icon").click();
  await page.click(`//p[text()='${gidr_name}']//ancestor::tr//button`);
  await page.getByTestId("delete-gidr-button").click();
  await page
    .locator('[data-testid="deletegidr-delete-button"]')
    .waitFor({ state: "visible" });
  await page.getByTestId("deletegidr-delete-button").click();

  // await page
  //   .locator("//div[text()='GIDR deleted successfully']")
  //   .waitFor({ state: "visible" });
  await page.click('[class="mui-1u5e2b2"]');
  await page.click('[class="mui-1u3xwai"]');
  page.close();
});
