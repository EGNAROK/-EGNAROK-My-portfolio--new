import SvgAbout from "../../shared/components/AppIcon/icons/About";
import SvgContact from "../../shared/components/AppIcon/icons/Contact";
import SvgProjects from "../../shared/components/AppIcon/icons/Projects";
import SvgSkills from "../../shared/components/AppIcon/icons/Skills";

export const navigationData = [
  {
    label: 'navigation.about',
    targetId: 'aboutMe',
    icon: SvgAbout 
  },
  {
    label: 'navigation.skills',
    targetId: 'skills',
    icon: SvgSkills 
  },
  {
    label: 'navigation.projects',
    targetId: 'projects',
    icon: SvgProjects
  },
  {
    label: 'navigation.contact',
    targetId: 'contact',
    icon: SvgContact
  },
]
