export class BasePage {
  get categoriesList() {
    return cy.get('#block_top_menu');
  }
  get subCategories() {
    return cy.get('#subcategories');
  }
  get signInButtonPanel() {
    return cy.get('.login');
  }

  get popupContainer() {
    return cy.get('.clearfix');
  }

  get buttonContainer() {
    return this.popupContainer.find('.button-container');
  }

  get productList() {
    return cy.get('.product_list');
  }

  get addToCartButton() {
    return cy.get('#add_to_cart');
  }

  get popupLayer() {
    return cy.get('#layer_cart');
  }
  get productInfoBox() {
    return cy.get('.box-info-product');
  }

  get putQuantntityOfItem() {
    return this.productInfoBox.find('#quantity_wanted');
  }
  get selectSizeList() {
    return this.productInfoBox.find('#group_1');
  }

  get itemInSummaryTable() {
    return cy.get('.cart_item');
  }

  get navigationPanel() {
    return cy.get('.cart_navigation');
  }

  get termsOfService() {
    return cy.get('.order_carrier_content');
  }

  get paymentPanel() {
    return cy.get('#HOOK_PAYMENT');
  }

  get orderConfirmation() {
    return cy.get('.cheque-indent').children();
  }

  goToSignInPanel() {
    return this.signInButtonPanel.click();
  }

  getSingleElementOfCategoriesList(name: string) {
    return this.categoriesList.contains(name).click({ force: true });
  }
  getSingleElementOfSubcategoriesList(name: string) {
    return this.subCategories.contains(name).click({ force: true });
  }

  getSpecificButton(name: string) {
    return this.buttonContainer.contains(name).click({ force: true });
  }

  getSingleElementOfProductList(element: number) {
    return this.productList.find('.product_img_link').eq(element).click();
  }

  addElementToCart() {
    return this.addToCartButton.click();
  }

  getPaymentMethod(method: string) {
    switch (method) {
      case 'bankwire':
        return this.paymentPanel.find('.bankwire').click();
      case 'cheque':
        return this.paymentPanel.find('.cheque').click();
    }
  }

  selectAgreeInTerms() {
    return this.termsOfService.find('#cgv').click();
  }

  getSpecificoperationFromNavigation(operation: string) {
    return this.navigationPanel.contains(operation).click();
  }

  deleteItemFromList(element: number) {
    return this.itemInSummaryTable
      .eq(element)
      .find('.cart_quantity_delete')
      .click();
  }

  modifyItem(option: string, value: string) {
    switch (option) {
      case 'change':
        return this.putQuantntityOfItem.clear().type(value);
      case 'select':
        return this.selectSizeList.select(value);
    }
  }
}
