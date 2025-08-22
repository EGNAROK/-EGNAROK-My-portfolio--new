import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AppContainer, AppTextBlock } from '../../shared/components'
import './AboutMe.scss';

export const AboutMe: React.FC = () => {
  const { t } = useTranslation(['pages/landing-page']);

  return (
    <div id='aboutMe' className='about-me'>
      <AppContainer className='about-me__container'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, ease: 'easeOut' }} 
          viewport={{ once: true, amount: 0.2 }} 
        >
          <AppTextBlock title={t('about.title')} titleTextColor='accent' className='about-me__title' />
        </motion.div>
        <div className='about-me__section'>
          <div className='about-me__text-wrapper'>
            <motion.div
              className='about-me__content'
              initial={{ opacity: 0, y: 100 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, ease: 'easeOut' }} 
              viewport={{ once: true, amount: 0.2 }} 
            >
              <AppTextBlock
                description={t('about.description')}
                descriptionTextColor='secondary'
                descriptionTextSize='sm'
                className='about-me__text-block'
              />
            </motion.div>
          </div>
          <motion.div
            className='about-me__image-container'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className='about-me__image-wrapper'>
              <img
                // src={photos.ai}
                alt="Serhii – front-end developer"
                className="about-me__image"
              />
            </div>
          </motion.div>
        </div>

      </AppContainer>
    </div>
  )
}
