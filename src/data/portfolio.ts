export interface PortfolioItem {
  id: number;
  title: string;
  couple: string;
  location: string;
  duration: string;
  category: 'weddings' | 'gym-fitness' | 'vlogs' | 'entrepreneurs-athletes';
  thumbnail: string;
  driveUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  // ── Weddings ──
  {
    id: 1,
    title: "Mehandi Function",
    couple: "Tania & Usammah",
    location: "USA",
    duration: "3:31",
    category: "weddings",
    thumbnail: "/images/thumbnail-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1xlZAbzHaML7aoBrg_uHoVOF5prvycK9T/preview",
  },
  {
    id: 2,
    title: "Golden Hour Vows",
    couple: "Nawal & Rayyan",
    location: "USA",
    duration: "2:30",
    category: "weddings",
    thumbnail: "/images/thumbnail-2.jpg",
    driveUrl: "https://drive.google.com/file/d/1FXayIRhCj2dGnKKi8emhgoXwtmgmQWe8/preview",
  },
  {
    id: 3,
    title: "Cathedral Dreams",
    couple: "Arshmen & Bilal",
    location: "USA",
    duration: "2:39",
    category: "weddings",
    thumbnail: "/images/thumbnail-3.jpg",
    driveUrl: "https://drive.google.com/file/d/1Q82H5AzjGDKaLRN8dRim7qnDuTnRPx9A/preview",
  },
  {
    id: 4,
    title: "Lavender Fields Forever",
    couple: "Sonali & Jashua",
    location: "USA",
    duration: "3:10",
    category: "weddings",
    thumbnail: "/images/thumbnail-4.jpg",
    driveUrl: "https://drive.google.com/file/d/16lYeIS1AtagRSoksTBZOGIverIHIwdGS/preview",
  },
  {
    id: 5,
    title: "The Grand Affair",
    couple: "Saba & Taha",
    location: "USA",
    duration: "2:44",
    category: "weddings",
    thumbnail: "/images/thumbnail-5.jpg",
    driveUrl: "https://drive.google.com/file/d/12KeyzNpLT4NEQFrourS6icn_nnpn-4Ea/preview",
  },
  {
    id: 6,
    title: "Eternal Promises",
    couple: "Hannah & Omar",
    location: "USA",
    duration: "1:46",
    category: "weddings",
    thumbnail: "/images/thumbnail-6.jpg",
    driveUrl: "https://drive.google.com/file/d/1YyVNldO91Gw6sfkvFecO4lodGgPWbdl8/preview",
  },

  // ── Gym / Fitness ──
  {
    id: 7,
    title: "Iron Will — Transformation Edit",
    couple: "Mike Torres",
    location: "Pakistan",
    duration: "0:45",
    category: "gym-fitness",
    thumbnail: "/images/thumbnail-gym-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1ird8n8B_PNLiITd-2ikqGbEmL0vVpDUK/preview",
  },
  {
    id: 8,
    title: "CrossFit Games Highlight",
    couple: "Elite Athletics",
    location: "Pakistan",
    duration: "0:14",
    category: "gym-fitness",
    thumbnail: "/images/thumbnail-gym-2.jpg",
    driveUrl: "https://drive.google.com/file/d/1E4X6F7cxUjL_PNsz_8opIrR2kZNSpfBI/preview",
  },
  {
    id: 13,
    title: "Powerlifting Promo",
    couple: "Titan Gym",
    location: "Chicago, IL",
    duration: "1:15",
    category: "gym-fitness",
    thumbnail: "/images/thumbnail-gym-3.jpg",
    driveUrl: "https://drive.google.com/file/d/1nW_FXhl-_4jhWxZLqJrjJh6BdR8dQtTC/preview",
  },
  {
    id: 14,
    title: "Battle Ropes Energy",
    couple: "Sarah Jenkins",
    location: "Pakistan",
    duration: "0:20",
    category: "gym-fitness",
    thumbnail: "/images/thumbnail-gym-4.jpg",
    driveUrl: "https://drive.google.com/file/d/1GcG0VD5vOdkTrjwhzcsSQaDGUtZ4zhrU/preview",
  },

  // ── Vlogs ──
  {
    id: 9,
    title: "Visit to Allah Razi Nalli Biryani",
    couple: "Owner of Allah Razi",
    location: "Karachi , Pakistan",
    duration: "7:16",
    category: "vlogs",
    thumbnail: "/images/thumbnail-vlog-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1iNxIU_Zy5KbRL8U1OK88VTyxmx3e1u0z/preview",
  },
  {
    id: 10,
    title: "Bombay Light House",
    couple: "Owner of Bombay LH",
    location: "Karachi , Pakistan",
    duration: "09:03",
    category: "vlogs",
    thumbnail: "/images/thumbnail-vlog-2.jpg",
    driveUrl: "https://drive.google.com/file/d/1xu656wqGD0J_5JBLhZSEyEyLuYskZTTm/preview",
  },

  // ── Entrepreneurs & Athletes ──
  {
    id: 11,
    title: "The Startup Grind — Short Film",
    couple: "DR Mariano Barbacid",
    location: "Madrid",
    duration: "1:18",
    category: "entrepreneurs-athletes",
    thumbnail: "/images/thumbnail-ent-1.jpg",
    driveUrl: "https://drive.google.com/file/d/1JCEgxOjJdPjbGMV7YM-Zr4f3BRIp-ddf/preview",
  },
  {
    id: 12,
    title: "Track & Triumph — Athlete Reel",
    couple: "Master Ayub",
    location: "Pakistan",
    duration: "0:25",
    category: "entrepreneurs-athletes",
    thumbnail: "/images/thumbnail-ent-2.jpg",
    driveUrl: "https://drive.google.com/file/d/1BuiNKpjw0FPpe_A9aQGM-DsXNQgPNfko/preview",
  },
];

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'gym-fitness', label: 'Gym / Fitness' },
  { id: 'vlogs', label: 'Vlogs' },
  { id: 'entrepreneurs-athletes', label: 'Entrepreneurs & Athletes' },
] as const;
