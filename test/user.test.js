const userApi = "http://localhost:3030/api/v1/user";
const axios = require("axios");

describe("testing user's api", () => {
  test("get functionality", async () => {
    const res = await axios.get(`${userApi}/all`);

    expect(res.status).toBe(200);

    expect(res.data).toEqual({
      message: "5 users found",
      data: [
        {
          _id: "63feb9858330117960821ca7",
          fullName: "kayitare",
          email: "cyntjob1@gmail.com",
          password:
            "$2b$10$iSSLEraJicmQp3HYRZRyxeozB/p1ulBqAYApY05te.WDlXVqyavPy",
          repeatPassword: "cycy@1234",
          role: "user",
          registered: "2023-03-01T02:24:48.391Z",
          __v: 0,
        },
        {
          _id: "63fec2409a4592717cba1fc3",
          fullName: "kayitare",
          email: "cyntjo@gmail.com",
          password:
            "$2b$10$x9SZHmtdYeUPOuOZv4XMluFcXDko3WbDS8UTDZiCSK2z831NM9DmK",
          repeatPassword: "cycy@1234",
          role: "admin",
          registered: "2023-03-01T03:10:21.629Z",
          __v: 0,
        },
        {
          _id: "63ffe7add7f73cd43efa0b69",
          fullName: "ksyitare",
          email: "cyntkayitare@gmail.com",
          password:
            "$2b$10$ry97TefihUmDB4GR/avHueI.BzbbwLVuyLpfJWNoqO4L9.ve8OlRW",
          repeatPassword: "Cycy@1234",
          role: "admin",
          registered: "2023-03-01T23:57:10.454Z",
          __v: 0,
        },
        {
          _id: "64022518aa1028e41c8a10a0",
          fullName: "david",
          email: "tuyishmirend@gmail.com",
          password:
            "$2b$10$VhU3wJFLp1EwVNS6NzOQiOQpSzapn.6BmokwSKx3InYdi8DGBJeO.",
          repeatPassword: "Cycy@1234",
          role: "user",
          registered: "2023-03-03T16:47:11.471Z",
          __v: 0,
        },
        {
          _id: "6407466ebbe6af8c6c088902",
          fullName: "david",
          email: "kacynthian@gmail.com",
          password:
            "$2b$10$xLp3h5EtzEtlA4NdWWeqNOP4p5St7PMgilYHzW7HGvUcDl.UvYToi",
          repeatPassword: "Cycy@1234",
          role: "user",
          registered: "2023-03-07T14:13:01.969Z",
          __v: 0,
        },
      ],
    });
  });
});
