"use client";

import { useRouter } from "next/navigation";
import cn from "@/app/utils/class-names";
import logoutApi from "@/app/services/auth/logout.service";
import { toast } from "react-toastify";

type Props = {
  className?: string;
};

export default function Logout({ className }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await logoutApi();
      toast.success(response.message || "Logout successful.");
      router.push("/");
      router.refresh();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <section className={cn(className, "")}>
      <button onClick={handleLogout} className="_btn text-white bg-secondary">
        Logout
      </button>
    </section>
  );
}
