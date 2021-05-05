const app = require("../../../server");
const supertest = require("supertest");
const User = require("../../../models/User");
const request = supertest(app);

const user = {
  email: "fake1@gmail.com",
  password: "fake1password",
};

const newUser = {
  firstName: "test",
  lastName: "test",
  email: "test123@gmail.com",
  password: "123456789",
};

let token = "";

describe("login route", () => {
  it("should give error if login with no credentials", async () => {
    const res = await request.post("/api/user/login").expect(400);
    expect(res.body).toStrictEqual({
      message: "Provide email and password",
    });
  });

  it("should give error if login with wrong email", async () => {
    const res = await request
      .post("/api/user/login")
      .send({ email: "nopresent@gmail.com", password: "fake1password" })
      .expect(404);
    expect(res.body).toStrictEqual({
      message: "Email is not valid",
    });
  });

  it("should give error if login with wrong password", async () => {
    const res = await request
      .post("/api/user/login")
      .send({ email: "fake1@gmail.com", password: "incorrectPassword" })
      .expect(403);
    expect(res.body).toStrictEqual({
      message: "Password is incorrect.",
    });
  });

  it("should successfully login with correct credentials", async () => {
    const res = await request.post("/api/user/login").send(user).expect(202);
    expect(res.body.token).toBeTruthy();
    token = "Bearer " + res.body.token;

    const lougoutRes = await request
      .get("/api/user/logout")
      .set({ Authorization: token })
      .expect(200);

    expect(lougoutRes.body).toStrictEqual({ message: "successfuly logout" });
  });
});

describe("register route", () => {
  it("should register successfully", async () => {
    await request.post("/api/user/register").send(newUser).expect(201);
  });

  it("should give error when register with same email", async () => {
    await request.post("/api/user/register").send(newUser).expect(406);

    await User.deleteOne({ email: newUser.email });
  });
});
