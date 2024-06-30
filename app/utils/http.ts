export function normalizeURL(basedURL: string, relativeURL: string) {
  const hasBasedURLForwardSlash =
    basedURL.split("")[basedURL.length - 1] === "/";

  const hasRelativeURLForwardSlash = relativeURL.split("")[0] === "/";

  if (!hasBasedURLForwardSlash && !hasRelativeURLForwardSlash) {
    return `${basedURL}/${relativeURL}`;
  } else if (hasBasedURLForwardSlash && hasRelativeURLForwardSlash) {
    return `${basedURL
      .split("")
      .filter((_, i) => i !== basedURL.length - 1)
      .join("")}${relativeURL}`;
  } else {
    return `${basedURL}${relativeURL}`;
  }
}

// Function to get token from the server (next server not express server)
async function getToken() {
  const request = await fetch("/api/auth");

  if (!request.ok) {
    return null;
  }

  const response = await request.json();
  return response?.token as string | undefined;
}

type Props = {
  includeAuth?: boolean;
  token?: string;
} & RequestInit;

/**
 * Function for the external API calls
 */
export default async function http(url: string, props?: Props) {
  const { includeAuth = true, token, ...options } = props || {};

  let authToken: string | null = null;

  if (includeAuth && !token) {
    authToken = (await getToken()) || null;
  } else if (token) {
    authToken = token;
  }

  const requestObject: RequestInit = { ...options };

  if (authToken) {
    requestObject.headers = {
      ...requestObject.headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  const request = await fetch(
    normalizeURL(process.env.NEXT_PUBLIC_BACKEND_URL || "", url),
    requestObject
  );

  const response = await request.json();

  if (!request.ok) {
    throw Error(
      response?.message || "Something went wrong, please try again later."
    );
  }

  return response;
}
