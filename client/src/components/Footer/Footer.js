import React from "react";
var createReactClass = require('create-react-class');

var Footer = createReactClass({
    render: function () {
        return (

            <footer className="page-footer menu">
                <div className="row">
                    <div className="col s12 center">
                        <a href="https://www.linkedin.com/in/garrett-howard-859007a0/" target="_blank" className="fa fa-linkedin footer-icon linkedin" />
                        <a href="https://github.com/meta-byte" target="_blank" className="fa fa-github footer-icon github" />
                        <a href="mailto:hylander.garrett@gmail.com?" className="fa fa-envelope footer-icon email" />
                    </div>
                </div>
                <div className="footer-copyright">
                </div>
            </footer>
        );
    }
});

export default Footer;