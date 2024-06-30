"use client";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function UserHome() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID || ""}
    >
      <main className="h-[100dvh] flex justify-center items-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </main>
    </GoogleOAuthProvider>
  );
}
