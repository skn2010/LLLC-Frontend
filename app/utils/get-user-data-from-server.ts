import { cookies } from "next/headers";

export default function getUserDataFromServer() {
  const token = cookies().get("token")?.value;
  const user = cookies().get("user")?.value;

  try {
    const parsedUser = JSON.parse(user as string);
    return { token, user: parsedUser };
  } catch {
    return { token, user: {} };
  }
}
