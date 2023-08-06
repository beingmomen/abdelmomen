export const userTransformer = (user: any) => {

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    image: user.image,
    country: user.country,
    phone: user.phone,
    slug: user.slug,
  };
};
