describe("Testing environment variable", () => {
  it("should have mongoURL", () => {
    expect(process.env.DATABASE_NAME).toBe("ayurvedic-solutions-test");
  });
});
