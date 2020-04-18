import React from "react";

function Project(props) {
    return (
        <div class="col s12 m6">
            <div class="card medium">
                <div class="card-image">
                    <img src={props.Image} class="responsive-img" alt="password generator" />
                    <span class="card-title">{props.Title}</span>
                </div>
                <div class="card-content">
                    <p>{props.Description}</p>
                </div>
                <div class="card-action">
                    <a href={props.Live} target="_blank">See it Live</a>
                    <a href={props.Repo} target="_blank">See the Repo</a>
                </div>

            </div>
        </div>

    );
};

export default Project;