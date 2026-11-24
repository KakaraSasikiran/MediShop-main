import { expect, Page } from "@playwright/test";
import { Navbar } from "../interfaces/Navbar";
import { AddToCarts } from "../interfaces/AddToCarts";
import { AddToCart } from "../Functionalities/Add_To_Cart_Functionality/AddToCart";
export class Shop extends AddToCart implements Navbar,AddToCarts{
    constructor( page:Page){
        super(page)
        
    }
    async click_add_to_cart(): Promise<void> {
       await this.page.getByTestId("product_detail_add_to_cart_button").click()
       await this.page.getByTestId("cart_button").click()
    }
    async add_to_cart_by_medicine_name(medicine_name: string,count:number): Promise<void> {
        await this.page.locator("article[class='product-card']").filter({
        has: this.page
          .locator("div[class='product-body']")
          .filter({
            has: this.page.locator("h3[class='product-name'] a"),
          })
          .filter({
            hasText:medicine_name,
          })
      }).filter({
        has:this.page.locator("div[class='product-foot'] button")
      }).click();
       for(var i=1;i<count;i++){
        await this.page.getByRole("button",{name:"Increase quantity",exact:true}).click()
    }
    this.click_add_to_cart()
    this.click_Secure_Checkout()
    }
    async clickAnyNavbar(navbarName: string): Promise<void> {
        await this.page.getByRole("link",{name:navbarName,exact:true}).click() 
    }
    
}