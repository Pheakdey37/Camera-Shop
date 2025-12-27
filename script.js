function changeImage(imageSrc) {
  document.getElementById('mainImg').src = imageSrc;
}
const imageInput = window.localStorage.getItem('fileImage');
if (imageInput !== null) {
console.log('true');
document.getElementById('mainImg').src = imageInput;

}