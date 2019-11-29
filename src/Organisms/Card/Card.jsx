import React from 'react'

const Card = ({ projects }) => {

    console.log(projects)

    const renderProjects = () =>
        projects.map(project => (
            <div className="project">
                <div className="header">
                    <h4 className="titleProject">{project.name}<i className="fas fa-close"></i></h4>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eligendi libero rem illo eveniet dolore non! Eligendi, obcaecati commodi ipsa asperiores quae inventore excepturi libero voluptatibus magni, veritatis nisi a!</p>

                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                        see more <i className="fas fa-angle-right"></i>
                    </a>
                    {project.tags.map(tag => (
                        <div className="badge">
                            <span className={tag.name}>{tag.name}</span>
                        </div>
                    ))}
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