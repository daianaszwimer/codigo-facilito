import {useEffect, useState} from "react";

function Personajes() {
  const [character, setCharacter] = useState(null)
  useEffect(function getCharacters () {
    fetch('https://www.officeapi.dev/api/characters/random')
      .then(response => response.json())
      .then(data => setCharacter(data.data));
  }, [])
  if (!character) {
    return null
  }
  return (
    <div>
      {character.firstname} {character.lastname}
    </div>
  )
}

export default Personajes