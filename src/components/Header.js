import React from 'react';
import mapMarkedSolid from '../img/map-marked-alt-solid.svg';
import webChapter from '../img/web-chapter-logo.png';

export function Header({ showMap, setShowMap }) {
  return (
    <div className="header">
      <div id="leftheader">
        <a
          id="title"
          href="https://bit.ly/welcome-to-knowit"
          title="See in Chrome WebStore"
          onClick={(event) => {
            event.preventDefault();
            window.open('https://bit.ly/welcome-to-knowit');
          }}
        >
          BrowseIt
        </a>
      </div>
      <div>
        <img
          id="mapmarker"
          src={mapMarkedSolid}
          width="40"
          alt=""
          onClick={() => setShowMap(!showMap)}
        />
      </div>
      <div>
        <a href="https://projects.knowit.no/display/FAG/Web+Chapter"
          onClick={(event) => {
            event.preventDefault();
            window.open('https://projects.knowit.no/display/FAG/Web+Chapter');
          }}
        >
          <img id="twc" src={webChapter} alt="" />
        </a>
      </div>
    </div>
  );
}
