import Data from './Data'
import Card from './Card'

const Education: React.FC = () => {

  const dataToShow = Data.slice(0, 6);

  return (
    <div className="education-container" id="education">
      <div className="resume__container grid">
        <div className="timeline grid">
          {dataToShow.map((val, id) => {
              return (
                <Card 
                key={id} 
                  link={val.link}
                    title={val.title} 
                      year={val.year} 
                        description={val.description} 
                          technologies={val.technologies}
                />
              )
            }
          )}
        </div>
      </div>
      <div className="container__resume">
      <a className='resume' href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
      </div>
    </div>
  );
};

export default Education;