import React from 'react'

export default function Container({className, children}) {
  return (
    <div className={`max-w-[1530px] mx-auto px-6 ${className}`}>
      {children}
    </div>
  )
}