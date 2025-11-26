import { useState, useEffect } from "react";
import "../styles/images.css";

export function RenderImages({ increaseScore, gameOver }) {
  const [imageUrlList, setImageUrlList] = useState([]);
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
    "dogs",
    "avatar",
  ];

  useEffect(() => {
    // 1. Map the searchList to an array of Promises
    const fetchPromises = searchList.map((searchTerm) => {
      return fetch(
        `https://pixabay.com/api/?key=53412801-458c0953a08eb7a5d35a7e88e&q=${searchTerm}&image_type=photo`
      )
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          // 2. Safely extract the second image hit for the current search term
          if (response.hits && response.hits.length > 0) {
            return {
              url: response.hits[1].userImageURL, // Use webformatURL for better performance
              alt: response.hits[1].tags.split(",")[0] || searchTerm,
            };
          }
          return null; // Return null if no hits are found
        })
        .catch((error) => {
          console.error(`Error fetching image for ${searchTerm}:`, error);
          return null;
        });
    });

    // 3. Wait for all promises to resolve
    Promise.all(fetchPromises).then((results) => {
      // 4. Filter out null results (errors/no hits) and update state
      const validImages = results.filter((img) => img !== null);
      setImageUrlList(validImages);
    });
  }, []);

  const [clickedImages, setClickedImages] = useState([]);

  const handleClick = (e) => {
    console.log(!clickedImages.includes(e.target.dataset.id));

    if (!clickedImages.includes(e.target.dataset.id)) {
      increaseScore();
      setClickedImages([...clickedImages, e.target.dataset.id]);
    } else {
      setClickedImages([]);
      gameOver();
    }
  };


  // The component renders with the current state (initially [])
  return (
    <main>
      {imageUrlList.length === 0 ? (
        <p>Loading images...</p>
      ) : (
        imageUrlList.map((url, index) => (
          <img
            key={index}
            src={url.url}
            alt={url.alt}
            data-id={url.url}
            onClick={handleClick}
          />
        ))
      )}
    </main>
  );
}
