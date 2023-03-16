import React from 'react'
import { TiSocialFacebook, TiSocialGithub, TiSocialGooglePlus, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <span>BE IN TOUCH WITH US:</span>
        <div className='contact-wrapper-mail'>
            <input type='text' placeholder='Enter your e-mail...'/>
            <button>JOIN US</button>
            <div className='icons'>
                <TiSocialGooglePlus />
                <TiSocialFacebook />
                <TiSocialInstagram />
                <TiSocialLinkedin />
                <TiSocialGithub />
                <TiSocialTwitter />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
