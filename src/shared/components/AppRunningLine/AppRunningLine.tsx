import React from 'react'
import Marquee from 'react-fast-marquee';
import { RunningLineList } from './RunningLineList/RunningLineList';
import './AppRunningLine.scss';

interface AppRunningLineProps {
    className?: string;
    items: { title: string }[];
}

export const AppRunningLine: React.FC<AppRunningLineProps> = ({ className, items }) => {
    return (
        <div className={`app-running-line ${className}`}>
            <Marquee speed={50} gradient={false}>
                <RunningLineList items={items} />
            </Marquee>
        </div>
    )
}
