import { GetAgeAsNumber } from "../Utils/GetAgeAsNumber";

describe("Testing the age helper function", () => {
  test("it should return my age (21)", () => {
    expect(GetAgeAsNumber(new Date("December 13, 2000"))).toEqual("21");
  });
});
