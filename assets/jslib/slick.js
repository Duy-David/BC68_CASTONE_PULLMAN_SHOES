$(document).ready(function () {
  $('.product_content').slick({
      // giúp hiện thị slide trên giao diện 
      slidesToShow: 4,
      // giúp mỗi lần bấm chuyển qua bao nhiêu slide
      slidesToScroll: 1,
      // Tóc dộ chuyển slide
      speed: 1000,
      // giúp tạo bấm chuyển hướng
      dots: false,
      // mũi tên chuyển hướng
      arrows: true,
  });
});