import { redirect } from "next/navigation";
import Link from "next/link";
import cn from "@/app/utils/class-names";
import getUserDataFromServer from "@/app/utils/get-user-data-from-server";
import { getSingleUserData } from "@/app/services/user/get-single-user.service";

import ProfileCard from "../components/profile-card";
import TotalReviewStatistics from "../components/total-review-statistics";
import ReviewDistribution from "../components/review-distribution";
import CompanyList from "../components/company-list";
import { getUsersCompanyList } from "@/app/services/company/get-user-company-list.service";
import { getUserStatisticsApi } from "@/app/services/user/get-user-statistics.service";
import Logout from "../components/logout";

async function loadData(userId: string, token: string) {
  const userDetails = async () => {
    const userData = await getSingleUserData({
      id: userId,
      token,
      next: { cache: "no-store", tags: ["user-details"] },
    });

    return userData;
  };

  const companiesList = async () => {
    const response = await getUsersCompanyList({
      authorization: { token },
      next: {
        cache: "no-store",
      },
    });
    return response;
  };

  const getUserStats = async () =>
    await getUserStatisticsApi({ id: userId, token });

  try {
    const [userData, companyListData, userStatistics] = await Promise.all([
      userDetails(),
      companiesList(),
      getUserStats(),
    ]);

    return [userData, companyListData, userStatistics];
  } catch (e) {
    console.log("Error: data fetching on profile section (/profile)");
    console.log(e);
    return [null, null];
  }
}

type Props = {
  className?: string;
};
export default async function ProfileSection({ className }: Props) {
  const { token, user } = getUserDataFromServer();
  const [userData, companyListData, userStatistics] = await loadData(
    user._id,
    token || ""
  );

  if (!userData) {
    redirect("/login");
  }

  return (
    <div
      className={cn(className, "flex flex-col md:flex-row gap-x-8 gap-y-12")}
    >
      <div className="w-full md:max-w-[350px]">
        <ProfileCard user={userData.data as TUser} />
        <CompanyList
          companyList={(companyListData?.data as TCompany[]) || []}
          className="mt-16"
        />
        <Link
          href={"/companies/create"}
          className="mt-10 block text-sm font-semibold underline text-secondary"
        >
          Add new company
        </Link>
      </div>

      <div className="grow">
        <TotalReviewStatistics
          reaction={(userStatistics?.data as any).reaction}
        />
        <ReviewDistribution
          reaction={(userStatistics?.data as any).reaction}
          className="mt-10"
        />
        <h4 className="mt-10 text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          More about me
        </h4>
        <div className="mt-3 p-6 border rounded-md grid grid-cols-2">
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Location</p>
            <p className="mt-1 text-sm text-gray-700">
              {(userData.data as TUser).address}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-sm font-semibold text-gray-700">Joined since</p>
            <p className="mt-1 text-sm text-gray-700">
              {(userData.data as TUser).join_date.split("T")[0]}
            </p>
          </div>
        </div>

        <Logout className="mt-12" />
      </div>
    </div>
  );
}
