<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'

const Card = ({ projects }) => {

    console.log(projects)

    const renderProjects = () => 
        projects.map(project => (
            <div className="project">
                <div className="header">
                    <h4 className="titleProject">{ project.title }</h4>
                    <p>{ project.description }</p>

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        see more <i className="fas fa-angle-right"></i>
                    </a>
                </div>
                {/* 
                    <div className="event"> 
                        <div className="content">
                            <div className="eventHeader">
                                <span className="title">Title</span>
                                <span className="date">10/11/2019</span>
                                <div className="badge">
                                    <span className="adm">ADM</span>
                                </div>
                            </div>
                            <p>Des crip tion des crip tion des crip tion des crip tion des crip tion des crip tion des crip tion</p>
                        </div>
                        <div className="showMore">
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                */}
            </div>
            )
        )

    return renderProjects()
}

export default Card
>>>>>>> 66a3ad22245130ecd30f5a47be34967bb46fd91c
