// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import './Gallery.css';

const ResultsCard = () => {
  const location = useLocation();
  const albumSearch = location.state.results;

  return (
    <div>
      <Row>
        {albumSearch.map((album, index) => (
          <Col key={index}>
            <img src={album.thumbnailUrl} alt={album.title} />
            <p>
              <b>Title:</b> {album.title} <br></br> <b>PhotoID:</b> {album.id}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ResultsCard;
