// selects all img-elements matching images class
const images = document.querySelectorAll(".images img");

// returns the first element that matches a CSS selector modal
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

// calls a function for each element in an array
images.forEach((image) => {

  // listens for a click in order for the image to appear
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");

    // listens for a click on the X in order to close the modal image
    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
});