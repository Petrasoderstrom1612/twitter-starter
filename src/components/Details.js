/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import SINGLE_POKEMON_URL from 'utils/urls';

export const Details = () => {
  const { pokemonName } = useParams();
  const params = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState({}); /* the result in the brackets, in this case object */
  const [loading, setLoading] = useState(false); /* the default state */

  useEffect(() => {
    fetch(SINGLE_POKEMON_URL(pokemonName))
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [pokemonName]);
  const goBack = () => {
    navigate(-1)
  }

  if (loading) { /* if true */
    return (
      <p>loading ...</p>
    )
  }
  return (/* if false */
    <div>
      <p>I am the details component</p>
      <img alt="pokemon" src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} />
      {/* Dash -is considered  minus sign in js that is why we wrap it in [], we only use [ to replace the first dot, the second dot you keep */}
      {/* <img src={details?.sprites.other['official-artwork'].front_default} /> */}
      {/* easy solution check with ? */}
      <button type="button" onClick={goBack}> Go back </button>
    </div>
  )
}

export default Details;

// somePokemon.sprites.other.official-artwork.front-default