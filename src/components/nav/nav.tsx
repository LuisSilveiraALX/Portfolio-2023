import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub, FiDribbble} from 'react-icons/fi'
import {MdDarkMode, MdOutlineContactPage} from 'react-icons/md'

const Navigation: React.FC = () => {
  return (

    <nav className="nav-container">
        <ul className="nav-list">
            <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1TQ_8G2tkVaXUWxsi3bacRfZqxAquKdZi/view?usp=share_link' className='nav-link'>
                    <MdOutlineContactPage />
                </a>
            </li>
            <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/LuisSilveiraALX' className='nav-link'>
                    <FiGithub />
                </a>
                
            </li>
            <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/luissilveiralopez/' className='nav-link'>
                    <AiOutlineLinkedin />
                </a>
                
            </li>
            <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href='https://dribbble.com/lsgaming98' className='nav-link'>
                    <FiDribbble />
                </a>
            </li>
        </ul>
    </nav>
  );
};

export default Navigation;