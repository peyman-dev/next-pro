import React from 'react'

const Table = ({children}) => {
  return (
    <div className='w-full border overflow-hidden rounded-lg border-white/20'>
        {children}
    </div>
  )
}

export default Table