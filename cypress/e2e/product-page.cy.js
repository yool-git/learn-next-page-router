const { THREE_PRODUCT_ITEMS } = require("../fixtures");

describe("상품 목록 페이지", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  //첫 번째 테스트 시나리오
  it("페이지에 진입하면 상품 목록이 표시된다.", () => {
    cy.getByCy("product-item").should("be.visible");
  });

  //두 번째 테스트 시나리오
  it("네비게이션바의 장바구니 링크를 클릭하면 장바구니 페이지로 이동한다.", () => {
    //action
    cy.getByCy("cart-link").click();
    //assertion - 보장
    cy.url().should("include", "/cart");
    cy.getByCy("cart-header").should("be.visible");
  });

  //세 번째 테스트 시나리오
  it("상품 목록의 아이템을 클릭하면 상품 상세 페이지로 이동한다.", () => {
    //action
    cy.getByCy("product-item").first().click();

    //assertion
    cy.url().should("include", "/products/");
  });

  //네 번째 테스트 시나리오
  it.only("상품 목록이 3개면 화면에 3개 상품이 표시된다", () => {
    //prepare
    cy.intercept("/products", THREE_PRODUCT_ITEMS).as("getProducts");
    cy.visit("/");
    cy.wait("@getProducts");

    //assertion
    cy.getByCy("product-item").should("have.length", 3);
  });
});
