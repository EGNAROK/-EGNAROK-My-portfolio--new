import React from 'react'
import { motion } from 'framer-motion';
import { AppTextBlock } from '../../shared/components';
import './WorkExperience.scss';
import { useTranslation } from 'react-i18next';
import { logos } from '../../assets/images';
import { AppIconWrapper } from '../../shared/components/AppIcon/AppIconWrapper';
import SvgBriefcase from '../../shared/components/AppIcon/icons/Briefcase';

export const WorkExperience: React.FC = () => {
    const { t } = useTranslation(["pages/landing-page"]);
    const icon = SvgBriefcase;

  return (
    <motion.div 
    className='work-experience'
    initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <AppTextBlock 
        preTitle={t("skills.workExperience")}
        preTitleTextColor="accent"
        preTitleTextSize="lg"
        className="work-experience__title"
      />
      <div className='work-experience__list'>
        <div className='work-experience__item'>
            <div className='work-experience__image-wrapper'>
                <img src={logos.Sonik_T} alt={t("skills.Sonik.imgAlt")} className='work-experience__image'/>
            </div>
            <div className='work-experience__info'>
                <AppTextBlock 
                description={t("skills.Sonik.title")}
              descriptionTextColor="accent"
              descriptionTextSize="sm"
                className="work-experience__company-title"
                />
                <span className="work-experience__years">{t("skills.Sonik.july")} 2024 – {t("skills.Sonik.august")} 2025</span>
            </div>
        </div>
        <div className='work-experience__item'>
            <div className='work-experience__image-wrapper'>
                <AppIconWrapper Icon={icon} iconSize={30} alt={t("skills.selfEmployed.imgAlt")}/>
            </div>
            <div className='work-experience__info'>
                <AppTextBlock 
                description={t("skills.selfEmployed.title")}
              descriptionTextColor="accent"
              descriptionTextSize="sm"
                className="work-experience__company-title"
                />
                <span className="work-experience__years">{t("skills.selfEmployed.september")} 2017 – {t("skills.selfEmployed.may")} 2024</span>
            </div>
        </div>
      </div>
    </motion.div>
  )
}
