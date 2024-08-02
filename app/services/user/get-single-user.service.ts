import http from "@/app/utils/http";

export type TUserData = {
  data: TUser;
};

type Props = {
  id: string;
  token?: string;
  [key: string]: unknown;
};

export async function getSingleUserData({ id, token, ...others }: Props) {
  const user: TUserData = await http(`/users/${id}`, {
    method: "GET",
    includeAuth: true,
    token,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return user;
}
