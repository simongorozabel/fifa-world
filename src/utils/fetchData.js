export const fetchData = async (page) => {
  const data = await fetch(`https://futdb.app/api/clubs?page=${page}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-AUTH-TOKEN": "0c1ed7f7-60b9-45e3-b6f1-27a768b75a2d",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Process the response data
      console.log(data);
      return data;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

  return data;
};

export const fetchImg = async (id) => {
  const data = await fetch(`https://futdb.app/api/clubs/${id}/image`, {
    method: "GET",
    headers: {
      accept: "image/png",
      "X-AUTH-TOKEN": "0c1ed7f7-60b9-45e3-b6f1-27a768b75a2d",
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      // Create a URL object from the Blob
      const imageUrl = URL.createObjectURL(blob);
      console.log(imageUrl);
      return imageUrl;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });

  return data;
};
