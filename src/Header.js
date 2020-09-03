import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import huluLogo from './hulu-logo.png';

function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <div className="header__icons">{/* All icons */}</div>
      <img src={huluLogo} alt="hulu logo" />
    </div>
  );
}

export default Header;
