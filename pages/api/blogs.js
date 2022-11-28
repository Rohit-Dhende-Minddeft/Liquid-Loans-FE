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
  const res = await fetch('https://minddeft.net/dev_blog/wp-json/md/v1/categories');
  const data = await res.json();
  return data;
};

//Get blog by author
export const getBlogsByAuthor = async (authorId) => {
  const res = await fetch(`${baseUrl}/posts/author/${authorId}`);
  const data = await res.json();
  return data;
};

//Get blog by search
export const getBlogsBySearch = async (search) => {
  const res = await fetch(`${baseUrl}/posts/search/${search}`);
  const data = await res.json();
  return data;
};

//get text of all tags with same classname in html
export const getTags = (html) => {
  const tags = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const tagElements = doc.getElementsByClassName('tableContent');
  for (let i = 0; i < tagElements.length; i++) {
    tags.push(tagElements[i].innerText);
  }
  return tags;
};
