import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp } from '@fortawesome/free-solid-svg-icons'

export const Up = () => {

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='position-fixed bottom-0 end-0 m-1 fs-5'>
      <FontAwesomeIcon icon={faCircleUp} onClick={goToTop} />
    </div>
  )
}
