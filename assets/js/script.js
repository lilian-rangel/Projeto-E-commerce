let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () =>{
    search.classList.toggle("active");
    cart.classList.remove("active");
}

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () =>{
    cart.classList.toggle("active");
    search.classList.remove("active");

}