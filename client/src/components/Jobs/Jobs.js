import React, { Component } from "react";
import Job from "../Jobs/Job"
import jobs from "../../jobs.json";
class Jobs extends Component {

    state = {
        jobs
    };

    render() {
        return (
            <div class="row">
                <div class="container">
                    {
                        this.state.jobs.map(job => (
                            <Job
                                Company={job.Company}
                                Title={job.Title}
                                Duration={job.Duration}
                                Description={job.Description}
                                Image={job.Image}
                            />
                        ))
                    }

                </div>
            </div>

        )
    }
};

export default Jobs;

// "ID": "Canopy",
// "Company": "Canopy",
// "Title": "IT Support Specialist",
// "Duration": "September 2019 - Present",
// "Description": "Dedicated IT support technician for needs within the Canopy office. Troubleshooting of hardware, software and network issues. Inventory equipment and replace as needed. Create documentation for IT policies and current infrastructure configurations. Provisioning and deprovisioning of resources for Canopy employees. Other projects as needed by the DevOps team.",
// "Image": "../public/assets/images/Canopy.png"