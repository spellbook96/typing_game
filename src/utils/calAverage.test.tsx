import calAverage from "./calAverage";

describe("calAverage", () => {
  it("Testing special cases 1", () => {
    expect(calAverage(6, 2)).toBe("3.00");
  });
  it("Testing special cases 2", () => {
    expect(calAverage(0, 0)).toBe("NaN");
  });
  it("Testing special cases 3", () => {
    expect(calAverage(1, 1)).toBe("1.00");
  });
  it("Testing special cases 4", () => {
    expect(calAverage(0, 5)).toBe("0.00");
  });

  it("Testing general case 1", () => {
    expect(calAverage(10, 40.52)).toBe("0.25");
  })
  it("Testing general case 2", () => {
    expect(calAverage(10, 60.01)).toBe("0.17");
  });
  it("Testing general case 3", () => {
    expect(calAverage(10, 100.581)).toBe("0.10");
  });
});
