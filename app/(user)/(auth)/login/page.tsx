"use client";

import { useRouter } from "next/navigation";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import login from "@/app/services/auth/login.service";
import { toast } from "react-toastify";

export default function UserHome() {
  const router = useRouter();

  const googleLogin = async (credential: string) => {
    try {
      const response = await login(credential);

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
      router.refresh();
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <main className="h-[100dvh] flex justify-center items-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (!credentialResponse.credential) {
              toast.error("Google login is not working currently.");
              return;
            }

            googleLogin(credentialResponse.credential);
          }}
          onError={() => {
            toast.error("Google login is not working currently.");
          }}
        />
      </main>
    </GoogleOAuthProvider>
  );
}
