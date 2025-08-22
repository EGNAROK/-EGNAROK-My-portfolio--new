import React from 'react'
import './AnimatedLine.scss';

interface AnimatedLineProps {
  duration?: string // типу '5s', '2.5s', тощо
}

export const AnimatedLine: React.FC<AnimatedLineProps> = ({ duration = '5s' }) => {
  return (
    <div 
    className='animated-line'
    style={{ ['--slide-duration' as any]: duration }}
    >
    </div>
  )
}
