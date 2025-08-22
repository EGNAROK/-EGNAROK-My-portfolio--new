import React from 'react'
import './RunningLineList.scss';

interface RunningLineListProps {
  items: { title: string }[];
}

export const RunningLineList: React.FC<RunningLineListProps> = ({ items }) => {
  return (
    <div className='running-line-list'>
      {items.map((item, index) => (
        <div key={index} className='running-line-list__item'>
            <p className="running-line-list__text">{item.title}</p>
        </div>
      ))}
    </div>
  )
}
