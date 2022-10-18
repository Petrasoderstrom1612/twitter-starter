import React, { useEffect } from 'react';

const TaskList = ({ list }) => {
  useEffect(() => {
    console.log('component did mount')
    return (
      console.log('component did unmount')
    )
  }, [])
  return (
    <p>{list}</p>
  )
}

export default TaskList