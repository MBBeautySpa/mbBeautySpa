
const images: string[] = [];
for (let i = 0; i < 27; i++) {
  import('../../assets/gallery/' + i + '.jpeg').then((img) => {
    images.push(img.default);
  });

}

export default images;