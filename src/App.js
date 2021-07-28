import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
       {/* navbar
       banner */}
       <Nav/>
       <Banner />
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      islargeRow={true}
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

      


    </div>
  );
}

export default App;
