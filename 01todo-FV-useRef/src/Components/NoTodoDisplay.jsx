import React from 'react'


function NoTodoDisplay({todoItems}) {
  return (
     <>{todoItems.length === 0 &&  <p className="opacity-55 text-danger p-4 text-center fs-1">
     Aha! I have no work to do.</p>}
    
     </>
     
  )
}

export default NoTodoDisplay