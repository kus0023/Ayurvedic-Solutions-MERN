const app = require("../../../server");
const supertest = require("supertest");
const User = require("../../../models/User");
const request = supertest(app);
const newUser = {
  firstName: "test",
  lastName: "test",
  email: "test123@gmail.com",
  password: "123456789",
  isAdmin: "false",
};
const user = {
  email: "test.singh@gmail.com",
  password: "shweta@singh",
};

let token = "";
beforeAll(async (done) => {
  const login = await request.post("/api/admin/login").send(user).expect(202);
  token = "Bearer " + login.body.token;
  done();
});

describe("Admin Registration routes", () => {
  it("should give error if admin token not present", async () => {
    const response = await request.post("/api/admin/register").expect(400);
    expect(response.body).toStrictEqual({
      message: "Token is not present in header.",
    });
  });

  it("should give error if information is not sufficient in body", async () => {
    const response = await request
      .post("/api/admin/register")
      .set({ Authorization: token })
      .expect(400);
    expect(response.body).toStrictEqual({
      message:
        "Please provide all required fields [firstName, lastName, email, password, {isAdmin: Optional}] in body.",
    });
  });

  it("should register successfully", async () => {
    const response = await request
      .post("/api/admin/register")
      .set({ Authorization: token })
      .send(newUser)
      .expect(201);
  });

  it("should fail trying to register again with registered email", async () => {
    const response = await request
      .post("/api/admin/register")
      .set({ Authorization: token })
      .send(newUser)
      .expect(406);

    await User.deleteOne({ email: newUser.email });
  });
});

describe("getiing users and admin from admin route", () => {
  it("should give error if token not presesnt", async () => {
    await request.get("/api/admin/users").expect(400);
    await request.get("/api/admin/admins").expect(400);
  });

  it("should get users with pagination", async () => {
    const res = await request
      .get("/api/admin/users")
      .set({ Authorization: token })
      .expect(200);

    expect(res.body.pagination).toBeTruthy();
    expect(res.body.users).toBeTruthy();
  });

  it("should get admins with pagination", async () => {
    const res = await request
      .get("/api/admin/admins")
      .set({ Authorization: token })
      .expect(200);

    expect(res.body.pagination).toBeTruthy();
    expect(res.body.admins).toBeTruthy();
  });
});

afterAll(async (done) => {
  await request
    .get("/api/admin/logout")
    .set({ Authorization: token })
    .send()
    .expect(200);
  done();
});
