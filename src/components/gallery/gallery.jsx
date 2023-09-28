import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

//Grabbing photo gallery information
const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1>Album Photos</h1>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>Title: {photo.title}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
