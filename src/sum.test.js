import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + -2 to equal -1", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("adds 'foo' + 'bar' to equal 'foobar'", () => {
  expect(sum("foo", "bar")).toBe("foobar");
});
