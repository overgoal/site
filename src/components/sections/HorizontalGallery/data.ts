// Define gallery item type with uniform sizing
export type GalleryItem = {
  id: number;
  image: string;
  title: string;
};

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "/screens/MAIN.png",
    title: "Main Menu",
  },
  {
    id: 2,
    image: "/screens/MatchEvent.png",
    title: "Match Events",
   
  },
  {
    id: 3,
    image: "/screens/nonMatch.png",
    title: "Non-Match Events",
   
  },
  {
    id: 4,
    image: "/screens/select1.png",
    title: "Character Selection",
   
  },
  {
    id: 5,
    image: "/screens/teamSelect3.png",
    title: "Team Selection",
   
  },
  {
    id: 6,
    image: "/screens/MAIN.png",
    title: "Main Menu",
   
  },
  {
    id: 7,
    image: "/screens/MatchEvent.png",
    title: "Match Events",
   
  },
  {
    id: 8,
    image: "/screens/select1.png",
    title: "Non-Match Events",
   
  }
];
