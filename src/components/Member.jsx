import React from 'react';

const Member = ({ name, position, about, img, socials, side, isFirst }) => {
  const handlerIsFirst = hIsFirst => (
    hIsFirst ? 'column is-6-desktop is-6-tablet is-12-mobile ' : 'column is-6-desktop is-6-tablet is-12-mobile member_container_margin_top'
  )

  const isLeftSide = () => (
    <div className={handlerIsFirst(isFirst)}>
      <div className="columns is-mobile is-tablet">
        <div className="column is-narrow foto__size">
          <img src={img} class="foto__fit" alt='leftDev'/>
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
      <div className="column__nhulox social_logo_container">
        <div className="social_logo"></div>
        <div className="social_logo social_logo_is_middle"></div>
        <div className="social_logo"></div>
      </div>
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
          <img src={img} class="foto__fit" alt='rightDev'/>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12 about_dev">{about}</div>
      </div>
      <div className="column__nhulox social_logo_container">
        <div className="social_logo"></div>
        <div className="social_logo social_logo_is_middle"></div>
        <div className="social_logo"></div>
      </div>
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