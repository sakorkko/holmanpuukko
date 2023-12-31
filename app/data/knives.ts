export interface Knife {
  url: string;
  title: string;
  description: string;
  id: string;
}

const knives: Knife[] = [
  {
    url: "/images/taitto1.jpg",
    title: "Puukko 1",
    description: "A puukko I made",
    id: "1",
  },
  {
    url: "/images/taitto2.jpg",
    title: "Puukko 2",
    description:
      "A puukko I madeasdfa sfsdafasd fsdfsa dfsda sdafasdfasdfs adfasdfasdfasdf asd fdasfasdfas dfasdfasdfsfsd",
    id: "2",
  },

  {
    url: "/images/taitto3.jpg",
    title: "Puukko 3",
    description: "A puukko I made",
    id: "3",
  },
  {
    url: "/images/taitto4.jpg",
    title: "Puukko 4",
    description: "A puukko I made",
    id: "4",
  },
  {
    url: "/images/taitto5.jpg",
    title: "Puukko 5",
    description: "A puukko I made",
    id: "5",
  },
];

export const getKnives = (): Knife[] => {
  return knives;
};

export const getKnifeById = (id: string): Knife | undefined => {
  return knives.find((knife) => knife.id === id);
};
