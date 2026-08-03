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
    title: "Mehandi Function",
    couple: "Tania & Usammah",
    location: "USA",
    duration: "3:31",
    category: "highlights",
    thumbnail: "/images/thumbnail-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1xlZAbzHaML7aoBrg_uHoVOF5prvycK9T/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Golden Hour Vows",
    couple: "Nawal & Rayyan",
    location: "USA",
    duration: "2:30",
    category: "highlights",
    thumbnail: "/images/thumbnail-2.jpg",
    driveUrl: "https://drive.google.com/file/d/1FXayIRhCj2dGnKKi8emhgoXwtmgmQWe8/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Cathedral Dreams",
    couple: "Arshmen & Bilal",
    location: "USA",
    duration: "2:39",
    category: "highlights",
    thumbnail: "/images/thumbnail-3.jpg",
    driveUrl: "https://drive.google.com/file/d/1Q82H5AzjGDKaLRN8dRim7qnDuTnRPx9A/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Lavender Fields Forever",
    couple: "Sonali & Jashua",
    location: "USA",
    duration: "3:10",
    category: "highlights",
    thumbnail: "/images/thumbnail-4.jpg",
    driveUrl: "https://drive.google.com/file/d/16lYeIS1AtagRSoksTBZOGIverIHIwdGS/view?usp=drive_link",
  },
  {
    id: 5,
    title: "The Grand Affair",
    couple: "Saba & Taha",
    location: "USA",
    duration: "2:44",
    category: "highlights",
    thumbnail: "/images/thumbnail-5.jpg",
    driveUrl: "https://drive.google.com/file/d/12KeyzNpLT4NEQFrourS6icn_nnpn-4Ea/view?usp=drive_link",
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
