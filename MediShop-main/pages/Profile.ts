import { Locator, Page } from "@playwright/test";

export class Profile {
  readonly profile_dp: Locator;
  readonly log_out:Locator
  constructor(private page: Page) {
    this.page = page;
    this.profile_dp = page.getByTestId("account_menu_button");
    this.log_out = page.getByTestId("logout_button")
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
}
