let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () =>{
    search.classList.toggle("active");
    cart.classList.remove("active");
    user.classList.remove("active");
}

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () =>{
    cart.classList.toggle("active");
    search.classList.remove("active");
    user.classList.remove("active");
}

let user = document.querySelector(".user");

document.querySelector("#user-icon").onclick = () =>{
    user.classList.toggle("active");
    cart.classList.remove("active");
    search.classList.remove("active");
}



var swiper = new Swiper(".new-arrival", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 0,
      },
      568: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });