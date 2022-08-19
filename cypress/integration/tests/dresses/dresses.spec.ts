import PageFactory from '../../objects/page_factory';
import { config } from '../../../../config';
describe('Sumer dresses tests', () => {
  let basePage;
  let account;
  before(() => {
    cy.visit('/');
    basePage = PageFactory.basePage;
    account = PageFactory.Account;
    basePage.getSingleElementOfCategoriesList('Dresses');
    basePage.getSingleElementOfSubcategoriesList('Summer Dresses');
  });

  it(
    'All added dresses should be visible in the cart',
    { defaultCommandTimeout: 10000 },
    () => {
      basePage.getSingleElementOfProductList(2);
      basePage.addElementToCart();
      cy.wait(9000);
      basePage.getSpecificButton('Proceed to checkout');

      basePage.putQuantntityOfItem.should('be.visible').and('have.value', '1');
    }
  );

  it('should be logged on account', { defaultCommandTimeout: 10000 }, () => {
    basePage.getSpecificoperationFromNavigation('Proceed to checkout');
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
      basePage.getSpecificoperationFromNavigation('Proceed to checkout');
      cy.wait(9000);
      basePage.selectAgreeInTerms();
      basePage.getSpecificoperationFromNavigation('Proceed to checkout');
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
      basePage.getPaymentMethod('bankwire');
      basePage.getSpecificoperationFromNavigation('I confirm my order');
      basePage.orderConfirmation
        .should('be.visible')
        .and('have.text', 'Your order on My Store is complete.');
    }
  );
});
