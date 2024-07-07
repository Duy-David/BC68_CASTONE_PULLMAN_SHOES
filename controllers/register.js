// REGISTRATION ARRAY

let userArr = {};

// Take data from registration form

document.getElementById("register_btn").onclick = (e) => {
  e.preventDefault();
  let allTag = document.querySelectorAll("input");

  for (let tag of allTag) {
    let { id, value } = tag;

    if (tag.type === "radio" && !tag.checked) continue;
    if (id === "repeatPassword") continue;
    if (tag.type === "radio") value = value === "true";
    userArr[id] = value;
  }
  console.log(userArr);

  //   POST REQUEST USING AXIOS
  axios({
    method: "post",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: userArr,
  })
    .then((res) => {
      console.log(res.data.message);
      Toastify({
        text: res.data.message,

        duration: 3000,
      }).showToast();
    })
    .catch((err) => {
      console.log(err);
      Toastify({
        text: `Xin Vui Lòng Thử Lại. Lỗi ${err.response.status}!`,

        duration: 3000,
      }).showToast();
    });
};
