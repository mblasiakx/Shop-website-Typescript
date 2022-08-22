export class Products {
  get subCategories() {
    return cy.get('#subcategories');
  }

  get productList() {
    return cy.get('.product_list');
  }

  goToSpecyficSubcategories(name: string) {
    return this.subCategories.contains(name).click({ force: true });
  }

  clickSingleElementOfProductList(element: number) {
    return this.productList.find('.product_img_link').eq(element).click();
  }
}
