import { jest } from "@jest/globals";
import { isVisionModel } from "../app/utils";

describe("isVisionModel", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test("should identify vision models using regex patterns", () => {

  });

  test("should exclude specific models", () => {
    expect(isVisionModel("claude-3-5-haiku-20241022")).toBe(false);
  });

  test("should not identify non-vision models", () => {

  });

  test("should identify models from VISION_MODELS env var", () => {

  });

  test("should handle empty or missing VISION_MODELS", () => {

  });
});
