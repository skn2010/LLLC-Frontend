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
};

type Response = {
  data: TCompany;
  message: string;
};

export async function createCompanyApi({ payload }: Props) {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("contact_number", payload.contactNumber);
  formData.append("email", payload.email);
  formData.append("opening_time", payload.openingTime);
  formData.append("closing_time", payload.closingTime);
  formData.append("location", JSON.stringify(payload.location));
  formData.append("category", payload.category);
  formData.append("cover_image", payload.coverImage);
  formData.append("description", payload.description);

  const response: Response = await http("/companies", {
    method: "POST",
    includeAuth: true,
    body: formData,
  });

  return response;
}
