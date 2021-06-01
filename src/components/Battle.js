import React from 'react';

const Battle = (props) => {

 const [fighters, setFighters] = React.useState([])


  const randomizer = (index) => {
    return Math.floor(Math.random() * (index - 0) + 0);
}
 


let doBattle = (hero) => {
    //Check for fighter
    // console.log(props.fighters[0])
    console.log(fighters.length)
    let opponentSelector = randomizer(villian.length)

    let strength =  props.fighters[opponentSelector].powerstats.strength
    let speed =  props.fighters[opponentSelector].powerstats.speed
    console.log(hero)
    if ((hero.name === undefined)) {
        return alert('Pick a fighter from index')
    }
    
    // Generate battle math
    let player = randomizer(hero.powerstats.strength * hero.powerstats.speed)
    let opponent = randomizer(strength * speed)
    console.log(opponent)
    //Deal with irregualr data
    console.log(player, opponent)

    if (isNaN(player)) {
        player = randomizer(100) * (randomizer(100) / 5)
        
    } else if (isNaN(opponent)) {
        opponent = randomizer(100) * randomizer(100)
        
    }
    let winner = Math.max(player, opponent)
   
    // Annouce results and lift state
    if (winner === player){
        console.log("You have won!!!")
        props.removeFromVillian(props.fighters[opponentSelector])
    } else {
        console.log("Better luck next time!")
        props.removeFromTeam(hero)
    }
  }

if (isNaN(props.fight)){
    console.log("_0v0_")
}



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
            <button onClick={() => doBattle(hero)}>Select</button>
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
   {/* <button className="battle-button" onClick={doBattle}>Fight</button> */}
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