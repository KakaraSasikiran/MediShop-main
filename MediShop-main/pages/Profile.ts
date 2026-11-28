import { Locator, Page } from "@playwright/test";

export class Profile {
  readonly profile_dp: Locator;
  readonly log_out:Locator
  readonly edit_profile_details:Locator
  readonly full_name:Locator
  readonly phone_number:Locator
  readonly email:Locator
  readonly practice_only:Locator
  readonly checkbox:Locator
  readonly save_changes:Locator
  constructor(private page: Page) {
    this.page = page;
    this.profile_dp = page.getByTestId("account_menu_button");
    this.log_out = page.getByTestId("logout_button")
    this.edit_profile_details = page.getByTestId("edit_profile_button")
    this.full_name = page.getByTestId("edit_profile_name_input")
    this.phone_number = page.getByTestId("edit_profile_phone_input")
    this.email = page.getByTestId("email_id")
    this.practice_only = page.getByTestId("edit_profile_practice_input")
    this.checkbox = page.getByTestId("edit_profile_newsletter_checkbox")
    this.save_changes = page.getByTestId("edit_profile_save_button")
  }
  async clickProfile() {
    await this.profile_dp.click();
  }
  async clickLogout(){
    await this.log_out.click()
  }
  async selectProfile(name: string) {
    const data = await this.page.locator("a[role='menuitem']").allInnerTexts();
    for (const d of data) {
      if (d.includes(name)) {
        await this.page.getByText(d).first().click();
      }
    }
  }
  async chooseSelect(name:string){
    await this.page.getByTestId("edit_profile_role_select").selectOption(name)
  }
  async setAbout(stringvalue:string){
    await this.page.getByTestId("edit_profile_bio_input").fill(stringvalue)
  }
  
  async edit_profileDetails(fullname:string,phone:string,email_id:string,practice_name:string,role:string,bio:string){
    await this.edit_profile_details.click()
    await this.full_name.fill(fullname)
    await this.phone_number.fill(phone)
    await this.email.fill(email_id)
    await this.practice_only.fill(practice_name)
    await this.chooseSelect(role)
    await this.setAbout(bio)
    await this.checkbox.check()
    await this.save_changes.click()
  }

  async clickMyOrders(){
    await this.page.getByTestId("profile_menu_orders").click()
  }
  async clickMyPrescription(){
    await this.page.getByTestId("profile_menu_prescriptions").click()
  }
  async click_upload_prescription(){
    await this.page.waitForLoadState()
    await this.page.getByTestId("upload_prescription_button").click()
  }
  async upload_prescription(filename:string,patient_name:string,prescribing_doctor:string,prescribe_date:string,notes:string){
     await this.page.setInputFiles("input[class='input file-input']",filename)
     await this.page.getByTestId("rx_patient_input").fill(patient_name)
     await this.page.getByTestId("rx_doctor_input").fill(prescribing_doctor)
     await this.page.getByTestId("rx_date_input").fill(prescribe_date)
     await this.page.getByTestId("rx_notes_input").fill(notes)
     await this.page.getByTestId("rx_consent_checkbox").check()
     await this.page.getByTestId("prescription_save_button").click()

  }
  async perform_view(){
    await this.page.getByTestId("view_prescription_0").click()
  }
  async perform_delete(){
    await this.page.getByTestId("delete_prescription_0").click()
  }
}
