import React from "react";
import { Link } from "react-router-dom";

const BattleLogic = (props) => {
// let heroStrong = props.heroes.powerstats.combat
// console.log(heroStrong)

  return (
    <div className="nav">
      <Link to="/">
              <div>Main</div>
      </Link>
      <Link to="/battle">
       <div>Battle</div>
      </Link>
      <Link to="/hero">
     <div>Index</div>
      </Link>
     
    </div>
  );
};

export default BattleLogic;