import React from 'react';

const Battle = (props) => {
  console.log(props.fighters)
  let hero = props.heroes.map((hero, index) => {
    // console.log(hero.name);

    return (
      <div className="hero" key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div className="small-container">
          <h2>{hero.name}</h2>
          <h3>{hero.biography.fullName}</h3>
          <h4> Born: {hero.biography.placeOfBirth}</h4>
          <ul>
            <li>Combat: {hero.powerstats.combat}</li>
            <li>Durability: {hero.powerstats.durability}</li>
            <li>Cunning: {hero.powerstats.intelligence}</li>
            <li>Power: {hero.powerstats.power}</li>
            <li>Speeed: {hero.powerstats.speed}</li>
            <li>Strength: {hero.powerstats.strength}</li>
            {/* <button onClick={() => props.handleClick(hero)}>Select</button> */}
          </ul>
        </div>
      </div>
    );
  })

  let villian = props.fighters.map((villian, index) => {
    // console.log(hero.name);

    return (
      <div className="villian" key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div className="small-container">
          <h2>{villian.name}</h2>
          <h3>{villian.biography.fullName}</h3>
          <h4> Born: {villian.biography.placeOfBirth}</h4>
          <ul>
            <li>Combat: {villian.powerstats.combat}</li>
            <li>Durability: {villian.powerstats.durability}</li>
            <li>Cunning: {villian.powerstats.intelligence}</li>
            <li>Power: {villian.powerstats.power}</li>
            <li>Speeed: {villian.powerstats.speed}</li>
            <li>Strength: {villian.powerstats.strength}</li>
            {/* <button onClick={() => props.handleClick(hero)}>Select</button> */}
          </ul>
        </div>
      </div>
    );
  })





  return (
    <div>
    <h2>Fight On!</h2>
   <div className="container">
    <div className="flex">
      {hero}
      </div>
<div className="flex">
   {villian}
   </div>
   </div>
   </div> 
  )
}

export default Battle