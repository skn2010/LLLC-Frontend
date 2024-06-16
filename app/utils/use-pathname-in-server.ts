import { headers } from "next/headers";

/**
 * It only works in server components not client components
 * Use "userParams" for the client components
 */

export default function usePathnameInServer() {
  const headersList = headers();
  const host = headersList.get("host") || "";
  const referer = headersList.get("referer") || "";

  let pathname = "";

  if (host && referer) {
    const protocol = referer.startsWith("https://") ? "https://" : "http://";
    const domain = `${protocol}${host}`;

    // Remove the domain from the referer to get the pathname
    pathname = referer.replace(domain, "");

    if (!pathname) {
      pathname = "/";
    } else if (!pathname.startsWith("/")) {
      pathname = `/${pathname}`;
    }
  } else {
    console.warn("Referer or host header is not present.");
  }

  return { pathname, host, referer };
}
