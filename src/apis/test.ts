import serve from "@utils/request";

export function testApis() {
  return serve({
    method: "get",
    url: "/api/get",
  });
}
