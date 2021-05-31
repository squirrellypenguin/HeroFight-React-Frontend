import React from "react";

const Hero = (props) => {
  // console.log(props.myhero.appearance.height[0]);
  // const heroes = props.heroes;

  let hero = props.heroes.map((hero, index) => {
    // console.log(hero.name);

    return (
      <div className={`card ${hero.biography.alignment}`} key={index}>
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
            <button onClick={() => props.handleClick(hero)}>Select</button>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Choose your Champion!</h1>
      {hero}
    </div>
  );
};

export default Hero;
