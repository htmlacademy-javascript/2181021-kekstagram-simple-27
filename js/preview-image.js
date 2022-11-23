const getPreviewImage = () =>{
  const previewImageContainer = document.querySelector('.img-upload__preview img');
  const file = document.querySelector('#upload-file').files[0];
  const reader = new FileReader();

  reader.onloadend = () => {previewImageContainer.src = reader.result;};

  if (file) {
    reader.readAsDataURL(file);
  } else {
    previewImageContainer.src = 'img/upload-default-image.jpg';
  }
};

export {getPreviewImage};
