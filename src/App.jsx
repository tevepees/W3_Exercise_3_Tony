/* eslint-disable react/no-unescaped-entities */
import './App.css';
import {CharacterCard} from './assets/CharacterCard.jsx';
import './data/mock.js'
import { character , stage } from './data/mock.js';
import {useState} from "react";
import { useEffect } from 'react';



function App() {

  const [characters, setCharacters] = useState (() => { 
    return character.map(char => ({
      ...char,
      isSelected: false
    }));
  })


 
  const [party, setParty] = useState([]);
  const [header, setHeader] = useState("");
  const [display, setDisplay] = useState("");
  const [stage, setStage] = useState("");

  function totalAtk() {
    return characters[party[0]].attack + characters[party[1]].attack + characters[party[2]].attack + characters[party[3]].attack
  }

  function totalDef() {
    return characters[party[0]].defense + characters[party[1]].defense + characters[party[2]].defense + characters[party[3]].defense
  }

  function totalAgi() {
    return characters[party[0]].agility + characters[party[1]].agility + characters[party[2]].agility + characters[party[3]].agility
  }

  function totalAcu() {
    return characters[party[0]].accuracy + characters[party[1]].accuracy + characters[party[2]].accuracy + characters[party[3]].accuracy
  }

  function totalUti() {
    return characters[party[0]].utility + characters[party[1]].utility + characters[party[2]].utility + characters[party[3]].utility
  }

  useEffect(() => {
    if (party.length == 4){
      const atk = totalAtk();
      const def = totalDef();
      const agi = totalAgi();
      const acu = totalAcu();
      const uti = totalUti();
      
      setHeader(`Your have total stats of`);
      setDisplay(`Atk ${atk}, Def ${def}, Agi ${agi}, Acu ${acu}, and Uti ${uti}`);

      let text = '';
      
      if (atk >= 35 && def >= 35 && agi >= 32 && acu >= 30 && uti >= 25) text = 'Your Party through Forest of Trial, Caverns of Darkness, Volcanic Summit, Abyssal Depth, and Citadel of the Ancients';
      else if (def >= 27 && agi >= 22 && acu >= 20 && uti >= 25) text = 'Your Party through Forest of Trial, Caverns of Darkness, Volcanic Summit, and Abyssal Depth';
      else if (atk >= 30 && def >= 20 && agi >= 20)  text = 'Your Party through Forest of Trial, Caverns of Darkness, and Volcanic Summit';
      else if (atk >= 25 && def >= 22) text = 'Your Party through Forest of Trial and Caverns of Darkness';
      else if (atk >= 20) text = 'Your Party through Forest of Trial';
      else text = "Your Party can't pass any stage.";

      setStage(text)
    }
    else {
      setHeader(`Your Party\n Summary will be here!`)
      setDisplay(`It will show when your party is complete`)
      setStage('');
    }
  })

const cardStyle = (index) => {
  return characters[index].isSelected ? {backgroundColor:"#1e3a8a", color:"white"} : {backgroundColor:"white", color:"#0b5054"};
}

  const whenClicked = (index) =>{
    const clickedCharacters = [...characters]
    if (clickedCharacters[index].isSelected) {
        clickedCharacters[index].isSelected = false;

        const updatedParty = party.filter(item => item !== index);
          setParty(updatedParty) ;
      } 
      else {
        if (party.length == 4) {
          clickedCharacters[party[0]].isSelected = false;

          party.shift();
        }

        setParty([...party, index]);
        clickedCharacters[index].isSelected = true;

      }
    
    setCharacters(clickedCharacters);
    


  
  }
 

  return (

    <div className='my-14'>
      <header>
        <h1 className="text-6xl text-center my-12">DUNGEON PARTY</h1>
      </header>
      <div className='flex flex-wrap gap-6 justify-center'>
       {character.map((char,index) => (
        <CharacterCard 
        key = {index}
        name = {char.class}
        atk = {char.attack}
        def = {char.defense}
        agi = {char.agility}
        acu = {char.accuracy}
        uti = {char.utility}
        image = {char.image}
        onClick = {() => whenClicked(index)}
        isSelected = {cardStyle(index)}
        />
       ))
       
       }

           
      </div>
      <div className="flex justify-center my-8">
          <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl'>
              <span>
                {header} <br/>
                {display}
                {party.length == 4 && (
                <p className='mt-6'>{stage}</p>
                  )} 

              </span> 
          </div>
      </div>
    </div>
  )
}

export default App;
