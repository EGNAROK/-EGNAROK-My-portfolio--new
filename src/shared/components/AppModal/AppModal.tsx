import React from 'react'
import { AppIconWrapper } from '../AppIcon/AppIconWrapper';
import SvgClose from '../AppIcon/icons/Close';
import './AppModal.scss';

type AppModalProps = {
  isOpen: boolean;
  onClose?: () => void;
    children: React.ReactNode;
    className?: string;
}

export const AppModal: React.FC<AppModalProps> = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`app-modal ${className}`}>
      <div className='app-modal__overlay' onClick={onClose}>
        <div className="app-modal__content" onClick={(e) => e.stopPropagation()}>
        <AppIconWrapper Icon={SvgClose} size={24} iconSize={22} className="app-modal__close" onClick={onClose}/>
        {children}
      </div>
      </div>
    </div>
  )
}
