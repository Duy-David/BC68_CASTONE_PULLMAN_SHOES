function getProductsAPI() {
  getProduct()
    .then((res) => {
      console.log("get data successfully:", res.data);
      productsArr = res.data.content;
      renderProducts();
    })
    .catch((err) => {
      console.log("error:", err);
    });
}
getProductsAPI();

let productsArr = [];

const renderProducts = (renderedProducts = productsArr) => {
  try {
    let content1 = "";
    let content2 = "";
    let content3 = "";
    let content4 = "";
    console.log("data product:", renderedProducts);

    for (let item of productsArr) {
      //   console.log(item);

      let { id, name, price, image, categories, discount = 20 } = item;
      //   let stringJSON = JSON.stringify(categories);
      //   console.log(categories);
      let category = JSON.parse(categories);
      //   console.log(category);

      //   console.log(typeof category);
      let firstItem = category[0];
      let { category: typeShoe } = firstItem;
      //   console.log(typeShoe);

      content1 += `<div class="product_item col-lg-3" style="width: 23.5%;">
        <div class="product-top ">
            <a href="./views/detail.html?productid=${id}" tabindex="-1">
                <img src="${image}" alt="product thumb" class="w-100" >
            </a>
            <div class="button-group">
                <a href="wishlist.html" data-bs-toggle="tooltip" title=""
                    data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
                    tabindex="-1"><i class="fa-regular fa-heart"></i></a>
                <a href="./views/detail.html?productid=${id}" data-bs-toggle="modal" data-bs-target="#quick_view"
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
                    <a href="#" tabindex="-1">${name}</a>
                </h6>
                <div class="price-box">
                    <span class="price-old"><del>$${
                      price + discount
                    }</del></span>
                    <span class="price-regular">$${price}</span>
                </div>
                <a class="add-to-cart" href="./views/detail.html?productid=${id}" tabindex="-1"><i
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
    </div>`;
      if (typeShoe == "VANS_CONVERSE") {
        content2 += `<div class="product_item col-lg-3" style="width: 23.5%;">
        <div class="product-top ">
            <a href="./views/detail.html?productid=${id}" tabindex="-1">
                <img src="${image}" alt="product thumb" class="w-100" >
            </a>
            <div class="button-group">
                <a href="wishlist.html" data-bs-toggle="tooltip" title=""
                    data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
                    tabindex="-1"><i class="fa-regular fa-heart"></i></a>
                <a href="./views/detail.html?productid=${id}" data-bs-toggle="modal" data-bs-target="#quick_view"
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
                    <a href="./views/detail.html?productid=${id}" tabindex="-1">${name}</a>
                </h6>
                <div class="price-box">
                    <span class="price-old"><del>$${
                      price + discount
                    }</del></span>
                    <span class="price-regular">$${price}</span>
                </div>
                <a class="add-to-cart" href="c./views/detail.html?productid=${id}" tabindex="-1"><i
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
    </div>`;
      } else if (typeShoe == "NIKE") {
        content3 += `<div class="product_item col-lg-3" style="width: 23.5%;">
        <div class="product-top ">
            <a href="./views/detail.html?productid=${id}" tabindex="-1">
                <img src="${image}" alt="product thumb" class="w-100" >
            </a>
            <div class="button-group">
                <a href="wishlist.html" data-bs-toggle="tooltip" title=""
                    data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
                    tabindex="-1"><i class="fa-regular fa-heart"></i></a>
                <a href="./views/detail.html?productid=${id}" data-bs-toggle="modal" data-bs-target="#quick_view"
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
                    <a href="./views/detail.html?productid=${id}" tabindex="-1">${name}</a>
                </h6>
                <div class="price-box">
                    <span class="price-old"><del>$${
                      price + discount
                    }</del></span>
                    <span class="price-regular">$${price}</span>
                </div>
                <a class="add-to-cart" href="./views/detail.html?productid=${id}" tabindex="-1"><i
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
    </div>`;
      } else if (typeShoe == "ADIDAS") {
        content4 += `<div class="product_item col-lg-3" style="width: 23.5%;">
    <div class="product-top ">
        <a href="./views/detail.html?productid=${id}" tabindex="-1">
            <img src="${image}" alt="product thumb" class="w-100" >
        </a>
        <div class="button-group">
            <a href="wishlist.html" data-bs-toggle="tooltip" title=""
                data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
                tabindex="-1"><i class="fa-regular fa-heart"></i></a>
            <a href="./views/detail.html?productid=${id}" data-bs-toggle="modal" data-bs-target="#quick_view"
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
                <a href="./views/detail.html?productid=${id}" tabindex="-1">${name}</a>
            </h6>
            <div class="price-box">
                <span class="price-old"><del>$${price + discount}</del></span>
                <span class="price-regular">$${price}</span>
            </div>
            <a class="add-to-cart" href="./views/detail.html?productid=${id}" tabindex="-1"><i
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
    </div>`;
      }
    }

    // console.log(content);
    document.querySelector("#tab1 .product_content").innerHTML = content1;
    document.querySelector("#tab2 .product_content").innerHTML = content2;
    document.querySelector("#tab3 .product_content").innerHTML = content3;
    document.querySelector("#tab4 .product_content").innerHTML = content4;
  } catch (error) {
    console.log("error:", error.message);
  }
};

function getProductsAPI1(productsArr) {
  getProduct()
    .then((res) => {
      console.log("get data successfully:", res.data);
      productsArr = res.data.content;
      let content = "";
      console.log(productsArr);
      for (let i = 0; i < 4; i++) {
        let { id, name, price, image, discount = 20 } = productsArr;
        console.log(productsArr);
        let item = productsArr[i];
        console.log(item);

        console.log(item.id);
        content += `<div class="product_item" >
        <div class="product-top ">
            <a href="#" tabindex="-1">
                <img src="${item.image}" alt="product thumb" class="w-100" >
            </a>
            <div class="button-group">
                <a href="./views/detail.html?productid=${item.id}" data-bs-toggle="tooltip" title=""
                    data-bs-original-title="Add to Wishlist" aria-label="Add to Wishlist"
                    tabindex="-1"><i class="fa-regular fa-heart"></i></a>
                <a href="./views/detail.html?productid=${item.id}" data-bs-toggle="modal" data-bs-target="#quick_view"
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
                    <a href="./views/detail.html?productid=${item.id}" tabindex="-1">${item.name}</a>
                </h6>
                <div class="price-box">
                    <span class="price-old"><del>$${
                      item.price + discount
                    }</del></span>
                    <span class="price-regular">$${item.price}</span>
                </div>
                <a class="add-to-cart" href="./views/detail.html?productid=${item.id}" tabindex="-1"><i
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
    </div>`;
        // return content;
      }
    //   console.log(content);
      document.querySelector(
        "#product .product_carousel .product_content"
      ).innerHTML = content;
    })
    .catch((err) => {
      console.log("error:", err);
    });
}
getProductsAPI1(productsArr);
