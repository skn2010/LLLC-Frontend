type TImage = {
  url: string;
  fileId: string;
  fileName: string;
  container_name: string;
};

type TUser = {
  _id: string;
  full_name: string;
  email: string;
  contact?: string;
  address?: string;
  status: "ACTIVE" | "INACTIVE" | "DELETED";
  avatar: string;
  is_admin: boolean;
  updated_date: string | null;
  join_date: string;
};

type TCategory = {
  _id: string;
  name: string;
  image: {
    url: string;
    fileId: string;
    fileName: string;
    contentType: string;
  } | null;

  is_active: boolean;
  created_by: Types.ObjectId | TUser | null;
  updated_date: string | null;
  created_date: string;
};

type TCompanyReviewStats = {
  totalReviews: number;
  averageRating: number;
  totalRatingStars: number;
};

type TCompany = {
  _id: string;
  name: string;
  email: string;
  opening_time: string;
  closing_time: string;
  description: string;
  contact_number: string;
  is_deleted: boolean;
  cover_image: {
    url: string;
    fileId: string;
    fileName: string;
    contentType: string;
  } | null;
  location: { latitude: number | string; longitude: number | string };
  category: string | TCategory | null;
  created_by: string | TUser | null;
  updated_date: string | null;
  created_date: string;
};

type TCompanyDetails = {
  _id: string;
  name: string;
  email: string;
  opening_time: string;
  closing_time: string;
  description: string;
  contact_number: string;
  is_deleted: boolean;
  cover_image: {
    url: string;
    fileId: string;
    fileName: string;
    contentType: string;
  } | null;
  location: { latitude: number | string; longitude: number | string };
  category: string | TCategory | null;
  created_by: TUser;
  updated_date: string | null;
  created_date: string;
};

type TMenu = {
  _id: string;
  name: string;
  description: string;
  images: TImage[];
  price?: number;
  tag: "POPULAR" | "NEW";
  created_by: string;
  is_deleted: boolean;
  company: string;
  created_date: string;
  updated_date: string;
};

type TMenuDetails = {
  _id: string;
  name: string;
  description: string;
  images: TImage[];
  price?: number;
  tag: "POPULAR" | "NEW";
  created_by: TUser | null;
  is_deleted: boolean;
  company: TCompany | null;
  created_date: string;
  updated_date: string;
};

type TReview = {
  _id: string;
  review_by: TUser;
  company: TCompany;
  menu: string;
  images: TImage[];
  review: string;
  rating_star: number;
  is_deleted: boolean;
  created_date: string;
  totalReactions: number;
  heartReactions: number;
  sadReactions: number;
  likeReactions: number;
  angryReactions: number;
  reacted_type_by_user: string;
};
