import React from 'react'
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToDefaultPage = () => {
    navigate('/');
  }
  return (
    <div>
      <p>This route does not exist</p>
      <button type="button" onClick={returnToDefaultPage}> Go to default page</button>
    </div>
  )
}

export default NotFound;