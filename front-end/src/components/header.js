import './header.css';
import { Link } from "react-router-dom";

const Header = (props) => {

    const clickLogo = (e) => {
        alert("Direct to Home page.");
    }

    const clickAbout = (e) => {
        alert("Direct to About Us page.")
    }

    const clickProfile = (e) => {
        alert("Direct to Profile page.")
    }

    const clickLog = (e) => {
        alert("Direct to Log in / Register page.")
    }

    if (props.logged === 'True') { 
        return (
            <>
                <ul>
                    <li className = 'logo'><Link to = "/" className='link'><img src = './NYU_Marketplace_Logo.png' alt = 'NYU Marketplace' height = {100} onClick = {clickLogo}/></Link></li>
                    <li className = 'about' onClick = {clickAbout}><Link to = "/about" className='link'>About Us</Link></li>
                    <li className = 'profile' onClick = {clickProfile}><Link to = "/profile" className='link'>Profile</Link></li>
                </ul>
            </>
        );
    } else {
        return (
            <>
                <ul>
                    <li className = 'logo'><Link to = "/" className='link'><img src = './NYU_Marketplace_Logo.png' alt = 'NYU Marketplace' height = {100} onClick = {clickLogo}/></Link></li>
                    <li className = 'about' onClick = {clickAbout}><Link to = "/about" className='link'>About Us</Link></li>
                    <li className = 'profile' onClick = {clickLog}><Link to = "LR" className='link'>Log in / Register</Link></li>
                </ul>
            </>
        );
    }

}

export default Header;