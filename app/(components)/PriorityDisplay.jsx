import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriorityDisplay = () => {
  return (
    <div className='flex justify-start align-baseline gap-1'>
          <FontAwesomeIcon icon={faFire} className='text-red-400'/>
          <FontAwesomeIcon icon={faFire} className='text-red-400'/>
          <FontAwesomeIcon icon={faFire} className='text-red-400'/>
          <FontAwesomeIcon icon={faFire} className='text-red-400'/>
          <FontAwesomeIcon icon={faFire} className='text-red-400'/>
    </div>
  )
}

export default PriorityDisplay
