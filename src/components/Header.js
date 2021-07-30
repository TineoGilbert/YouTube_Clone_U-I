import "../Styles/HeaderStyle.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />

        <Link to="/">
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/640px-YouTube_Logo_%282013-2017%29.svg.png"
          alt=""
        />
        </Link>
        
      </div>

      <div className="header-center">
        <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search Somethings in the You Tube Gilbert Clone :)" type="text" />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="searchIcon"/>
        </Link>
      </div>

      <div className="header-right">
        <VideoCallIcon className="header-icon"/>

        <AppsIcon className="header-icon"/>

        <NotificationsIcon className="header-icon" />

        <Avatar alt="Gilbert" src="https://avatars.githubusercontent.com/u/65523573?v=4" />
      </div>
    </div>
  );
};

export default Header;
