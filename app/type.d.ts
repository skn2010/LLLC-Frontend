type TUser = {
  _id: string;
  full_name: string;
  email: string;
  contact?: string;
  address?: string;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
  avatar: string;
  is_admin: boolean;
  updated_date: Date | null;
  join_date: Date;
};
