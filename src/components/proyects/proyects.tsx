import Data from './Data'
import Card from './Card'
import Link from 'next/link';

const Proyects: React.FC = () => {

    const dataToShow = Data.slice(0, 6);
  
    return (
      <div className="education-container" id="projects">
        <div className="resume__container grid">
          <div className="timeline grid">
            {dataToShow.map((val, id) => {
                return (
                  <Card key={id} title={val.title} imageUrl={val.Image} description={val.description} technologies={val.technologies} link={val.link}
                  />
                )
              }
            )}
          </div>
        </div>
        <Link className='resume' href="/proyects-all">View Full Proyects</Link>
      </div>
    );
  };
  

  

  export default Proyects;