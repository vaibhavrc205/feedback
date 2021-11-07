export default async function apiCall(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // authorization: `Bearer ${token}`,
    },
    body: payload,
  }).then((response) => response.json());

  return res;
}
