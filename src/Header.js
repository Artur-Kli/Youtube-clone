import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

import './Header.css'

const Header = () => {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
            alt="" 
          />
        </Link>
      </div>
      <div className="header__input">
        <input 
          onChange={e => setInputSearch(e.target.value)} 
          value={inputSearch} 
          placeholder="Введите запрос" 
          type="text" 
        />
        <Link className="header_inputLink" to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar 
          className="header__icon"
          alt="Artur Kli"
          src="https://look.com.ua/pic/201210/1024x768/look.com.ua-60981.jpg"
        />
      </div>
    </div>
  )
}

export default Header
