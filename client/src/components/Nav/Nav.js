import React from "react";
var createReactClass = require('create-react-class');

var Nav = createReactClass({
    render: function () {
        return (
            <nav className="menu">
                {/* <div class="nav menu"> */}
                <a href="#" data-target="mobile" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                <ul className="right">
                    <li><a href="https://www.linkedin.com/in/garrett-howard-859007a0/" target="_blank" className="fa fa-linkedin" /></li>
                    <li><a href="https://github.com/meta-byte" target="_blank" className="fa fa-github" /></li>
                </ul>
                <ul className="sidenav" id="mobile">
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        );
    }
});

export default Nav;