const app = require("../../../server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

describe("Admin Public Route tests", function () {
  it("should give token after login", async function () {
    const response = await request
      .post("/api/admin/login")
      .send({ email: "test.singh@gmail.com", password: "shweta@singh" })
      .expect(200);

    expect(response.body.token).toBeTruthy();
  });
});
