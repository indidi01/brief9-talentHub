export type Ad = {
  id: number;
  title: string;
  description: string;
  date: string;
};

export const annonces: Ad[] = [
  {
    id: 1,
    title: "Développeur(se) junior TS React",
    description: "Lorem ipsum...",
    date: "Il y a 2 jours",
  },
  {
    id: 2,
    title: "Backend junior PHP Symfony",
    description: "Lorem ipsum...",
    date: "Il y a 5 jours",
  },
  {
    id: 3,
    title: "Data Scientist Python",
    description: "Lorem ipsum...",
    date: "Il y a 1 semaine",
  },
];