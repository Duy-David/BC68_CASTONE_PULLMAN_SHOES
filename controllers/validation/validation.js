// CHECK IF VALUE IS NULL

let checkNull = (tag) => {
  let { id, value } = tag;

  if (value) {
    document.querySelector(`.${id}_note`).innerHTML = "";
    return true;
  } else {
    document.querySelector(`.${id}_note`).innerHTML =
      "Xin điền thông tin thích hợp";
    return false;
  }
};

// CHECK RADIO CHECKED
let radioIsCheck = false;

let checkRadio = (tag) => {
  let { id, value } = tag;
  if (tag.type === "radio" && tag.checked) {
    radioIsCheck = true;
  }

  if (radioIsCheck === false) {
    document.querySelector(`.gender_note`).innerHTML =
      "Xin chọn đáp án phù hợp  ";
    return false;
  } else {
    document.querySelector(`.gender_note`).innerHTML = "";
    return true;
  }

  //   return true;
};

// CHECK NAME (3-20 characters)

let checkName = (tag, min, max) => {
  let { id, value } = tag;

  if (value && value.length >= min && value.length <= max) {
    return true;
  } else {
    document.querySelector(
      `.${id}_note`
    ).innerHTML = `Tên từ ${min} đến ${max} ký tự`;
    return false;
  }
};

// CHECK PHONE NUMBER
let checkPhone = (tag) => {
  let { id, value } = tag;
  let phoneRegex =
    /^[\+]?[0-9]{0,3}\W?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (value && phoneRegex.test(value)) {
    return true;
  } else {
    document.querySelector(`.${id}_note`).innerHTML = "Số điện thoại chưa đúng";
    return false;
  }
};

// Check Email

let checkEmail = (tag) => {
  let { id, value } = tag;
  let emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (value && emailRe.test(value.toLowerCase())) {
    return true;
  } else {
    document.querySelector(`.${id}_note`).innerHTML = "Email chưa hợp lệ";
    return false;
  }
};

// CHECK PASSWORD
let pass = "";

let checkPassword = (tag) => {
  let { id, value } = tag;

  let passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/i;

  if (value && passRe.test(value)) {
    pass = value;

    return true;
  } else {
    document.querySelector(`.${id}_note`).innerHTML =
      "Mật khẩu cần nhiều hơn 4 ký tự có chứa 1 ký tự thường, 1 in hoa, 1 số và 1 ký tự đặc biệt";
    return false;
  }
};

// CHECK Repeat Password

let checkRePass = (tag) => {
  let { id, value } = tag;

  //   console.log(pass);
  if (id === "repeatPassword" && value && pass === value) {
    // console.log(pass);
    return true;
  } else {
    document.querySelector(`.repeatPassword_note`).innerHTML =
      "Password chưa giống nhau";
    return false;
  }
};
