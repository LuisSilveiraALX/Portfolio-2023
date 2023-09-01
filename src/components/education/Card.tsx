import react from 'react'

interface CardProps {
    title: string;
    link: string;
    year: string;
    description: string;
    technologies: string;
}

const Card: React.FC<CardProps> = ({
     title,
        link,
            year,
            description,
                technologies, 
    }) => {
    const techArray=technologies.split(' ');
    return (
            <div className="timeline__item timeline_extra">
                <h2 className="timeline__date">{year}</h2>
                    <div className="timeline__item2">
                    <div className="timeline__title">
                        <a className="timeline__title text-effect" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                    </div>
                    <p className="timeline__text">{description}</p>
                    
                    {techArray.map((technologies, index) => (
                        <span key={index} className="tech-item">{technologies}</span>
                    ))}
                    
                </div>
            </div>
    )
}



export default Card