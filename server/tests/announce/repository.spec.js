const { tables } = require("../config");

describe("AnnounceRepository readAll", () => {
  test("should return all fields from the announce table", async () => {
    const returned = await tables.announce.readAll();

    expect(returned.length).toBeGreaterThan(0);
    expect(returned[0]).toHaveProperty("job_title");
  });
});

describe("AnnounceRepository read", () => {
  test("should return all fields from one announce", async () => {
    const returned = await tables.announce.read(1);

    expect(returned).toHaveProperty("job_title");
  });

  test("should return an empty table when the requested announce does not exist", async () => {
    const [returned] = await tables.announce.read(6000);

    expect(returned).toBe(undefined);
  });
});
