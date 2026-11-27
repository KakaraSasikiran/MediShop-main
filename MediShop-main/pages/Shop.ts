import { expect, Locator, Page } from "@playwright/test";
import { Navbar } from "../interfaces/Navbar";
import { AddToCarts } from "../interfaces/AddToCarts";
import { AddToCart } from "../Functionalities/Add_To_Cart_Functionality/AddToCart";
export class Shop extends AddToCart implements Navbar, AddToCarts {
  readonly cardnumber:Locator
  readonly expirydate:Locator
  readonly cvv:Locator
  readonly nameoncard:Locator

  constructor(page: Page) {
    super(page);
    this.cardnumber = page.getByRole("textbox",{name:"Card number",exact:true})
    this.expirydate = page.getByTestId("card_expiry_input")
    this.cvv = page.getByTestId("card_cvv_input")
    this.nameoncard = page.getByTestId("card_name_input")
  }
  async click_add_to_cart(): Promise<void> {
    await this.page.getByTestId("product_detail_add_to_cart_button").click();
    await this.page.getByTestId("cart_button").click();
  }
  async add_to_cart_by_medicine_name(
    medicine_name: string,
    count: number,
  ): Promise<void> {
    const sasi = await this.page
      .locator("article[class='product-card']")
      .filter({
        has: this.page
          .locator("div[class='product-body']")
          .filter({
            has: this.page.locator("h3[class='product-name'] a"),
          })
          .filter({
            hasText: medicine_name,
          }),
      })
      .filter({
        has: this.page.locator("div[class='product-foot'] button"),
      });
    await sasi.scrollIntoViewIfNeeded();
    await sasi.click();
    for (var i = 1; i < count; i++) {
      await this.page
        .getByRole("button", { name: "Increase quantity", exact: true })
        .click();
    }
    this.click_add_to_cart();
    this.click_Secure_Checkout();
  }
  async clickAnyNavbar(navbarName: string): Promise<void> {
    await this.page
      .getByRole("link", { name: navbarName, exact: true })
      .click();
  }
  async delivery_speed_or_payment_method(delivery_name: string) {
    const loc = this.page.locator("span[class='radio-body'] strong");
    const names = await loc.allInnerTexts();
    for (const name of names) {
      if (name.includes(delivery_name)) {
        await this.page.getByText(name).click();
      }
    }
  }
  async upi_id(id:string){
    await this.page.getByPlaceholder("yourname@bank").fill(id)
  }
  async credit_card_or_debit_card_details(card_number:string,expiry_date:string,cvv_number:string,name_on_card:string){
      this.clear_and_enter_values(this.cardnumber,card_number)
      this.clear_and_enter_values(this.expirydate,expiry_date)
      this.clear_and_enter_values(this.cvv,cvv_number)
      this.clear_and_enter_values(this.nameoncard,name_on_card)
      
  }
  
}
