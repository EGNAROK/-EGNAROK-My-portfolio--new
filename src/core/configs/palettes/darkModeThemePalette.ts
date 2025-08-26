import { staticColors } from "./staticColors";

export const darkModeThemePalette = {
  background: {
    base: 'rgba(41, 47, 54, 1)',        
    surface: 'rgba(26, 30, 35, 1)',    
    accent: 'rgba(152, 250, 236, 1)',       
    muted: 'rgb(22, 22, 22)',       
    highlight: 'rgb(254, 254, 254)',
    default: 'rgb(254, 254, 254)'
  },
  text: {
    primary: 'rgb(254, 254, 254)',    
    secondary: 'rgb(198, 198, 198)',    
    muted: 'rgb(149, 149, 149)',         
    accent: 'rgba(152, 250, 236, 1)'
  },
  border: {
    default: 'rgba(95, 95, 95, 0.5)',      
    accent: 'rgba(152, 250, 235, 0.6)',  
    highlight: 'rgba(152, 250, 236, 1)'    
  },
  shadows: {
    base: 'rgb(0, 0, 0)',
    deep: 'rgba(34, 34, 34, 0.9)',
  },
  staticColors
}
