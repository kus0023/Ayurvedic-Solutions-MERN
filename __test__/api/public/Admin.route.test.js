const app = require("../../../server");
const supertest = require("supertest");
const request = supertest(app);

describe("Admin Login Route", function () {
  it("should give 200 on /api/admin", async () => {
    await request.get("/api/admin").expect(200);
  });
  it("should give 400 status when credentials are missing from the body", async () => {
    const response = await request
      .post("/api/admin/login")
      .send({})
      .expect(400);
    expect(response.body.message).toBeTruthy();
  });

  it("should give 403 status when login with wrong credentials", async () => {
    const response = await request
      .post("/api/admin/login")
      .send({ email: "test.singh@gmail.com", password: "blahblah" })
      .expect(403);

    expect(response.body.message).toBeTruthy();
  });

  it("should give token after login with correct credentials", async function () {
    const response = await request
      .post("/api/admin/login")
      .send({ email: "test.singh@gmail.com", password: "shweta@singh" })
      .expect(202);

    expect(response.body.token).toBeTruthy();
  });
});
