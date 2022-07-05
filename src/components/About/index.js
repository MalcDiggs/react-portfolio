import React from 'react';
import Photo from "./photo.jpeg";

function About() {
    return (
<div>
        <section className="my-5">
            <h1 id="about"><i>About Me</i></h1>
        </section>

    <section id="about-me" className="sections about-me">

        <article className="section-right">
        <div className="about-me-content">
        <img
            src={Photo}
            alt="Malcolm headshot"
            className="me-hero-img"
          />
        </div>
        <p className="description-about">My name is Malcolm Diggs. I am new to the tech world and looking forward to learning everyday. 
            <br/> My background is composed of various jobs and interactions that have shaped me.
        </p>
        </article>

    </section>
</div>
    );
}

export default About;