const app = require("../../../server");
const supertest = require("supertest");
const request = supertest(app);

let token = "";
const user = {
  email: "test.singh@gmail.com",
  password: "shweta@singh",
};

const newDisease = {
  name: "Disease 1",
  commonNames: ["one", "disease"],
  description: "This is small description",
  causes: ["cause1", "cause2", "cause3"],
  symptoms: ["sym1", "sym2", "sym3"],
};
let id = "";
beforeAll(async (done) => {
  const res = await request.post("/api/admin/login").send(user).expect(202);
  expect(res.body.token).toBeTruthy();
  token = "Bearer " + res.body.token;
  done();
});

describe("Disease private routes of Add", () => {
  it("should add the disease", async () => {
    const res = await request
      .post("/api/disease/add")
      .set({ Authorization: token })
      .send(newDisease);

    expect(res.status).toBe(200);

    const { disease } = res.body;

    id = disease._id;

    expect(disease.name).toBe(newDisease.name);
    expect(disease.description).toBe(newDisease.description);
    expect(disease.commonNames).toStrictEqual(newDisease.commonNames);
    expect(disease.causes).toStrictEqual(newDisease.causes);
    expect(disease.symptoms).toStrictEqual(newDisease.symptoms);
  });

  it("should give error if name is same", async () => {
    await request
      .post("/api/disease/add")
      .set({ Authorization: token })
      .send(newDisease)
      .expect(400);
  });
});

describe("Updating routes of disease", () => {
  it("should update the name only", async () => {
    res = await request
      .post("/api/disease/update")
      .set({ Authorization: token })
      .query({ id })
      .send({ name: "Updated Name" })
      .expect(200);
    const { disease } = res.body;
    expect(disease.name).toBe("Updated Name");
    expect(disease.description).toBe(newDisease.description);
    expect(disease.commonNames).toStrictEqual(newDisease.commonNames);
    expect(disease.causes).toStrictEqual(newDisease.causes);
    expect(disease.symptoms).toStrictEqual(newDisease.symptoms);

    await request
      .post("/api/disease/update")
      .set({ Authorization: token })
      .query({ id })
      .send({ name: newDisease.name })
      .expect(200);
  });
});

describe("Deleting routes of disease", () => {
  it("should delete the disease", async () => {
    await request
      .delete("/api/disease/delete")
      .query({ id })
      .set({ Authorization: token })
      .expect(200);
  });
});

afterAll(async (done) => {
  await request
    .get("/api/admin/logout")
    .set({ Authorization: token })
    .expect(200);

  done();
});
