import Link from 'next/link';
import {Card2} from '../components/proyects/Card'
import Data from '../components/proyects/Data'
import {AiOutlineArrowLeft} from 'react-icons/ai'


  const ProyectsAll: React.FC = () => {

    return (
        <section className="allprojects__container">
          
          <h1 className='projects__title'><Link className='home__link' href="/"><AiOutlineArrowLeft/> Home</Link>All Projects</h1>

          <div className="container__table">
          <div className='table__titles'>
                  <h3>Projects</h3>
                  <h3 className='tech__hide'>Technologies</h3>
                  <h3 className='link__hide'>Link</h3>
              </div>
              {Data.map((val, id) => (
                <Card2 key={id} title={val.title} technologies={val.technologies} link={val.link}
                />
              ))}
	        </div>
        </section>
      );
    };
  
  export default ProyectsAll;