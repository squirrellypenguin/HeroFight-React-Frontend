import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Hero from "./components/Hero"
import Battle from "./components/Battle"
import Nav from "./components/Nav"
import BattleLogic from "./components/BattleLogic"

export default function App() {
  const url = "https://herofights.herokuapp.com/hero"
  const [fight, setFight] = useState([]);
  const [heroes, setHeroes] = useState(null);
  const [myhero, setTeam] = useState([]);
  const [villian, setVillians] = useState([]);
  const getHero = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setHeroes(data);
    // console.log(data);
  };
  const oppponetGenerator = (opponentCount) => {
    return Math.floor(Math.random() * (opponentCount - 0) + 0);
  };


  const handleClick = async (input) => {
    setTimeout(
      () => setVillians([...villian, heroes[oppponetGenerator(heroes.length)]]),
      0
    );
    setTimeout(setTeam([...myhero, input]), 5000);
     
    // let  opponent = oppponetGenerator()
    // let battleArray = []
    // battleArray.push(player)
    // battleArray.push(people[opponent])
    // setFight(battleArray)
  };

  const handleBattle = async (input) => {

    const fightarray = []
    fightarray.push(input)
    // console.log(fightarray)
    const foo = oppponetGenerator(villian.length)
    const bar = villian[foo]
    fightarray.push(bar)
    // fightarray.push[bar]
    setFight(fightarray);
    console.log(oppponetGenerator(villian.length))
      // This will trigger the attacj=k
    // let  opponent = oppponetGenerator()
    // let battleArray = []
    // battleArray.push(player)
    // battleArray.push(people[opponent])
    // setFight(battleArray)
  };

  const removeFromVillian = (pos) => {
    console.log(villian)
    console.log("pos", pos.id)

    const Cart = villian.filter((baddie, index) => baddie.id !== pos.id)
    
    console.log(Cart)
    setVillians(Cart)
  }


  const removeFromTeam = (pos) => {
    console.log("pos", pos.id)
    const art = myhero.filter((hero, index) => hero.id !== pos.id)
    
    console.log(art)
    setTeam(art)
  }


  useEffect(() => {
    getHero(url);
  }, []);

  return (
    <div className="App">
      <Nav />
      <Switch>

        <Route exact path='/'>

<Link to='/hero'>
  <h2>Heroes</h2>
</Link>
<Link to='/battle'>
  <h2>Battle</h2>
</Link>
        </Route>
      <div>
      <Route path="/battle/">
      <Battle fighters={villian} heroes={myhero}  removeFromTeam={removeFromTeam} removeFromVillian={removeFromVillian} />
            </Route>
            <BattleLogic fight={fight} />
      <Route path="/hero/">
        {
          //Check if receied
          heroes === null ? (
            <div> Applying Mind-control</div>
          ) : (
            <Hero heroes={heroes} handleClick={handleClick} />
          )
        }
     
      </Route> 
      </div>
      </Switch>
   
    </div>
  );
}