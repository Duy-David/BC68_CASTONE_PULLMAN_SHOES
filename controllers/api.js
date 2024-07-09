const postUser = () => {
  return axios({
    URL: "https://shop.cyberlearn.vn/api/Users/signup",
    Method: POST,
    ResponseType: JSON,
    Data: {
      email: "string",
      password: "string",
      name: "string",
      gender: true,
      phone: "string",
    },
  });
};

const getProduct = () => {
  return axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
};



const getDetailProduct = (id) => {
  return axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    // ResponseType: JSON,
  });
};

  // getDetailProduct().then((res) => {
  //   console.log(res.data)
  //    }).catch((err) => {
  //  console.log("lỗi lấy dữ liệu:",err );

  // });


// getDetailProduct(id).then(())
