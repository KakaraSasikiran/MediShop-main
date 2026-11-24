export interface AddToCarts{

    add_to_cart_by_medicine_name(medicine_name:string,count:number):Promise<void>
    click_add_to_cart():Promise<void>
}