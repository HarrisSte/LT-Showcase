import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import './Landing.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${searchTerm}`)
      .then((data) => data.json())
      .then((albumSearch) => {
        albumSearch === undefined
          ? alert('no albums found')
          : navigate('/photos', {
              state: { results: albumSearch },
            });
      });

    setSearchTerm('');
  };

  return (
    <div className='search'>
      <Row>
        <Col>
          <form onSubmit={onSubmit}>
            <input
              className='search-bar'
              type='number'
              min='1'
              max='100'
              placeholder='Search for albums!'
              value={searchTerm}
              onChange={handleChange}
            />
            <button className='submit-button' type='submit'>
              <i className='bi bi-search'></i>
            </button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
