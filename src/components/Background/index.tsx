import React from 'react'
import StyledBackground from '../../styles/StyledBackground'
import { IContext } from '../../contexts/HubProvider'

const Background = ({children}:IContext) => {
  return (
    <StyledBackground>
        {children}
    </StyledBackground>
  )
}

export default Background