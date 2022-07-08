import calCorectRate from "./calCorrectRate";

describe("calCorrectRate", () => {
  it("test case 1", () => {
    expect(calCorectRate(3, 6)).toBe("50.00");
  })
  it("test case 2", () => {
    expect(calCorectRate(0, 0)).toBe("NaN");
  })
  it("test case 3", () => {
    expect(calCorectRate(1, 1)).toBe("100.00");
  })
  it("test case 4", () => {
    expect(calCorectRate(2, 2)).toBe("100.00");
  })
  it("Testing general case 1", () => {
    expect(calCorectRate(10, 12)).toBe("83.33");
  })
  it("Testing general case 2", () => {
    expect(calCorectRate(10, 10)).toBe("100.00");
  })
  it("Testing general case 3", () => {
    expect(calCorectRate(10, 11)).toBe("90.91");
  })
  it("Testing general case 4", () => {
    expect(calCorectRate(10, 20)).toBe("50.00");
  })
}
);