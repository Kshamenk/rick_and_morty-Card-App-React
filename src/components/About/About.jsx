import React from 'react'
import styles from '../About/About.module.css'

export default function About() {
    return(
        <div className={styles.about}>
        <div>
        <h1>About Me</h1>
        <img src="https://via.placeholder.com/150" alt="Profile Pic"/>
        <p>Hi, my name is Kshamenk Benitez and I am a web developer based in Cordoba-Argentina. I have experience in HTML, CSS, JavaScript, React, and Node.js. I love building responsive and user-friendly websites that engage and delight users.</p>
        <p>When I'm not coding, I enjoy boxing, playing guitar, some soccer, and trying new restaurants in the city. Feel free to reach out to me via email or social media, I'd love to connect with you!</p>
      </div>
      </div>
    )
}
