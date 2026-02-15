import { projects } from "../../../assets/images";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 6,
    title: 'projects.project6.title',
    description: 'projects.project6.description',
    image: projects.cozyMug,
    link: 'https://cozy-mug.vercel.app/'
  },
  {
    id: 5,
    title: 'projects.project5.title',
    description: 'projects.project5.description',
    image: projects.todoList,
    link: 'https://to-do-list-sage-two-77.vercel.app/',
  },
  {
    id: 4,
    title: 'projects.project4.title',
    description: 'projects.project4.description',
    image: projects.pokedex,
    link: 'https://pokedex-one-blue-57.vercel.app/',
  },
  {
    id: 3,
    title: 'projects.project2.title',
    description: 'projects.project2.description',
    image: projects.foodtuck,
    link: 'https://food-tuck-psi.vercel.app/',
  },
  {
    id: 2,
    title: 'projects.project3.title',
    description: 'projects.project3.description',
    image: projects.languageSpace,
    link: 'https://language-school-kappa.vercel.app/',
  },
  {
    id: 1,
    title: 'projects.project1.title',
    description: 'projects.project1.description',
    image: projects.workout,
    link: 'https://egnarok.github.io/workout/',
  }
];
