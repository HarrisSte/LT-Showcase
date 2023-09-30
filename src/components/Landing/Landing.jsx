import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <form onSubmit={onSubmit}>
        <input
          className='search-bar'
          type='number'
          placeholder='Search for albums!'
          value={searchTerm}
          onChange={handleChange}
        />
        <button className='submit-button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Search;
