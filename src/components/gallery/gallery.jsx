import { useState, useEffect } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Album Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            {photo.id} - {photo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
