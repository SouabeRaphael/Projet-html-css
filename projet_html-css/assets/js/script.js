let images = document.querySelectorAll("#image img");
// console.log(images)

let nbSlide = images.length;

let index = 0;

images[index].classList.add("show");

for (let i = 1; i < images.length; i++) {
  images[i].classList.add("hidden");
}

let btnNext = document.querySelector("#btn-next");
btnNext.addEventListener("click", getImageNext);

let btnBack = document.querySelector("#btn-back");
btnBack.addEventListener("click", getImageBack);


function getImageNext() {
  if (index < nbSlide - 1) {
    let currentImage = document.querySelector(".show");
    currentImage.classList.remove("show");
    currentImage.classList.add("hidden");
    index++;
    let nextImage = images[index];
    nextImage.classList.remove("hidden");
    nextImage.classList.add("show");
  } else {
    index = 0;
  }
}
getImageNext();


function getImageBack() {
  if (index > 0) {
    let currentImage = document.querySelector(".show");
    currentImage.classList.remove("show");
    currentImage.classList.add("hidden");
    index--;
    let nextImage = images[index];
    nextImage.classList.remove("hidden");
    nextImage.classList.add("show");
  } else {
    index = nbSlide - 1;
  }
}
getImageBack();