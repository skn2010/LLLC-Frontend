"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import cn from "../utils/class-names";
import login from "../services/auth/login.service";

type Props = {
  headerType?: "white" | "primary";
  className?: string;
};

export default function LoginWithGoogle({ className, headerType }: Props) {
  const router = useRouter();

  const googleLogin = async (credential: string) => {
    try {
      const response = await login(credential);
      console.log(response);

      // Let set user data
      const request = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify({
          user: response.data.user,
          token: response.data.accessToken,
        }),
      });

      if (!request.ok) {
        toast.error(
          response?.message || "Something went wrong, please try again later."
        );

        return;
      }

      toast.success(response?.message || "Login successful.");
      router.push("/profile");
    } catch (e: any) {
      console.log(e);
    }
  };

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      if (!credentialResponse?.credential) {
        toast.error("Login failed!");
        return;
      }

      googleLogin(credentialResponse.credential as string);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
      <Link
        href={"/login"}
        className={cn("_btn", className, {
          "_secondary-light-outline-btn": headerType === "white",
          "_secondary-dark-outline-btn": headerType === "primary",
        })}
      >
        Login
      </Link>
    </>
  );
}
