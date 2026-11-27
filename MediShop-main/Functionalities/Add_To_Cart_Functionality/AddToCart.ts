import { Locator, Page } from "@playwright/test";

export class AddToCart{
    readonly page:Page
    readonly full_name:Locator
    readonly mobile_number:Locator
    readonly house_no_building_street:Locator
    readonly city:Locator
    readonly pincode:Locator
    readonly state:Locator
    readonly country:Locator
    readonly delivery:Locator
   
    constructor(page:Page){
        this.page = page
        this.full_name = page.locator("input#checkout_name_input")
        this.mobile_number = page.getByTestId("checkout_mobile_input")
        this.house_no_building_street = page.getByTestId("checkout_house_input")
        this.city = page.getByTestId("checkout_city_input")
        this.state = page.getByTestId("checkout_state_input")
        this.pincode = page.getByTestId("checkout_pincode_input")
        this.country = page.getByTestId("checkout_country_select")
        this.delivery = page.getByTestId("checkout_notes_input")
      
    }
    async click_Secure_Checkout(){
        await this.page.getByRole("button",{name:"Secure checkout",exact:true}).click()
    }
    async clear_and_enter_values(locators:Locator,values:string){
        await locators.clear()
        await locators.fill(values)
    }
    async selectOption(locator:Locator,value:string){
        await locator.selectOption(value)
    }
    async clickCheck(){
        await this.page.getByRole("checkbox",{name:"Save this address for future orders",exact:true}).click()
    }
   
   async delivery_address(fullname:string,mobile_no:string,address:string,city:string,state:string,pin:string,country:string,delivery_details:string){
    await this.clear_and_enter_values(this.full_name,fullname)
    await this.clear_and_enter_values(this.mobile_number,mobile_no)
    await this.clear_and_enter_values(this.house_no_building_street,address)
    await this.clear_and_enter_values(this.city,city)
    await this.clear_and_enter_values(this.state,state)
    await this.clear_and_enter_values(this.pincode,pin)
    await this.selectOption(this.country,country)
    await this.clear_and_enter_values(this.delivery,delivery_details)
    this.clickCheck()
   }
}