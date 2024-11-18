export default async function logoutApi() {
  const request = await fetch("/api/auth", {
    method: "DELETE",
  });

  const response = await request.json();

  if (!request.ok) {
    throw Error(
      response?.message || "Something went wrong, please try again later."
    );
  }

  return response;
}
