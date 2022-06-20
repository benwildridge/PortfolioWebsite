import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css';

function Home() {
  return (
    <>
    <Navbar/>
    {/* <div className='HomeContainer'>
      <h1>Home</h1>
      <h2>Logo/Image</h2>
      <img src="https://picsum.photos/200" alt='palceholderimage'></img>



      <h2>Who I am</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <h2>What my skills are</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h2>What i've achieved</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>   */}

    <div className='orbit'>
      <div className='center-image'>
        <img src="https://picsum.photos/200" alt='palceholderimage'></img>
        <img src="https://picsum.photos/id/237/200/200" alt='palceholderimage'></img>
      </div>
      <ul>
        <li>
          <div>Blog Logo</div>
          <p>Blog</p>
        </li>
        <li>
          <div>Contact Logo</div>
          <p>Contact Form</p>
        </li>
        <li>
          <div>Projects Logo</div>
          <p>Projects</p>
        </li>
        <li>
          <div>Recommended Resources Logo</div>
          <p>Recommended Resources</p>
        </li>
        <li>
          <div>Coding Journey Logo</div>
          <p>Coding Journey Logo</p>
        </li>
      </ul>

    </div>
  </>
    
  )
}

export default Home