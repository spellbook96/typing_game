import { createYield } from "typescript";

describe("App", () => {
  it("renders without crashing", () => {
    cy.visit("/");
  });
  it("should have a header", () => {
    cy.get("header");
  });
  it("should hava header name 'NS-TYPING'", () => {
    cy.get("header").contains("NS-TYPING").should("exist");
  });
  it("check home", () => {
    cy.contains("数字・記号専用のタイピング練習ゲーム").should("exist");
  });
  it("check Playing and go back", () => {
    cy.contains("プレイする").click();
    cy.contains("表示された数字または記号のキーを押してください").should(
      "exist"
    );
    cy.contains("経過時間：").should("exist");
    cy.contains("タイトルに戻る").click();
    cy.contains("数字・記号専用のタイピング練習ゲーム").should("exist");
  });

  it("type 10 correct answers and go to gameOver", () => {
    cy.contains("プレイする").click();
    for (let i = 0; i < 10; i++) {
      cy.get("#current-question").then((answer) => {
        cy.get("body").type(answer.text());
      });
    }
    cy.contains("結果").should("exist");
    cy.contains("タイトルに戻る").click();
  });

  it("type 1 incorrect answer and go to gameOver", () => {
    cy.contains("プレイする").click();
    cy.get("#current-question").should("exist");
    cy.get("body").type("a");
    cy.get("#current-question-false").should("exist").should("have.css","color","rgb(255, 0, 0)").then((answer)=>{
      cy.get("body").type(answer.text());
    });
    for (let i = 1; i < 10; i++) {
      cy.get("#current-question").then((answer) => {
        cy.get("body").type(answer.text());
      });
    }
    cy.contains("結果").should("exist");
    cy.contains("ミスタイプ数: 1").should("exist");
    cy.contains("正確率: 90.91%").should("exist");
    // cy.contains("タイトルに戻る").click();
  });

});
