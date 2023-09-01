import Image from 'next/image';
import {FiGithub} from 'react-icons/fi'

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  technologies: string;
  link: string;
}

interface CardProps2 {
  title: string;
  technologies: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  description,
  technologies,
  link,
}) => {
  const techArray = technologies.split(' ');

  return (
    <div className="timeline__item proyect__contrainer">
      <div className="timeline__img">
        <Image className='timeline__img' src={imageUrl} alt={title}/> 
      </div>
      <div className="timeline__item2">
        <a  className="timeline__title text-effect" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        <p className="timeline__text">{description}</p>
        <a className="icon-link tech-item" href={link} target="_blank" rel="noopener noreferrer"><FiGithub/></a>
        <span className="timeline__tech">
          {techArray.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

/* CARD ALL PROYECTS */
export const Card2: React.FC<CardProps2> = ({
  title,
     technologies,
      link
 }) => {
 const techArray=technologies.split(' ');
 return (
  
  <div className='allprojects__card'>
    <div className='allprojects__items'>
      <h3 className='allprojects__title'>{title}</h3>
      <span>
          {techArray.map((technologies, index) => (
              <span key={index} className='allprojects_span '>{technologies}</span>
           ))}
      </span>
        <a className='allprojects_link' href={link} target="_blank" rel="noopener noreferrer">{link}</a>
    </div>
  </div>
 )
}

export default Card;
