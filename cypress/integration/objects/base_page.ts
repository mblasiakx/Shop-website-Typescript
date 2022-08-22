export class BasePage {
  get categoriesList() {
    return cy.get('#block_top_menu');
  }

  get signInButtonPanel() {
    return cy.get('.login');
  }

  goToSpecyficProductTab(name: string) {
    return this.categoriesList.contains(name).click({ force: true });
  }

  goToSignInPanel() {
    return this.signInButtonPanel.click();
  }
}
