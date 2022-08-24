import { GetAgeAsNumber } from "../Utils/GetAgeAsNumber";

describe("Testing the age helper function", () => {
  test("it should return 10", () => {
    GetAgeAsNumber(new Date("December 13, 2000"));
  });
});
