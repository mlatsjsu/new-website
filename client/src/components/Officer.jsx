import React from 'react'
import OfficerCard from './OfficerCard'
import Trique from '../../images/trique.jpg'

const Officer = () => {
  return (
    <div>
      <h1>Officers</h1>
      <OfficerCard photo={Trique} name="Trique Nguyen" linkedin="linkedin" github="github" website="website" role="Webmaster"/>
    </div>
  )
}

export default Officer