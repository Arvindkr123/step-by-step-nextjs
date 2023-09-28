export const getAllUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getSignleUser = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchPosts = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/?userId=${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchAllPosts = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
