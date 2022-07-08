import randomIntArray from "./randomIntArray";

describe("Testing randomIntArray", () => {
  for(let i = 0; i < 10; i++) {
    it("test case "+i, () => {
      const result = randomIntArray(41, 10);
      const length = result.length;
      expect(length).toBe(10);
      // test no repeat
      const newLength=new Set(result.map(item=>item)).size;
      expect(newLength).toBe(length);
    });


  }
  for(let i=0;i<10;i++){
    it("Testing output range", () => {
      const result = randomIntArray(41, 10);
      const min = Math.min(...result);
      const max = Math.max(...result);
      expect(min>=0).toBe(true);
      expect(max<=41).toBe(true);
    }
    );
  }
}
);

// describe("Testing randomIntArray randomness", () => {
// });