describe("상품 상세 페이지", () => {
  beforeEach(() => {
    cy.visit("/products/0");
  });

  //첫 번째 테스트
  it("상품 상세 페이지에 진입하면 상품 이름, 가격, 이미지가 정상적으로 노출된다.", () => {
    //assertion
    cy.getByCy("product-image").should("be.visible");
    cy.getByCy("product-name").should("be.visible");
    cy.getByCy("product-price").should("be.visible");
  });

  //두 번째 테스트
  it('장바구니에 담기 버튼을 클릭하면 "장바구니에 담겼습니다"가 표시된다.', () => {
    // prepare
    const stub = cy.stub();
    cy.on("window:alert", stub);

    // action
    cy.getByCy("cart-button")
      .click()
      .then(() => {
        //assertion
        expect(stub.getCall(0)).to.be.calledWith(`장바구니에 담겼습니다`);
      });
  });

  //세 번째 테스트
  it.only("장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다", () => {
    //action
    cy.getByCy("cart-button").click();

    //assertion
    cy.url().should("include", "/cart");
  });
});
