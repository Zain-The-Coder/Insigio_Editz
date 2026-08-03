export interface PortfolioItem {
  id: number;
  title: string;
  couple: string;
  location: string;
  duration: string;
  category: 'highlights' | 'full-films' | 'teasers';
  thumbnail: string;
  driveUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "A Tuscan Romance",
    couple: "Sophia & James",
    location: "Florence, Italy",
    duration: "7:24",
    category: "highlights",
    thumbnail: "/images/thumbnail-1.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_1/preview",
  },
  {
    id: 2,
    title: "Golden Hour Vows",
    couple: "Elena & Marcus",
    location: "Santorini, Greece",
    duration: "8:12",
    category: "full-films",
    thumbnail: "/images/thumbnail-2.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_2/preview",
  },
  {
    id: 3,
    title: "Cathedral Dreams",
    couple: "Isabella & William",
    location: "Paris, France",
    duration: "6:45",
    category: "highlights",
    thumbnail: "/images/thumbnail-3.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_3/preview",
  },
  {
    id: 4,
    title: "Lavender Fields Forever",
    couple: "Charlotte & Oliver",
    location: "Provence, France",
    duration: "1:30",
    category: "teasers",
    thumbnail: "/images/thumbnail-4.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_4/preview",
  },
  {
    id: 5,
    title: "The Grand Affair",
    couple: "Victoria & Alexander",
    location: "Lake Como, Italy",
    duration: "7:58",
    category: "full-films",
    thumbnail: "/images/thumbnail-5.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_5/preview",
  },
  {
    id: 6,
    title: "Eternal Promises",
    couple: "Anastasia & Sebastian",
    location: "Vienna, Austria",
    duration: "1:15",
    category: "teasers",
    thumbnail: "/images/thumbnail-6.jpg",
    driveUrl: "https://drive.google.com/file/d/PLACEHOLDER_ID_6/preview",
  },
];

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'full-films', label: 'Full Films' },
  { id: 'teasers', label: 'Teasers' },
] as const;
