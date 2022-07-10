import isMalayalam from "./index";

test("Check with english characters", () => {
  expect(isMalayalam("Malayalam")).toBeFalsy();
});

test("Check with malayalam characters", () => {
  expect(isMalayalam("മലയാളം")).toBeTruthy();
});

test("Check with both english and malayalam characters", () => {
  expect(isMalayalam("Malayalam മലയാളം")).toBeTruthy();
});
