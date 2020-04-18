import React from "react";

function Job(props) {
    return (
        <div className="col s12 z-depth-1 jobcard">
            <div className="row">
                <div className="col s2">
                    <img className="responsive-img circle cardimg" src={props.Image} />
                </div>
                <div className="col s10">
                    <span className="location">{props.Company}</span><span className="bar"> | </span><span className="jobTitle">{props.Title}</span>
                    <h6>{props.Duration}</h6>
                    <br />
                    <p>{props.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default Job;