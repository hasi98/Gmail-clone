import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
    <div class="header__left">
        <IconButton>
            <MenuIcon />
        </IconButton>  
        <img src="https://i.ibb.co/tMZfg4b/gmail-logo-1-1.png" alt="" srcset=""/>
    </div>


    <div class="header__middle">
        <IconButton>
            <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search mail'/>
        <IconButton>
            <TuneIcon />
        </IconButton>
    </div>

    <div class="header__right">
        <IconButton>
            <HelpOutlineIcon />
        </IconButton>
        <IconButton>
            <SettingsIcon />
        </IconButton>
        <IconButton>
            <AppsIcon />
        </IconButton>
        <IconButton>
            <AccountCircleIcon />
        </IconButton>
    </div>

    </div>
  )
}

export default Header
