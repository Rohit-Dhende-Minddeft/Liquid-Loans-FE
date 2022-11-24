// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const baseUrl = 'https://minddeft.com/demo/dev_blog/wp-json/md/v1';
//Get all blogs
export const getBlogs = async () => {
  const res = await fetch(`${baseUrl}/posts`);
  const data = await res.json();
  return data;
};

//Get a single blog
export const getBlog = async (postName) => {
  const res = await fetch(`${baseUrl}/post/${postName}`);
  const data = await res.json();
  return data;
};

//Get categories
export const getCategories = async () => {
  const res = await fetch(`${baseUrl}/categories`);
  const data = await res.json();
  return data;
};

//Get post by author
export const getPostsByAuthor = async (authorId) => {
  const res = await fetch(`${baseUrl}/posts/author/${authorId}`);
  const data = await res.json();
  return data;
};

//Get post by search
export const getPostsBySearch = async (search) => {
  const res = await fetch(`${baseUrl}/posts/search/${search}`);
  const data = await res.json();
  return data;
};