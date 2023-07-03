"use client"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
// import Link from 'next/link';

const Footer = (props) => {
    return (<div className="footer">
        <div className='footer-links'>
            <a target="__blank__" className='footer-links-each' href="https://github.com/TheHamsterDog">
                <GitHubIcon className='footer-links-each-icon' />
            </a>
            <a target="__blank__" className='footer-links-each' href="https://www.linkedin.com/in/shreshth-verma-17ab39213/">
                <LinkedInIcon className='footer-links-each-icon' />
            </a>
            <a target="__blank__" className='footer-links-each' href="/resume.pdf">
                <DescriptionIcon className='footer-links-each-icon' />
            </a>
        </div>

        <h3>© Shreshth Verma 2023</h3>
    </div>)
}

export default Footer;