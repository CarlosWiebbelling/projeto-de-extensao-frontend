import React from 'react'

const Card = ({ project }) => {

    const renderProjects = () =>
        <div className="event">
            <div className="header">
                <h4 className="titleProject">{event.name}<i className="fas fa-close"></i></h4>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque eligendi libero rem illo eveniet dolore non! Eligendi, obcaecati commodi ipsa asperiores quae inventore excepturi libero voluptatibus magni, veritatis nisi a!</p>

                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    see more <i className="fas fa-angle-right"></i>
                </a>
                {event.tags.map(tag => (
                    <div className="badge">
                        <span className={tag.name}>{tag.name}</span>
                    </div>
                ))}
            </div>
            {project.events.map(event => (
                <div className="event">
                    <div className="content">
                        <div className="eventHeader">
                            <span className="title">{event.name}</span>
                            <span className="date">{event.schedule}</span>
                            <span className="speaker mata-sua-fome">{event.speaker}</span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-login">
                        Inscrever-se
                    </button>
                    <button type="submit" className="btn btn-secondary btn-login">
                        Atualizar Evento
                    </button>
                    <button type="submit" className="btn btn-danger btn-login">
                        Deletar Evento
                    </button>
                </div>))
            }

        </div>

    return renderProjects()
}

export default Card