import { useState } from 'react'
import './App.css'

function App() {

  return (
    
    <article className="image-card">
      
      <title className="title">Title of image</title>
      <img className="image" src='./src/assets/image-placeholder.jpg'></img>
      <div className="likes-section">
        <span className="likes">0 likes</span>
        <button className="like-button"></button>
        
      </div>
      <ul className="comments">
          <li>comment 1 </li>
        </ul>




    </article>


  )
}

export default App
