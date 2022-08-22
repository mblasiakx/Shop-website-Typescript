import { BasePage } from '../objects/base_page';
import { Account } from '../objects/account_panel/account';
import { Products } from '../objects/products_panel/products';
import { OrderActions } from '../objects/order_panel/order_actions';
class PageFactory {
  get basePage() {
    return new BasePage();
  }
  get Account() {
    return new Account();
  }
  get Products() {
    return new Products();
  }
  get OrderActions() {
    return new OrderActions();
  }
}
export default new PageFactory();
