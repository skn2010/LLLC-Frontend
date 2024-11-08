import http from "@/app/utils/http";

type Props = {
  payload: {
    name: string;
    contactNumber: string;
    email: string;
    openingTime: string;
    closingTime: string;
    location: { latitude: number; longitude: number };
    category: string;
    coverImage: any;
    description: string;
  };
  params: {
    companyId: string;
  };
  [key: string]: unknown;
};

type Response = {
  data: TCompany;
  message: string;
};

export async function updateCompanyApi({ payload, params, ...others }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("contact_number", payload.contactNumber);
  formData.append("email", payload.email);
  formData.append("opening_time", payload.openingTime);
  formData.append("closing_time", payload.closingTime);
  formData.append("location", JSON.stringify(payload.location));
  formData.append("category", payload.category);
  formData.append("description", payload.description);

  if (!!payload.coverImage?.name) {
    formData.append("cover_image", payload.coverImage);
  } else {
    formData.append("cover_image", JSON.stringify(payload.coverImage));
  }

  const company: Response = await http(`/companies/${params.companyId}`, {
    method: "PATCH",
    includeAuth: true,
    body: formData,
    ...others,
  });

  return company;
}
