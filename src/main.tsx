import React from 'react'
import ReactDOM from 'react-dom/client'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

import './global.css';

import twitterLogo from './assets/twitter-logo.svg';

// TODO: 1. If active, turn "weight" of the icons to "fill" and add class "active" dynamically.
// TODO: 2. Add hover effect on the buttons.
// TODO: 3. Add dot on the upper right corner of the icons if there is a notification.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a href="" className="active">
            <House weight="fill"/>
            Home
          </a>
          <a href="">
            <Hash />
            Explore
            </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet">
          Tweet
        </button>
      </aside>
      <div className="content">
        content
      </div>
    </div>
  </React.StrictMode>,
)