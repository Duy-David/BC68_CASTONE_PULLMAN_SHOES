window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("productid");
  console.log("params", myParam);

  //call api load lên giao diện

  getDetailProduct(myParam).then((res) => {
    console.log(res.data);
    let content = "";
    let sp = res.data.content;
    let {
      id,
      name,
      price,
      description,
      size,
      image,
      relatedProducts,
      discount = 20,
    } = sp;

    let shoeSize = `<div class="size_output my-3">
                                      Size: <select id="sizeInput" value =${size} >
                                        <option value="32">32</option>
                                        <option value="33">33</option>
                                        <option value="34">34</option>
                                        <option value="35">35</option>
                                                                
                                      </select>
                                      </div>`;

    content += `<div class="product-details">
                                      <div class="product-details-inner">
                                          <div class="row detail_display">
                                              <div class="col-sm-12 col-md-5 col-12 product-card__image-box">
                                                  <div class="product-img-lg">
                                                      <img id="img" src="${image}" alt="shoes"
                                                          class="product-card__image img-fluid">
                                                  </div>
                                                  <div class="row mt-3">
                                                      <div class="product-img-sm col-3">
                                                          <img src="${
                                                            relatedProducts[0]
                                                              .image
                                                          }"
                                                              class="product-card__image img-fluid">
                                                      </div>
                                                      <div class="product-img-sm col-3">
                                                          <img src="${
                                                            relatedProducts[1]
                                                              .image
                                                          }" alt="shoes"
                                                              class="product-card__image img-fluid">
                                                      </div>
                                                      <div class="product-img-sm col-3">
                                                          <img src="${
                                                            relatedProducts[2]
                                                              .image
                                                          }" alt="shoes"
                                                              class="product-card__image img-fluid">
                                                      </div>
                                                      <div class="product-img-sm col-3">
                                                          <img src="${
                                                            relatedProducts[1]
                                                              .image
                                                          }" alt="shoes"
                                                              class="product-card__image img-fluid">
                                                      </div>
      
                      
                                                  </div>
                      
                                              </div>
                                              
                                            <div class="col-sm-12 col-md-7 col-12 product-card__info">  
                            <div class="product-details-des">
                                <h3 class="product-name">${name}</h3>
                                <div class="ratings d-flex">
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <div class="pro-review">
                                        <span>1 Reviews</span>
                                    </div>
                                </div>
                                <div class="price-box ">
                                    <span class="price-old"><del>$<span id="price-old" value=${
                                      price + discount
                                    }>${price + discount}</span>.00</del></span>
                                    <span class="price-regular">$<span id="price-current" value=${price}>${price}</span>.00</span>
                                </div>
                                <h5 class="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                <div class="product-countdown d-flex" data-countdown="2021/09/20">
                                    <div class="single-countdown"><span class="single-countdown__time">00</span><span
                                            class="single-countdown__text">Days</span></div>
                                    <div class="single-countdown"><span class="single-countdown__time">00</span><span
                                            class="single-countdown__text">Hours</span></div>
                                    <div class="single-countdown"><span class="single-countdown__time">00</span><span
                                            class="single-countdown__text">Mins</span></div>
                                    <div class="single-countdown"><span class="single-countdown__time">00</span><span
                                            class="single-countdown__text">Secs</span></div>
                                </div>
                                <div class="availability">
                                    <i class="fa fa-check-circle"></i>
                                    <span>200 in stock</span>
                                </div>
                                <div class="product_size">
                                    <div class="size_output my-3">
                                        Size: <select id="sizeInput">
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>

                                        </select>
                                    </div>
                              
                                </div>
                                <p class="pro-desc ">${description}</p>
                                <div class="quantity-cart-box d-flex align-items-center">
                                    <h6 class="option-title">qty:</h6>
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <span class="dec qtybtn" onclick="reduce()">-</span>
                                            <input class="number" id="num" value="1">
                                            <span class="inc qtybtn" onclick="plus()" >+</span>
                                        </div>
                                    </div>
                                    <div class="action_link">
                                        <a class="btn btn-cart2" href="../views/detail.html?productid=${id}">Add To Cart</a>
                                    </div>
                                </div>
                                <div class="useful-links d-flex">
                                    <a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Compare"><i
                                            class="fa fa-refresh"></i>compare</a>
                                    <a href="#" data-bs-toggle="tooltip" title="" data-bs-original-title="Wishlist"><i
                                            class="fa-regular fa-heart"></i>wishlist</a>
                                </div>
                                <div class="like-icon">
                                    <a class="facebook" href="#"><i class="fa-brands fa-facebook-f"></i>like</a>
                                    <a class="twitter" href="#"><i class="fa-brands fa-twitter"></i>tweet</a>
                                    <a class="pinterest" href="#"><i class="fa-brands fa-pinterest-p"></i>save</a>
                                    <a class="google" href="#"><i class="fa-brands fa-google-plus-g"></i>share</a>
                                </div>
                            </div>
                        </div>
                                          <div class="product-details-reviews section-padding pb-0">
                                              <div class="row">
                                                  <div class="col-lg-12">
                                                      <div class="product-review-info">
                                                          <ul class="nav review-tab">
                                                              <li>
                                                                  <a class="active" data-bs-toggle="tab" href="#tab1">description</a>
                                                              </li>
                                                              <li>
                                                                  <a data-bs-toggle="tab" href="#tab2">information</a>
                                                              </li>
                                                              <li>
                                                                  <a data-bs-toggle="tab" href="#tab3">reviews (1)</a>
                                                              </li>
                                                          </ul>
                                                          <div class="tab-content reviews-tab">
                                                              <div class="tab-pane fade show active" id="tab1">
                                                                  <div class="tab-one">
                                                                      <p>${description}
                                                                      </p>
                                                                  </div>
                                                              </div>
                                                              <div class="tab-pane fade" id="tab2">
                                                                  <table class="table table-bordered">
                                                                      <tbody>
                                                                          <tr>
                                                                              <td>color</td>
                                                                              <td>black, blue, red</td>
                                                                          </tr>
                                                                          <tr>
                                                                              <td>size</td>
                                                                              <td>32,33,34,35</td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </div>
                                                              <div class="tab-pane fade" id="tab3">
                                                                  <form action="#" class="review-form">
                                                                      <h5>1 review for <span>Chaz Kangeroo</span></h5>
                                                                      <div class="total-reviews d-flex ">
                                                                          <div class="rev-avatar">
                                                                              <img  src="../assets/img/avatar.jpg" alt="">
                                                                          </div>
                                                                          <div class="review-box">
                                                                              <div class="ratings">
                                                                                  <span class="good"><i class="fa fa-star"></i></span>
                                                                                  <span class="good"><i class="fa fa-star"></i></span>
                                                                                  <span class="good"><i class="fa fa-star"></i></span>
                                                                                  <span class="good"><i class="fa fa-star"></i></span>
                                                                                  <span><i class="fa fa-star"></i></span>
                                                                              </div>
                                                                              <div class="post-author">
                                                                                  <p><span>admin -</span> 30 Mar, 2021</p>
                                                                              </div>
                                                                              <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
                                                                                  amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                                                                                  vulputate ut venenatis vitae, malesuada ut mi. Quisque
                                                                                  iaculis, dui congue placerat pretium, augue erat
                                                                                  accumsan lacus</p>
                                                                          </div>
                                                                      </div>
                                                                      <div class="form-group row">
                                                                          <div class="col">
                                                                              <label class="col-form-label"><span class="text-danger">*</span>
                                                                                  Your Name</label>
                                                                              <input type="text" class="form-control" required="">
                                                                          </div>
                                                                      </div>
                                                                      <div class="form-group row">
                                                                          <div class="col">
                                                                              <label class="col-form-label"><span class="text-danger">*</span>
                                                                                  Your Email</label>
                                                                              <input type="email" class="form-control" required="">
                                                                          </div>
                                                                      </div>
                                                                      <div class="form-group row">
                                                                          <div class="col">
                                                                              <label class="col-form-label"><span class="text-danger">*</span>
                                                                                  Your Review</label>
                                                                              <textarea class="form-control" required=""></textarea>
                                                                              <div class="help-block pt-10"><span
                                                                                      class="text-danger">Note:</span>
                                                                                  HTML is not translated!
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                      <div class="form-group row">
                                                                          <div class="col">
                                                                              <label class="col-form-label"><span class="text-danger">*</span>
                                                                                  Rating</label>
                                                                              &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                                                              <input type="radio" value="1" name="rating">
                                                                              &nbsp;
                                                                              <input type="radio" value="2" name="rating">
                                                                              &nbsp;
                                                                              <input type="radio" value="3" name="rating">
                                                                              &nbsp;
                                                                              <input type="radio" value="4" name="rating">
                                                                              &nbsp;
                                                                              <input type="radio" value="5" name="rating" checked="">
                                                                              &nbsp;Good
                                                                          </div>
                                                                      </div>
                                                                      <div class="buttons">
                                                                          <button class="btn btn-sqr" type="submit">Continue</button>
                                                                      </div>
                                                                  </form> <!-- end of review-form -->
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- </div> -->
                                              <!-- product details reviews end -->
                                          </div>
                      
                      
                                      </div>
                      
                   </div>`;
    document.querySelector(".product-details").innerHTML = content;

    setTimeout(function () {
      let relatedShoes = "";
      for (let item of relatedProducts) {
        const { id, name, image, price, discount = 20 } = item;
        relatedShoes += ` 
          
        <div class="product_item mx-2" style="width: 100%;  ;">
          <div class="product-top">
           <a href="./detail.html?productid=${id}" tabindex="-1">
             <img src="${image}" alt="product thumb">
            </a>
            <div class="button-group">
            <a href="wishlist.html" data-bs-toggle="tooltip" title=""
            data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
            tabindex="-1"><i class="fa-regular fa-heart"></i></a>
            <a href="./detail.html?productid=${id}" data-bs-toggle="modal" data-bs-target="#quick_view"
            tabindex="-1"><span data-bs-toggle="tooltip" title=""
            data-bs-original-title="Quick View" aria-label="Quick View"><i
            class="fa fa-eye"></i></span></a>
            </div>
            <div class="product-label">
              <span>new</span>
            </div>
            </div>
            <div class="product-bottom">
            <div class="product-caption">
            <h6 class="product-name">
             <a href="./detail.html?productid=${id}" tabindex="-1" id="name">${name}</a>
            </h6>
             <div class="price-box">
             <span class="price-old"><del>$${price + discount}.00</del></span>
             <span  class="price-regular">${price}.00</span>
              </div>
             <a class="add-to-cart" href="./detail.html?productid=${id}" tabindex="-1"><i
                 class="fa fa-shopping-cart"></i></a>
                  </div>
              <div class="ratings">
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-star"></i></span>
                          </div>
                      </div>
                  </div>
          </div>`;
      }

      document.querySelector(".product_content").innerHTML = relatedShoes;

      //document.querySelectorAll(".product_item").innerHTML = relatedShoes;
      console.log(relatedShoes);
    }).catch((err) => {
      console.log("lỗi lấy dữ liệu:", err);
    });
  });
};
// let currentPrice = document.getElementById("price").innerHTML;
// console.log(currentPrice)
// let handlePrice = currentPrice.slice(1) * 1;
// console.log(handlePrice)
// let num = document.getElementById("num").value * 1;

// function tang() {
//   console.log("hello"); //   document.querySelector(".price-regular").innerHTML = `$${ currentPrice * num}.00`;

//   num++;
//   num = document.getElementById("num").innerHTML;
// }
// function giam() {
//   let i = document.querySelector(".number").innerHTML * 1;
//   if (i > 1) {
//     i--;
//     document.querySelector(".number").innerHTML = i;
//     document.getElementById("price").innerHTML = `$${handlePrice * i}.00`;
//   } else document.querySelector(".number").innerHTML = 1;
// }

// document.querySelector(".minus .qtybt").onclick = () => {
//   giam();
// };
