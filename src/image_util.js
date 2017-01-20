const addImageToPage = (imageSrc) => {
    const image = document.createElement('img');
    image.src = imageSrc;
    image.style.height = '100px';
    image.style.width = '100px';
    document.body.appendChild(image);
};

export default addImageToPage;