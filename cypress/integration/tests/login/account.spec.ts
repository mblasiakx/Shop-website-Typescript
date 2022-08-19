import PageFactory from '../../objects/page_factory';
import { config } from '../../../../config';
describe('Order shirts tests', () => {
  let account;
  before(() => {
    cy.visit('/');
    const basePage = PageFactory.basePage;
    account = PageFactory.Account;
    basePage.goToSignInPanel();
  });

  it(
    'Should go to create account panel ',
    { defaultCommandTimeout: 10000 },
    () => {
      account.makeAccountAction(
        'type before create account',
        'email_create',
        config.Account.emial
      );
      account.makeAccountAction('submit before create account', 'SubmitCreate');

      account.pageTitle
        .should('be.visible')
        .and('have.text', 'Create an account');
    }
  );

  it(
    'Should fill all fields and submit',
    { defaultCommandTimeout: 10000 },
    () => {
      account.createAccountAction(
        'type',
        'customer_firstname',
        config.Account.name
      );
      account.createAccountAction(
        'type',
        'customer_lastname',
        config.Account.surname
      );
      account.createAccountAction('type', 'passwd', config.Account.password);
      account.createAccountAction('type', 'address1', config.Account.address);
      account.createAccountAction('type', 'city', config.Account.city);
      account.createAccountAction('type', 'postcode', config.Account.zipcode);
      account.createAccountAction('type', 'phone_mobile', config.Account.phone);
      account.createAccountAction(
        'type',
        'alias',
        config.Account.assigned_address
      );
      account.createAccountAction('select', 'id_state', config.Account.state);
      account.createAccountAction('click', 'submitAccount');

      account.pageTitle.should('be.visible').and('have.text', 'My account');
    }
  );
});
