import { BasePage } from '../objects/base_page';
import { Account } from '../objects/account_panel/account';
class PageFactory {
  get basePage() {
    return new BasePage();
  }
  get Account() {
    return new Account();
  }
}
export default new PageFactory();
