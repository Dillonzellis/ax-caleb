import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/';

// GET
export const getRequest = async (num: number) => {
  try {
    const res = await axios.get(`${BASE_URL}?_limit=${num}`);
    console.log(res);

    // const res = await axios.get(BASE_URL, { params: { _limit: num } });
    // console.log(res);

    // const res = await axios({
    //   method: 'get',
    //   url: BASE_URL,
    //   params: {
    //     _limit: 5,
    //   },
    // });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

// POST
export const postRequest = async () => {
  try {
    // const post = await axios({
    //   method: 'post',
    //   url: BASE_URL,
    //   data: {
    //     title: 'New Post De',
    //     completed: false,
    //   },
    // });
    // console.log(post.data);

    const post = await axios.post(BASE_URL, {
      title: 'newer title',
      completed: true,
    });
    console.log(post.data);
  } catch (err) {
    console.error(err);
  }
};

// PUT
export const putRequest = async (id: number) => {
  try {
    const put = await axios.put(`${BASE_URL}${id}`, {
      title: 'put title',
      complete: false,
    });
    console.log(put.data);
  } catch (err) {
    console.error(err);
  }
};

// PATCH
export const patchRequest = async (id: number) => {
  try {
    const patch = await axios.patch(`${BASE_URL}${id}`, {
      title: 'patch title',
      completed: false,
    });
    console.log(patch.data);
  } catch (err) {
    console.error(err);
  }
};

// DELETE
export const deleteRequest = async (id: number) => {
  try {
    const rm = await axios.delete(`${BASE_URL}${id}`);
    console.log(rm.config);
  } catch (err) {
    console.error(err);
  }
};
