export function RenderImages() {
  const searchList = [
    "banana",
    "food",
    "girls",
    "fruits",
    "guys",
    "babies",
    "fan",
    "clock",
    "dog",
    "pear",
    "dog",
    "guys",
  ];

  let imageUrl = [];
  for (let i = 0; i < 12; i++) {
    fetch(
      `https://pixabay.com/api/?key=53412801-458c0953a08eb7a5d35a7e88e&q=${searchList[i]}&image_type=photo`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        imageUrl.push(response.hits[i].userImageURL);
      });
  }
  
}
