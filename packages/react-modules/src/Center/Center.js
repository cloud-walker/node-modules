import React from 'react'

export const Center = ({children, ...props}) => {
  return (
    <div
      {...props}
      style={{
        maxWidth: '60ch',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'content-box',
      }}
    >
      {children}
    </div>
  )
}
