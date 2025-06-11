import { isModelNotavailableInServer } from "../app/utils/model";

describe("isModelNotavailableInServer", () => {
  test("test model will return false, which means the model is available", () => {

  });

  test("test model will return true when model is not available in custom models", () => {

  });

  test("should respect DISABLE_GPT4 setting", () => {

  });

  test("should handle empty provider names", () => {

  });

  test("should be case insensitive for model names", () => {

  });

  test("support passing multiple providers, model unavailable on one of the providers will return true", () => {

  });

  // FIXME: 这个测试用例有问题，需要修复
  //   test("support passing multiple providers, model available on one of the providers will return false", () => {
  //     const customModels = "-all,gpt-4@google";
  //     const modelName = "gpt-4";
  //     const providerNames = ["OpenAI", "Google"];
  //     const result = isModelNotavailableInServer(
  //       customModels,
  //       modelName,
  //       providerNames,
  //     );
  //     expect(result).toBe(false);
  //   });

  test("test custom model without setting provider", () => {

});
