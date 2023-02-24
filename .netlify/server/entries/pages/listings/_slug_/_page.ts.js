const load = ({ params }) => {
  return {
    slug: params.slug
  };
};
const prerender = true;
export {
  load,
  prerender
};
