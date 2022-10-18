import React from 'react'
import { Link } from 'react-router-dom';

export const List = ({ list }) => {
  return (
    <div className="list">
      {list.map((pokemon) => {
        return <Link className="list-element" key={pokemon.name} to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
      })}
    </div>
  );
}

export default List;