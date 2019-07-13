import React from 'react'
import { Link } from '@reach/router'

import imgsrc from './undraw_like_dislike_1dfj.svg'

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src={imgsrc} alt="Favorite" />
          </div>
          <div className="column">
            <h1 className="title">React Favorites App</h1>
            <h2 className="subtitle">Create 5 Favorite apps to let the world know about your favorite stuff</h2>
            <ul>
              <li><Link to="/movies">Movies</Link></li>
              <li><Link to="/songs">Songs</Link></li>
              <li><Link to="/cats">Cats</Link></li>
              <li><Link to="/dogs">Dogs</Link></li>
              <li><Link to="/youtubes">Youtubes</Link></li>
            
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  )
}
