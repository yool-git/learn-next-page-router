describe("카운터 테스트", () => {
  beforeEach(() => {
    //그룹핑된 describe 안에서의 모든 테스트 코드가 실행되기 전에 공통 로직을 실행하고 싶을때 사용
    cy.visit("http://localhost:3000");
  });

  it("카운터페이지에 진입하면 counter 초기값이 0이여야 한다.", () => {
    //cy.get("[data-cy=counter]").contains(0);
    cy.getByCy("counter").contains(0); //변경 : custom command 사용
  });

  it("+버튼을 누르면 1이 증가한다.", () => {
    cy.getByCy("add-button").click();
    cy.getByCy("counter").contains(1);
  });

  it("-버튼을 누르면 1 감소한다.", () => {
    cy.getByCy("minus-button").click();
    cy.getByCy("counter").contains(-1);
  });
});
