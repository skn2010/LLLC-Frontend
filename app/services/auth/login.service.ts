import http from "@/app/utils/http";

export default async function login(credential: string) {
  const response = await http("/auth/google-login", {
    method: "POST",
    includeAuth: false,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ credential }),
  });

  return response;
}
