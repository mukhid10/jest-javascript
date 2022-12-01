const fetchData = require("./async");

it("return correct user", async () => {
  //   fetchData(1).then((note) => {
  //     expect(note.data[0].id).toBe(1);
  //   });
  const note = await fetchData(1);
  expect(note.data[0].id).toBe(1);
});
