import { useState } from 'react';
import './Landing.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [albumResults, setAlbumResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data === undefined
          ? alert('No albums found')
          : setAlbumResults(data);
        // console.log(data.albumId);
      });

    setSearchTerm('');
  };

  return (
    <div className='search'>
      <form onSubmit={onSubmit}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search for your favorite album!'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>

      <ul className='album-results'>
        {albumResults.map((albumId) => (
          <li key={albumId}>
            <a href={`/photos?albumId=${albumId}`}></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
