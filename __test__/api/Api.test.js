const app = require("../../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

// jest.useFakeTimers();
it("Gets the test endpoint", async (done) => {
  // Sends GET Request to /test endpoint
  const res = await request.get("/api/");
  expect(res.statusCode).toBe(200);
  done();
});
