import React from 'react'
import Button from '@mui/material/Button';



const TodoList = () => {
  return (
    <div>
        <div className=''>
      <h1>ToDo List</h1>
      <Button variant="contained">Add task</Button>
      </div>
      <div className='mt-4'>
        list
      </div>
    </div>
  )
}

export default TodoList
