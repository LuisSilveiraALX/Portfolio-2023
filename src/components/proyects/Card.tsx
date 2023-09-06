import Image, { StaticImageData } from 'next/image';
import {FiGithub} from 'react-icons/fi'

interface CardProps {
  title: string;
  imageUrl?: string | StaticImageData;
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
        {typeof imageUrl !== 'undefined' ? (
          <Image
            className="timeline__img"
            src={imageUrl as StaticImageData}
            alt={title}
          />
        ) : (
          <div>No se encontró la imagen</div>
        )}
      </div>
      <div className="timeline__item2">
        <a className="timeline__title text-effect" href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p className="timeline__text">{description}</p>
        <a className="icon-link tech-item" href={link} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
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
      <a href={link} target="_blank" rel="noopener noreferrer" className='allprojects__title text-effect'>{title}</a>
      <span className='span__container'>
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
