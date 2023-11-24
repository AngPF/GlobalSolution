import React from 'react'
import'../Style/CardTime.css'
import git from '../img/GitHub logo.png'
import linkedin from '../img/linkedin-logo.jpg'


export default function CardSquad(props) {

  return (
    <>
     <div className="Body-card-squad">
        <div className="cardSquad">
          <div className="profile-image">
            <div className=".img-squad"> <img className='pf-ft'  src={props.imgSrc} alt="" /></div>
          </div>  
          <div className="title-squad">{props.name}</div>
          <div className="rm-squad">Rm: {props.rm}</div>
          <div className="about">{props.role}</div>
          <div className="social-icons">
            <a href={props.social.github}><img className="fab" src={git} alt=""/></a>
            <a href={props.social.linkedin}><img className="fab" src={linkedin  } alt=""/></a>
          </div> 
          <button className="contac-me">Contate-me</button>   
        </div>

        </div>

    </>
  )
}
