/**
 * Note: Only invalidates when the page is revisited
 * For more info: https://nextjs.org/docs/app/api-reference/functions/revalidateTag
 */

type Props = {
  tags: string[];
};

export async function revalidateTagInServerComponent({ tags }: Props) {
  try {
    const response = await fetch("/api/revalidation", {
      method: "POST",
      body: JSON.stringify({ tags }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (e) {
    console.error("Server component revalidation issue.");
  }
}
