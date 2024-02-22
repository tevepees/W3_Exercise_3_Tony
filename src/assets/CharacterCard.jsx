import React from 'react'

 export const CharacterCard = ({image, name, atk, def, agi, acu, uti, onClick, isSelected}) => {
  return (
    <div className="flex justify-center" onClick={onClick}>
    <div className="w-full rounded-3xl inline-block overflow-hidden shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
    <div className="relative group w-full overflow-hidden bg-white rounded-t-3xl">
  <img src={image} className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
    </div>
  <div className='bg-white' style={isSelected}>
  <div className="text-center px-3 py-2">
    <h1 className="font-bold text-2xl mb-2">{name}</h1>
  </div>
  <div className="flex justify-center pb-3 text-sm">
    <div className="text-center px-1 border-r last:border-r-0">
        <h2>ATK</h2>
        <span>{atk}</span>
    </div>
    <div className="text-center border-r px-2 last:border-r-0">
        <h2>DEF</h2>
        <span>{def}</span>
    </div>
    <div className="text-center border-r px-2 last:border-r-0">
        <h2>AGI</h2>
        <span>{agi}</span>
    </div>
    <div className="text-center border-r px-2 last:border-r-0">
        <h2>ACU</h2>
        <span>{acu}</span>
    </div>
    <div className="text-center border-r px-2 last:border-r-0">
        <h2>UTI</h2>
        <span>{uti}</span>
    </div>
  </div>
</div>
</div>
</div>
  )
  }

  export default CharacterCard;
  
