import React from 'react'
import Header from './header'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <Header></Header>
      <h1>About NYU Marketplace</h1>
      <p>
        Our team is looking to provide a secure place for NYU students to buy and sell items exclusively to and from one another.
        Our product aims to allow students to get rid of items they no longer need as well as buy discounted used items from one another, with a focus on items needed in daily college life. 
        Such items include but are not limited to textbooks, electronics, furniture, and other school supplies. 
        Our project cuts out the risk factor inherent to other online marketplaces by connecting members of the NYU community to one another, and gives students the oppurtunity to buy and sell costly yet niche items, such as textbooks.
      </p>
      <br></br>
      <h1>About the team</h1>
      <p>
        Clare - https://github.com/clareuwu
      </p>
      <p>
        Kevin - https://github.com/kevin2350
      </p>
      <p>
        Rory Jones - https://github.com/RoryJones19
      </p>
      <p>
        David Leguisamo - https://github.com/dleguisamo
      </p>
      <p>
        Ruochen Miao - https://github.com/Ruochen1105
      </p>
    </div>
  )
}

export default About