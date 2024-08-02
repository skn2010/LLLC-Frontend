import http from "@/app/utils/http";

export type Props = {
  data: Omit<Partial<TUser>, "_id">;
  userId: string;
  [key: string]: unknown;
};

export type TUserData = {
  data: TUser;
  message: string;
};

export async function updateUser({ data, userId, ...others }: Props) {
  const user: TUserData = await http(`/users/${userId}`, {
    method: "PATCH",
    includeAuth: true,
    body: JSON.stringify(data),

    headers: {
      "Content-Type": "application/json",
    },
    ...others,
  });

  return user;
}
