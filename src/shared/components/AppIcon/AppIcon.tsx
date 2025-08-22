import React, { type ComponentType, type SVGProps } from 'react'
import './AppIcon.scss'

type AppIconProps = {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    alt?: string;
    className?: string;
    iconColorClass?: string;
    size?: number;
};

export const AppIcon: React.FC<AppIconProps> = ( {
    Icon,
    alt = '',
    className = '',
    iconColorClass = '',
    size = 24,
}
) => {
    return (
        <Icon
            aria-label={alt}
            role="img"
            className={`app-icon ${iconColorClass} ${className}`}
            width={size}
            height={size}
        />
    )
}
