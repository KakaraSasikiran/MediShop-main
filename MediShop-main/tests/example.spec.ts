import { expect, test } from "../fixtures/Fixtures";
import { Orders } from "../pages/Orders";
test.describe.skip("Register Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });

  test.skip(
    "Verify registration page controls",
    { tag: "@smoke" },
    async ({ page, central }) => {
      await central.getLogin().perform_fill_the_form();
      await central.getHome().click_specific_tab_name_within_navbar("Orders");
      // await central.getOrders().search_orders("Vitamin")
      await central.getEnterCapsuleName(new Orders(page), "D3");
      await central.getAction(
        new Orders(page),
        "Daily Multivitamin Supplement, Vitamin D3",
      );
      // await central.getLogin().perform_reset_password("hello@gmail.com")
      // await central.getLogin().perform_register_your_clinic()
      // await central.getLogin().perform_browse_the_catalogue_as_a_guest()
      // await central.getLogin().perform_login("ell@gmail.com","12345")
      // await central.getLogin().assert_error_message_after_login("Invalid email or password. Please try again.")
      await page.pause();
    },
  );
});
test.describe.skip("Storage_State", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });
  test.skip("Creation_of_Individual_Storage_State", async ({
    central,
    context,
  }) => {
    await central
      .getLogin()
      .perform_login("trainer@way2automation.com", "way2automation");
    // const text = await central.page.getByTestId("home_greeting").textContent()
    // await expect(text).toContain("Rahul Arora")
    await central.page.waitForURL("**/home.html");
    await context.storageState({ path: "token.json", indexedDB: true });
    await central.page.pause();
  });
  test("trails", async ({ page }) => {
    await page.pause();
  });
});

test.describe("Add_To_Cart_Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });
  test.skip("Verify_one_catologue_product_added", async ({ page, central }) => {
    await central.getShop().clickAnyNavbar("Shop");
    await central.getShop().add_to_cart_by_medicine_name("Aspirin 75mg",3)
    await central.getShop().delivery_address("Hellos","9876543210","Hlos","city","States","987654","Australia","Delivery")
    await central.getShop().delivery_speed_or_payment_method("Express delivery")
    await central.getShop().delivery_speed_or_payment_method("Credit")
    // await central.getShop().upi_id("1111")
    // await central.getShop().credit_card_or_debit_card_details("111111","01/01","111","Hellos")
    await page.pause();
  });
});
test.describe("Add_To_Cart_Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });
  test("Profile Based Operation", async ({ page, central }) => {
    await page.waitForLoadState()
    await central.getProfile().clickProfile()
    await central.getProfile().selectProfile("My profile")
    // await central.getProfile().edit_profileDetails("Ones","9876543210","Ones@gmail.com","Pracs","Nurse","Hellos,Woeld")
    await central.getProfile().clickMyPrescription()
    await central.getProfile().click_upload_prescription()
    await central.getProfile().upload_prescription("one.txt","hellos","yells","2026-11-11","Notes")
    await central.getProfile().perform_view()
    await page.pause()
  });
});


