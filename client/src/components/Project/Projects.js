import React, { Component } from "react";
import Project from "../Project/Project"
import projects from "../../projects.json";
class Projects extends Component {

    state = {
        projects
    };

    render() {
        return (
            <div class="container portfolioCard">
                <div class="row">
                    {
                        this.state.projects.map(project => (
                            <Project
                                Title={project.Title}
                                Description={project.Description}
                                Image={project.Image}
                                Live={project.Live}
                                Repo={project.Repo}
                            />
                        ))
                    }

                </div>
            </div>

        )
    }
};

export default Projects;