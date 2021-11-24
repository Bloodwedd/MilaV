const gallery  = document.getElementById('gallery');
const popup  = document.getElementById('popup');
const selectedImage  = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `images/img${i}.jpg`; 
  image.classList.add('galleryImg')

  image.addEventListener('click', () =>{
    popup.style.transform = `scale(1)`;
    selectedImage.src = `images/img${i}.jpg`;
  });
  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = `scale(0)`;
  popup.src = '';
  popup.alt = '';
});