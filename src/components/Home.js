import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing CSS for styling the homepage

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Recipe Finder</h1>
        <p>
          Discover a variety of delicious recipes from around the world! Start searching now to find the perfect meal for any occasion.
        </p>
        <Link to="/search" className="start-search-btn">Start Searching</Link>
      </div>
    </div>
  );
};

export default Home;
