import React from 'react';
import githubLogo from '../svg/github.svg';
import instagramLogo from '../svg/instagram.svg';
import twitterLogo from '../svg/twitter.svg';


const Member = ({ name, position, about, img, socials, side, isFirst }) => {
  const handlerIsFirst = hIsFirst => (
    hIsFirst ? 'column is-6-desktop is-6-tablet is-12-mobile is__left__dev' : 'column is-6-desktop is-6-tablet is-12-mobile member_container_margin_top'
  )

  const isLeftSide = () => (
    <div className={handlerIsFirst(isFirst)}>
      <div className="columns is-mobile is-tablet">
        <div className="column is-narrow foto__size">
          <img src={img} className="foto__fit" alt='leftDev' />
        </div>
        <div className="column __dev">
          <div className="nombre_dev"> {name}</div>
          <div className="position__dev"> {position}</div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12 about_dev">
          {about}
        </div>
      </div>
      {socialDev()}
    </div>
  )

  const isRightSide = () => (
    <div className={handlerIsFirst(isFirst)}>
      <div className="columns is-mobile is-tablet">
        <div className="column __dev" style={{ textAlign: "right" }}>
          <div className="nombre_dev"> {name}</div>
          <div className="position__dev">{position}</div>
        </div>
        <div className="column is-narrow foto__size">
          <img src={img} className="foto__fit" alt='rightDev' />
        </div>
      </div>
      <div className="columns">
        <div className="column is-12 about_dev">{about}</div>
      </div>
      {socialDev()}
    </div>
  )

  const socialDev = () => (
    <div className="column__nhulox social_logo_container">
      <a href={socials.github}
        className="social_logo" target="_blank" rel="noopener noreferrer">
        <img alt="githubLogo" className="foto__fit" src={githubLogo} />
      </a>
      <a href={socials.instagram}
        className="social_logo social_logo_is_middle"
        target="_blank"
        rel="noopener noreferrer">
        <img alt="instagramLogo" className="foto__fit" src={instagramLogo} />
      </a>
      <a href={socials.twitter}
        rel="noopener noreferrer" className="social_logo" target="_blank">
        <img alt="twitterLogo" className="foto__fit" src={twitterLogo} />
      </a>
    </div>
  )

  const handlerSide = (hSide) => {
    if (hSide === 'left')
      return isLeftSide()
    else if (hSide === 'right')
      return isRightSide()
  }

  return (
    handlerSide(side)
  )
}

export default Member;