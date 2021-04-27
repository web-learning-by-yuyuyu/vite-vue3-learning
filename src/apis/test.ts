import serve from "@utils/request";

export function testApis() {
  return serve({
    method: "get",
    url: "/api/get",
  });
}
export function getUserInfo() {
  return serve({
    method: "get",
    url: "/api/use/info",
  });
}
