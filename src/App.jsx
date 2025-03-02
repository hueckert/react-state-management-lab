// src/App.jsx
import "./App.css"
import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
  ])
  const [strength, setStrength] = useState(0);
  const [agility, setAglity] = useState(0);

  const handleAddFighter = (newFighter) => {
    if (money >= newFighter.price) {
      const newTeam = [...team, newFighter]
      const newMoney = money - newFighter.price
      const newStrength = strength + newFighter.strength
      const newAgility = agility + newFighter.agility
      
      setTeam(newTeam)
      setMoney(newMoney) 
      setStrength(newStrength)
      setAglity(newAgility)

    } else {
      console.log("Not enough money")
    }
  }

  const handleRemoveFighter = (currentFighter) => {
    
    const newTeam = [...team]
    newTeam.splice(currentFighter.idx,1)
    const newMoney = money + currentFighter.price
    const newStrength = strength - currentFighter.strength
    const newAgility = agility - currentFighter.agility
      
    setTeam(newTeam)
    setMoney(newMoney) 
    setStrength(newStrength)
    setAglity(newAgility)

  }

  return (
    <>
    <h1>Zombie Fighters</h1>
    <h3>Money: {money}</h3>
    <h3>Strength: {strength}</h3>
    <h3>Agility: {agility}</h3>
    <h3>Team: Death Punch</h3>
    <ul className="teamInfo">
      {team.length > 0 ? (
        team.map((eachFighter, idx) => (
          <li key={idx}> 
            <p> {eachFighter.name} </p>
            <img src= {eachFighter.img}></img>
            <p> Price: {eachFighter.price} </p>
            <p> Strength: {eachFighter.strength} </p>
            <p> Agility: {eachFighter.agility} </p>
            <button onClick= {()=> handleRemoveFighter(eachFighter)}>Remove</button>
          </li>
        ))
      ) : (
        <li> Pick some team members!</li>
      )}
    </ul>

    <h3>Fighters</h3>
    <div className="fighterInfo">
        {zombieFighters.map((eachFighter, idx) => (
          <ul key={idx}>
            <img src= {eachFighter.img}></img>
            <li> {eachFighter.name} </li>
            <li> Price: {eachFighter.price} </li>
            <li> Strength: {eachFighter.strength} </li>
            <li> Agility: {eachFighter.agility} </li>
            <button onClick= {()=> handleAddFighter(eachFighter)}> Add </button>
          </ul>
        ))}
    </div>
    </>
  );
}

export default App