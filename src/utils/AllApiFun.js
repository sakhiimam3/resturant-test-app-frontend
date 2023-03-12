export const postRequest = async (api, body) => {
  const res = await fetch(api, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};

export const getRequest = async (api, type) => {
  const res = await fetch(api, {
    method: type,
    headers: {
      // Authorization: localStorage.getItem('token'),
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};
//   "Access-Control-Allow-Origin": "*"

export const putRequest = async (api, body) => {
  const res = await fetch(api, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};

export const deleteRequest = async (api, body) => {
  const res = await fetch(api, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },

    body: JSON.stringify(body),
  });
  return await res.json();
};
