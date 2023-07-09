import request from "supertest";
import app from "../index";

describe("GET /api/hello", () => {
  it("should return a JSON object with greeting", async () => {
    const response = await request(app).get("/api/hello");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ greeting: "hello API" });
  });
});
