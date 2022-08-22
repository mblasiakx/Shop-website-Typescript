import PageFactory from '../../objects/page_factory';
import { config } from '../../../../config';
describe('Order shirts tests', () => {
  let account;
  let basePage;
  let products;
  let orderActions;
  before(() => {
    cy.visit('/');
    basePage = PageFactory.basePage;
    account = PageFactory.Account;
    products = PageFactory.Products;
    orderActions = PageFactory.OrderActions;
    basePage.goToSpecyficProductTab('T-shirts');
  });

  it(
    'All added shirts should be visible in the cart',
    { defaultCommandTimeout: 10000 },
    () => {
      products.clickSingleElementOfProductList(0);
      orderActions.addElementToCart();
      cy.wait(9000);
      orderActions.clickSpecificButton('Continue shopping ');
      orderActions.modifyItem('change', '5');
      orderActions.modifyItem('select', '2');

      orderActions.putQuantntityOfItem
        .should('be.visible')
        .and('have.value', '5');
    }
  );

  it(
    'should add only one item on list t cart',
    { defaultCommandTimeout: 10000 },
    () => {
      orderActions.addElementToCart();
      cy.wait(9000);
      orderActions.clickSpecificButton('Proceed to checkout');
      cy.wait(9000);
      orderActions.deleteItemFromList(1);
      orderActions.rowsInsideSummaryTable.should('have.length', 1); /////////////////////////////////
    }
  );

  it('should be logged on account', { defaultCommandTimeout: 10000 }, () => {
    orderActions.clickSpecificButtonFromNavigation('Proceed to checkout');
    account.makeAccountAction(
      'type in login panel',
      'email',
      config.Account.emial
    );
    account.makeAccountAction(
      'type in login panel',
      'passwd',
      config.Account.password
    );
    account.makeAccountAction('submit in login panel', 'SubmitLogin');
    account.pageTitle.should('be.visible').and('have.text', 'Addresses');
  });

  it(
    'should select terms of and procedd to checkout',
    { defaultCommandTimeout: 10000 },
    () => {
      orderActions.clickSpecificButtonFromNavigation('Proceed to checkout');
      cy.wait(9000);
      orderActions.selectAgreeInTerms();
      orderActions.clickSpecificButtonFromNavigation('Proceed to checkout');
      cy.wait(9000);
      account.pageTitle
        .should('be.visible')
        .and('have.text', 'Please choose your payment method');
    }
  );

  it(
    'should selec payment method and confiorm order',
    { defaultCommandTimeout: 10000 },
    () => {
      orderActions.selectPaymentMethod('bankwire');
      orderActions.clickSpecificButtonFromNavigation('I confirm my order');
      orderActions.orderConfirmation
        .should('be.visible')
        .and('have.text', 'Your order on My Store is complete.');
    }
  );
});
