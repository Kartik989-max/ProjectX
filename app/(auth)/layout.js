import React from 'react'

function Layout({children}) {
  return (
    <div className='flex justify-center pt-20 '>
      {children}
    </div>
  )
}

export default Layout
