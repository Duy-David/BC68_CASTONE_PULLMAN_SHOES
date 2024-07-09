// REGISTRATION ARRAY

let userArr = {};

// Take data from registration form
document.getElementById("register_btn").onclick = (e) => {
  e.preventDefault();

  let allTag = document.querySelectorAll("input");

  // CHECK RESULT
  let checkFinal = true;

  let checkNullResult;
  let checkRadioResult;
  let checkNameResult;
  let checkPhoneResult;
  let checkEmailResult;
  let checkPassResult;
  let checkRePassResult;

  for (let tag of allTag) {
    let { id, value } = tag;

    // Check null value
    if (id !== "gender") {
      checkNullResult = checkNull(tag);
      // console.log(checkNullResult);
    }

    // CHECK RADIO
    if (id === "gender") {
      checkRadioResult = checkRadio(tag);
      // console.log(checkRadioResult);
    }

    // Check name
    if (id === "name" && value) {
      checkNameResult = checkName(tag, 3, 20);
      // console.log(checkNameResult);
    }

    // Check phone
    if (id === "phone" && value) {
      checkPhoneResult = checkPhone(tag);
      // console.log(checkPhoneResult);
    }

    // Check email
    if (id === "email" && value) {
      checkEmailResult = checkEmail(tag);
      // console.log(checkEmailResult);
    }

    // Check password
    if (id === "password" && value) {
      checkPassResult = checkPassword(tag);
      // console.log(checkPassResult);
    }

    // check repeatPass
    if (id === "repeatPassword" && value) {
      checkRePassResult = checkRePass(tag);
      // console.log(checkRePassResult);
    }

    // console.log(checkFinal);

    if (tag.type === "radio" && !tag.checked)
      // Check radio value and get boolean true false
      continue;
    if (tag.type === "radio") value = value === "true";

    // Not take the repeatpassword value
    if (id === "repeatPassword") continue;
    userArr[id] = value;
  }
  // console.log(userArr);

  checkFinal = checkFinal && checkNullResult;
  checkFinal = checkFinal && checkRadioResult;
  checkFinal = checkFinal && checkNameResult;
  checkFinal = checkFinal && checkPhoneResult;
  checkFinal = checkFinal && checkEmailResult;
  checkFinal = checkFinal && checkPassResult;
  checkFinal = checkFinal && checkRePassResult;

  console.log(checkFinal);
  // console.log(checkRePassResult);
  // console.log(checkPassResult);
  // console.log(checkNullResult);
  // console.log(checkNameResult);
  // console.log(checkPhoneResult);
  // console.log(checkRadioResult);

  if (checkFinal) {
    //   POST REQUEST USING AXIOS
    axios({
      method: "post",
      url: "https://shop.cyberlearn.vn/api/Users/signup",
      data: userArr,
    })
      .then((res) => {
        // console.log(res.data.message);
        Toastify({
          text: res.data.message,
          duration: 3000,
        }).showToast();
      })
      .catch((err) => {
        console.log(err);
        Toastify({
          text: `${err.response.data.message}!`,
          duration: 3000,
          style: {
            background: "orange",
          },
        }).showToast();
      });
    document.getElementById("register_form").reset();
  }
  // document.querySelector("input").reset();
};
