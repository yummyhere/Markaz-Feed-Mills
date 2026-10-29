import React from 'react';

// Brand Logo Animal Silhouette (Cow and sheep standing together, matching reference logo)
export const BrandLogoSilhouette = ({ className = "w-10 h-10", color = "#243D2B" }) => (
  <svg viewBox="0 0 80 50" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Stylized Cow body and head */}
    <path d="M12 28 C12 20, 18 16, 26 16 C34 16, 42 17, 48 20 C49 16, 52 14, 56 14 C58 14, 60 15, 61 17 C64 16, 67 17, 68 19 C68 22, 65 24, 63 25 C64 28, 63 32, 60 34 C58 36, 55 35, 52 35 C48 37, 42 38, 32 38 C22 38, 14 36, 12 28 Z" />
    {/* Cow legs */}
    <rect x="18" y="34" width="3.5" height="13" rx="1.5" />
    <rect x="25" y="34" width="3.5" height="13" rx="1.5" />
    <rect x="44" y="34" width="3.5" height="13" rx="1.5" />
    <rect x="51" y="33" width="3.5" height="13" rx="1.5" />
    {/* Small Sheep/Lamb beside the cow */}
    <ellipse cx="64" cy="33" rx="9" ry="6.5" />
    <circle cx="72" cy="29" r="4.5" />
    <rect x="59" y="37" width="2.5" height="9" rx="1" />
    <rect x="63" y="37" width="2.5" height="9" rx="1" />
    <rect x="68" y="37" width="2.5" height="9" rx="1" />
  </svg>
);

// Green Leaf attached to the "Store" in Hero
export const BotanicalLeaf = ({ className = "w-6 h-6", color = "#2E5839" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 26 C10 18, 18 10, 28 6 C28 16, 20 24, 12 26 C9 26.5, 7 26.3, 6 26 Z"
      fill={color}
    />
    <path
      d="M6 26 C12 21, 18 17, 26 8"
      stroke="#F7F4EB"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

// Botanical Branch with leaves (used under hero curve and in feature band)
export const BotanicalBranch = ({ className = "w-24 h-24", color = "#A8B395" }) => (
  <svg viewBox="0 0 120 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 65 C35 55, 65 40, 110 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Leaves along branch */}
    <path d="M30 55 C25 45, 32 38, 42 42 C42 48, 38 54, 30 55 Z" fill={color} opacity="0.85" />
    <path d="M48 48 C55 38, 65 42, 60 52 C54 53, 50 50, 48 48 Z" fill={color} opacity="0.85" />
    <path d="M68 38 C64 26, 75 22, 82 28 C80 35, 75 38, 68 38 Z" fill={color} opacity="0.85" />
    <path d="M86 28 C94 18, 105 24, 98 33 C92 34, 88 31, 86 28 Z" fill={color} opacity="0.85" />
    <path d="M104 18 C108 8, 118 12, 114 20 C110 21, 106 20, 104 18 Z" fill={color} opacity="0.85" />
  </svg>
);

// Farmer Hat Icon for "Trusted by Farmers"
export const FarmerHatIcon = ({ className = "w-6 h-6", color = "#F7F4EB" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 17 C6 15, 18 15, 22 17 C20 19, 4 19, 2 17 Z"
      fill={color}
    />
    <path
      d="M5 16 C5.5 10, 7 8, 12 8 C17 8, 18.5 10, 19 16 Z"
      fill={color}
    />
    <path
      d="M5.5 14.5 C8 13.5, 16 13.5, 18.5 14.5"
      stroke="#1E3524"
      strokeWidth="1.2"
    />
  </svg>
);

// Cow Badge Silhouette
export const CowBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7F4EB" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10 C4 7, 6 5, 12 5 C18 5, 20 7, 20 10 C20 13, 19 15, 17 16 C16 19, 14 20, 12 20 C10 20, 8 19, 7 16 C5 15, 4 13, 4 10 Z" />
    {/* Horns */}
    <path d="M4 7 C2 5, 2 3, 5 4" stroke="#F7F4EB" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M20 7 C22 5, 22 3, 19 4" stroke="#F7F4EB" strokeWidth="1.8" strokeLinecap="round" />
    {/* Ears */}
    <ellipse cx="4" cy="9" rx="2" ry="1" />
    <ellipse cx="20" cy="9" rx="2" ry="1" />
    {/* Snout */}
    <ellipse cx="12" cy="14" rx="4" ry="2.5" fill="#243D2B" />
    <circle cx="10.5" cy="14" r="0.8" fill="#F7F4EB" />
    <circle cx="13.5" cy="14" r="0.8" fill="#F7F4EB" />
  </svg>
);

// Chicken Badge Silhouette
export const ChickenBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7F4EB" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    {/* Comb */}
    <path d="M11 4 C11 2.5, 13 2.5, 13 4 C13.5 2.5, 15.5 3, 15 5 Z" fill="#F7F4EB" />
    {/* Head & Beak */}
    <path d="M10 8 C10 5.5, 14 5.5, 15 7.5 L18 8.5 L15 10 C15 13, 17 15, 18 16 C16 18, 9 18, 8 14 C7 11, 8 8, 10 8 Z" />
    {/* Eye */}
    <circle cx="13" cy="7.5" r="0.8" fill="#243D2B" />
    {/* Wattle */}
    <path d="M14 10 C14 11.5, 13 12, 12.5 11" stroke="#F7F4EB" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// Pigeon Badge Silhouette
export const PigeonBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7F4EB" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    {/* Sleek Pigeon Body & Tail */}
    <path d="M6 7 C8 5, 11 5, 12 7 L14 7.5 L12 8.5 C13 11, 16 13, 20 15 L20 17 C16 17, 12 15, 9 12 C7 11, 5 9, 6 7 Z" />
    {/* Wing curve */}
    <path d="M8 9 C11 10, 14 13, 16 15 C13 16, 9 15, 7 12 Z" opacity="0.85" />
    {/* Beak & eye */}
    <path d="M5 7 L3 7.5 L5 8 Z" />
    <circle cx="7" cy="7.2" r="0.7" fill="#243D2B" />
  </svg>
);

// Goat Badge Silhouette
export const GoatBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7F4EB" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    {/* Head */}
    <path d="M7 9 C7 7, 9 5, 12 5 C15 5, 17 7, 17 9 C17 12, 15 16, 12 18 C9 16, 7 12, 7 9 Z" />
    {/* Curved horns */}
    <path d="M9 5 C7 2, 5 3, 5 5" stroke="#F7F4EB" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M15 5 C17 2, 19 3, 19 5" stroke="#F7F4EB" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Beard */}
    <path d="M11 18 L12 21 L13 18 Z" fill="#F7F4EB" />
  </svg>
);

// Wheat Sheaf Badge Silhouette
export const WheatBadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="#F7F4EB" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22 L12 2" stroke="#F7F4EB" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 6 C10 4, 8 6, 12 9 C16 6, 14 4, 12 6 Z" />
    <path d="M12 10 C10 8, 7 10, 12 13 C17 10, 14 8, 12 10 Z" />
    <path d="M12 14 C9 12, 6 14, 12 17 C18 14, 15 12, 12 14 Z" />
  </svg>
);
