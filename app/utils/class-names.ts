export default function className(
  ...params: (string | null | undefined | { [key: string]: any })[]
): string {
  const stringClassNames = params.map((item, i) => {
    if (!item) {
      return "";
    } else if (typeof item === "string") {
      return i === 0 ? item : ` ${item}`;
    } else if (typeof item === "object") {
      let validStringClassNames = "";

      Object.keys(item).forEach((key, index) => {
        if (item[key]) {
          validStringClassNames += index === 0 ? key : ` ${key}`;
        }
      });

      return i === 0 ? validStringClassNames : ` ${validStringClassNames}`;
    }
  });

  // Join the array into a single string
  return stringClassNames.join("");
}
