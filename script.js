// Image list (you can change these URLs)
const images = [
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1025/800/500",
  "https://picsum.photos/id/1035/800/500",
  "https://picsum.photos/id/1045/800/500"
];

let index = 0;
const imgElement = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Change image when clicking "Next" or "Prev"
nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  imgElement.src = images[index];
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  imgElement.src = images[index];
});
