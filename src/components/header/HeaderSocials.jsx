import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='linkedin' target='_blank'><BsLinkedin/></a>
        <a href='github' target='_blank'><FaGithub/></a>
        <a href='other' target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials