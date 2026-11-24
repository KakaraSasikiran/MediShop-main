import { Page } from "@playwright/test";

export class AddToCart{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }
    async click_Secure_Checkout(){
        await this.page.getByRole("button",{name:"Secure checkout",exact:true}).click()
    }
}