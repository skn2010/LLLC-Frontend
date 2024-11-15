import http from "@/app/utils/http";

export type TUserData = {
  data: {
    reaction: {
      totalReactions?: number;
      reactionCounts?: {
        HEART?: number;
        SAD?: number;
        LIKE?: number;
        ANGRY?: number;
      };
    };
  };
};

type Props = {
  id: string;
  token?: string;
  [key: string]: unknown;
};

export async function getUserStatisticsApi({ id, token, ...others }: Props) {
  const user: TUserData = await http(`/users/${id}/statistics`, {
    method: "GET",
    includeAuth: true,
    token,
    headers: {
      "Content-Type": "application/json",
    },
    ...others,
    next: {
      cache: "no-store",
    },
  });

  return user;
}
