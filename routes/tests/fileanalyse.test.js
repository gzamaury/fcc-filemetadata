import fs from "fs";
import path from "path";
import request from "supertest";
import app from "../../index.js";

describe("POST /api/fileanalyse", () => {
  const fileName = "test-file.txt";
  const fileContent = "Test file content.";
  const mimeType = "text/plain";

  let filePath = `routes/tests/${fileName}`;

  it("should upload a file and verify their returned properties", async () => {
    fs.writeFileSync(filePath, fileContent);

    const response = await request(app)
      .post("/api/fileanalyse")
      .attach("upfile", filePath, {
        filename: fileName,
        contentType: mimeType,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name", fileName);
    expect(response.body).toHaveProperty("type", mimeType);
    expect(response.body).toHaveProperty("size", fileContent.length);

    fs.unlinkSync(filePath);
  });

  it("should return an error for invalid input", async () => {
    const response = await request(app).post("/api/fileanalyse").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
