import './header.css';

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
                    <li className = 'logo'><img src = './NYU_Marketplace_Logo.png' alt = 'NYU Marketplace' height = {100} onClick = {clickLogo}/></li>
                    <li className = 'about' onClick = {clickAbout}>About Us</li>
                    <li className = 'profile' onClick = {clickProfile}>Profile</li>
                </ul>
            </>
        );
    } else {
        return (
            <>
                <ul>
                    <li className = 'logo'><img src = './NYU_Marketplace_Logo.png' alt = 'NYU Marketplace' height = {100} onClick = {clickLogo}/></li>
                    <li className = 'about' onClick = {clickAbout}>About Us</li>
                    <li className = 'profile' onClick = {clickLog}>Log in / Register</li>
                </ul>
            </>
        );
    }

}

export default Header