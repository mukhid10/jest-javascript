const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(`http://localhost:5000/note/${id}`);
  console.log(results);
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 3, 2], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(3);

  expect(mockCallback.mock.calls[0][0]).toBe(0);

  console.log(mockCallback.mock.results[1]);
  expect(mockCallback.mock.results[0].value).toBe(42);
});

it("mock return", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello");

  const result1 = mock();
  const result2 = mock();
  const result3 = mock();

  expect(result1).toBe(true);
  expect(result2).toBe(false);
  expect(result3).toBe("Hello");
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      note: "get 1m before 30th age",
    },
  });
  const result = await fetchData(1);
  expect(result.note).toBe("get 1m before 30th age");
});
