import React from 'react'
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="app">
      {/* Navabr */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow className="p-t"/>
      <Row  title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row  title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  )
}

export default App

// api key 9fd56ad10b54c265a540145e96089a1d