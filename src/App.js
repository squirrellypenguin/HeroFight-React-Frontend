import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import Hero from "./components/Hero"
import Battle from "./components/Battle"
import Nav from "./components/Nav"
export default function App() {
  const url = "https://herofights.herokuapp.com/hero"

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
      <Battle fighters={villian} heroes={myhero}/>
            </Route>
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