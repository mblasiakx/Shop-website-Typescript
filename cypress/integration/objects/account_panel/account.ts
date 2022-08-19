export class Account {
  get createAccountPanel() {
    return cy.get('#create-account_form');
  }
  getSpecificFieldBeforeCreateAccount(field: string) {
    return this.createAccountPanel.find(`#${field}`);
  }
  get loginPanel() {
    return cy.get('#login_form');
  }
  getSpecificFieldFromLoginForm(field: string) {
    return this.loginPanel.find(`#${field}`);
  }
  get accountCreateForm() {
    return cy.get('#account-creation_form');
  }
  getSpecificFieldFromCreateForm(field: string) {
    return this.accountCreateForm.find(`#${field}`);
  }

  get pageTitle() {
    return cy.get('.page-heading');
  }

  makeAccountAction(action: string, field: string, value?: string) {
    switch (action) {
      case 'type before create account':
        return this.getSpecificFieldBeforeCreateAccount(field).type(value);
      case 'submit before create account':
        return this.getSpecificFieldBeforeCreateAccount(field).click();

      case 'type in login panel':
        return this.getSpecificFieldFromLoginForm(field).type(value);
      case 'submit in login panel':
        return this.getSpecificFieldFromLoginForm(field).click();
    }
  }

  createAccountAction(action: string, field: string, value?: string) {
    switch (action) {
      case 'type':
        return this.getSpecificFieldFromCreateForm(field).type(value);
      case 'select':
        return this.getSpecificFieldFromCreateForm(field).select(value);
      case 'click':
        return this.getSpecificFieldFromCreateForm(field).click();
    }
  }
}
