import React, { Component } from 'react';
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer";
import Jobs from "../components/Jobs/Jobs";
import "./style.css"


class Home extends Component {

    render() {

        return (
            <div>
                <Nav />
                <div class="parallax-container">
                    <div class="parallax">
                        <img src="assets/images/portfolio photo.jpg" alt="" class="responsive-img" />
                    </div>
                    <a name="aboutme"></a>
                    <div class="overlay">
                        <h1 class="center white-text">HI</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="container">
                        <div class="col s12 z-depth-1 aboutBox">
                            <p class="flow-text" id="about-me">
                                I'm Garrett. I'm a software development student at Western Governors University and I'm
                                studying full-stack web development part time at the University of Utah. I've worked in the
                                field of IT and support for the past 5 years and I love figuring out how things work.</p>

                        </div>
                    </div>
                </div>

                <div class="parallax-container">
                    <div class="parallax">
                        <img src="assets/images/lauren-pandolfi-zD5ry8Up83M-unsplash_4032x3024.jpg" alt="" class="responsive-img" />
                    </div>
                    <a name="experience"></a>
                    <div class="overlay">
                        <h1 class="center white-text">Experience</h1>
                    </div>
                </div>

                <Jobs />

                <Footer />
            </div>
        )
    }
}

export default Home;