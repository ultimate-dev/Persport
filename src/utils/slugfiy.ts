import slugify from "slugify";

const combine = (text?: string, id?: number) => {
  return (
    slugify(String(text), {
      lower: true,
    }).replace(/[^\w-]+/g, "") +
    "-" +
    id
  );
};

const separate = (slug: string) => {
  return Number(String(slug).split("-").slice(-1)[0]);
};

export default {
  combine,
  separate,
};
