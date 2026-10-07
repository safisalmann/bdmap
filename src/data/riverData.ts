import { LandmarkPOI } from '../types';

export interface RiverPath {
  id: string;
  nameBn: string;
  nameEn: string;
  color: string;
  width: number;
  coordinates: [number, number][]; // [lat, lng] array
  description: string;
  origin: string;
  lengthKm: number;
  estuary: string;
}

export const MAJOR_RIVERS: RiverPath[] = [
  {
    id: 'river-padma',
    nameBn: 'পদ্মা নদী',
    nameEn: 'Padma River',
    color: '#0284c7', // bright river blue
    width: 4,
    coordinates: [
      [24.68, 88.08],
      [24.50, 88.35],
      [24.36, 88.60],
      [24.15, 88.90],
      [24.06, 89.03],
      [23.95, 89.40],
      [23.82, 89.78], // Goalando confluence with Jamuna
      [23.68, 90.05],
      [23.45, 90.26], // Padma Bridge
      [23.35, 90.50],
      [23.23, 90.64]  // Chandpur confluence with Meghna
    ],
    description: 'হিমালয়ের গঙ্গোত্রী হিমবাহ থেকে সৃষ্ট গঙ্গা নদী চাঁপাইনবাবগঞ্জের পাংখা দিয়ে বাংলাদেশে প্রবেশ করে পদ্মা নাম ধারণ করেছে।',
    origin: 'হিমালয়ের গঙ্গোত্রী হিমবাহ',
    lengthKm: 366,
    estuary: 'চাঁদপুরে মেঘনা নদীর সাথে মিলিত হয়ে বঙ্গোপসাগরে পতন'
  },
  {
    id: 'river-jamuna',
    nameBn: 'যমুনা নদী',
    nameEn: 'Jamuna River',
    color: '#0369a1',
    width: 4.5,
    coordinates: [
      [25.14, 89.78], // Dewanganj split
      [24.95, 89.65],
      [24.75, 89.68],
      [24.50, 89.72],
      [24.39, 89.76], // Jamuna Bridge
      [24.20, 89.80],
      [24.00, 89.78],
      [23.82, 89.78]  // Goalando confluence with Padma
    ],
    description: '১৭৮৭ সালের প্রলয়ঙ্করী ভূমিকম্প ও বন্যায় ব্রহ্মপুত্রের মূল তীব্র জলধারা দেওয়ানগঞ্জ থেকে নতুন গতিপথ নিয়ে যমুনা নাম ধারণ করে।',
    origin: 'দেওয়ানগঞ্জ, জামালপুর (ব্রহ্মপুত্রের মূল ধারা)',
    lengthKm: 205,
    estuary: 'গোয়ালন্দে পদ্মা নদীর সাথে মিলিত হয়েছে'
  },
  {
    id: 'river-meghna',
    nameBn: 'মেঘনা নদী',
    nameEn: 'Meghna River',
    color: '#0ea5e9',
    width: 5,
    coordinates: [
      [24.05, 90.99], // Bhairab Bazar
      [23.85, 90.75],
      [23.60, 90.60],
      [23.40, 90.60],
      [23.23, 90.64], // Chandpur confluence with Padma
      [23.00, 90.65],
      [22.70, 90.70],
      [22.30, 90.75],
      [21.80, 90.75]  // Bay of Bengal
    ],
    description: 'পানি প্রবাহ ও প্রস্থের দিক থেকে বাংলাদেশের বৃহত্তম এবং গভীরতম (২৭ মিটার) নদী। মোহনায় এর প্রস্থ প্রায় ১২-১৩ কিমি।',
    origin: 'ভারতের মণিপুর পাহাড়ের বরাক নদী',
    lengthKm: 330,
    estuary: 'ভোলা ও নোয়াখালীর বুক চিরে বঙ্গোপসাগরে পতন'
  },
  {
    id: 'river-brahmaputra',
    nameBn: 'পুরাতন ব্রহ্মপুত্র নদ',
    nameEn: 'Brahmaputra River',
    color: '#38bdf8',
    width: 3.5,
    coordinates: [
      [26.15, 89.85], // Nunkhawa, Kurigram
      [25.80, 89.70],
      [25.55, 89.72], // Chilmari
      [25.14, 89.78], // Dewanganj split
      [24.95, 89.95],
      [24.75, 90.42], // Mymensingh city
      [24.45, 90.78],
      [24.05, 90.99]  // Bhairab confluence
    ],
    description: 'তিব্বতের মানস সরোবর থেকে ইয়ারলুং সাংপো নামে উৎপন্ন হয়ে আসাম দিয়ে কুড়িগ্রামের নুনেখাওয়া দিয়ে বাংলাদেশে প্রবেশ করেছে।',
    origin: 'তিব্বতের মানস সরোবর (হিমালয়)',
    lengthKm: 276,
    estuary: 'ভৈরব বাজারে মেঘনা নদীতে পতন'
  },
  {
    id: 'river-teesta',
    nameBn: 'তিস্তা নদী',
    nameEn: 'Teesta River',
    color: '#38bdf8',
    width: 3.5,
    coordinates: [
      [26.25, 88.95], // Entry at Dalia
      [26.05, 88.95],
      [25.86, 89.23], // Gangachara
      [25.75, 89.45],
      [25.55, 89.65]  // Confluence at Chilmari
    ],
    description: 'সিকিমের ছাতামু হ্রদ থেকে উৎপন্ন হয়ে নীলফামারীর ডিমলার ডালিয়া দিয়ে বাংলাদেশে প্রবেশ করে চিলমারীতে ব্রহ্মপুত্রের সাথে মিশেছে।',
    origin: 'হিমালয়ের সিকিম পর্বতের ছাতামু হ্রদ',
    lengthKm: 115,
    estuary: 'কুড়িগ্রামের চিলমারীতে ব্রহ্মপুত্র নদে পতন'
  },
  {
    id: 'river-karnaphuli',
    nameBn: 'কর্ণফুলী নদী',
    nameEn: 'Karnaphuli River',
    color: '#0284c7',
    width: 3.5,
    coordinates: [
      [22.85, 92.35], // Entry from Lushai Hills
      [22.70, 92.20],
      [22.65, 92.17], // Kaptai Lake
      [22.48, 92.13], // Chandraghona
      [22.38, 91.86], // Kalurghat
      [22.31, 91.80], // Chattogram Port
      [22.22, 91.79]  // Patenga Estuary
    ],
    description: 'ভারতের মিজোরামের লুসাই পাহাড় থেকে উৎপন্ন হয়ে রাঙ্গামাটি ও চট্টগ্রামের বুক চিরে পতেঙ্গায় বঙ্গোপসাগরে মিশেছে। মোহনায় প্রধান সমুদ্রবন্দর।',
    origin: 'ভারতের মিজোরামের লুসাই পাহাড়',
    lengthKm: 320,
    estuary: 'পতেঙ্গায় বঙ্গোপসাগরে পতন'
  },
  {
    id: 'river-surma-kushiyara',
    nameBn: 'সুরমা ও কুশিয়ারা নদী',
    nameEn: 'Surma & Kushiyara Rivers',
    color: '#0ea5e9',
    width: 3,
    coordinates: [
      [24.88, 92.40], // Amalshid split
      [24.90, 92.15],
      [24.89, 91.87], // Sylhet city
      [24.75, 91.60],
      [24.55, 91.25]  // Ajmiriganj confluence
    ],
    description: 'মণিপুর থেকে আসা বরাক নদী সিলেটের জকিগঞ্জের অমলশীদে সুরমা ও কুশিয়ারা নামে দুই ভাগে বিভক্ত হয়। পরে আজমিরীগঞ্জে মিলিত হয়ে কালনী নাম নেয়।',
    origin: 'ভারতের মণিপুর পাহাড়ের বরাক নদী',
    lengthKm: 250,
    estuary: 'আজমিরীগঞ্জে মিলিত হয়ে কালনী-মেঘনা গঠন'
  }
];

export const RIVER_CONFLUENCES: LandmarkPOI[] = [
  {
    id: 'confluence-goalando',
    nameBn: 'পদ্মা ও যমুনার মিলনস্থল: গোয়ালন্দ',
    nameEn: 'Padma-Jamuna Confluence, Goalando',
    districtId: 'Rajbari',
    districtBn: 'দৌলতদিয়া-গোয়ালন্দ, রাজবাড়ী ও মানিকগঞ্জ',
    category: 'river_confluence',
    lat: 23.8200,
    lng: 89.7800,
    badgeBn: 'পদ্মা ও যমুনা নদীর ঐতিহাসিক মিলনস্থল',
    description: 'প্রমত্তা পদ্মা নদী এবং যমুনা নদী রাজবাড়ী জেলার গোয়ালন্দ ও মানিকগঞ্জের আরিচার কাছে একত্রিত হয়েছে। মিলিত তীব্র জলধারা এখান থেকে পদ্মা নামে চাঁদপুরের দিকে প্রবাহিত হয়।',
    keyFacts: [
      'মিলিত নদীদ্বয়: পদ্মা ও যমুনা',
      'মিলিত নাম: পদ্মা নদী',
      'অবস্থান: দৌলতদিয়া-পাটুরিয়া ফেরিঘাট সংলগ্ন',
      'বিসিএস ও মেডিকেল ভর্তি পরীক্ষার অতি পরিচিত ভৌগোলিক প্রশ্ন'
    ]
  },
  {
    id: 'confluence-chandpur',
    nameBn: 'পদ্মা ও মেঘনার মিলনস্থল: চাঁদপুর মোহনা',
    nameEn: 'Padma-Meghna Confluence, Chandpur',
    districtId: 'Chandpur',
    districtBn: 'বড় স্টেশন মোলহেড, চাঁদপুর',
    category: 'river_confluence',
    lat: 23.2350,
    lng: 90.6400,
    badgeBn: 'পদ্মা, মেঘনা ও ডাকাতিয়া নদীর ত্রিনদী মোহনা',
    description: 'চাঁদপুরের বড় স্টেশন মোলহেডে পদ্মা ও মেঘনা নদী একত্রিত হয়েছে। মিলিত তীব্র জলধারা মেঘনা নামে সোজা বঙ্গোপসাগরে পতিত হয়। এটি ইলিশ মাছের প্রধান প্রাকৃতিক বিচরণ ক্ষেত্র।',
    keyFacts: [
      'মিলিত নদীদ্বয়: পদ্মা ও মেঘনা',
      'মিলিত নাম: মেঘনা নদী',
      'অবস্থান: চাঁদপুর বড় স্টেশন মোহনা',
      'জাতীয় মাছ ইলিশের প্রধান অবতরণ ক্ষেত্র'
    ]
  },
  {
    id: 'confluence-ajmiriganj',
    nameBn: 'সুরমা ও কুশিয়ারার মিলন: আজমিরীগঞ্জ (কালনী নদী)',
    nameEn: 'Surma-Kushiyara Confluence (Kalni River)',
    districtId: 'Habiganj',
    districtBn: 'আজমিরীগঞ্জ, হবিগঞ্জ',
    category: 'river_confluence',
    lat: 24.5500,
    lng: 91.2500,
    badgeBn: 'সুরমা ও কুশিয়ারা মিলিত হয়ে কালনী নদী',
    description: 'সিলেটের সুরমা ও কুশিয়ারা নদী হবিগঞ্জ জেলার আজমিরীগঞ্জে পুনরায় একত্রিত হয়ে কালনী নাম ধারণ করে। কালনী নদী পরবর্তীতে ভৈরব বাজারের কাছে মেঘনা নাম নেয়।',
    keyFacts: [
      'মিলিত নদীদ্বয়: সুরমা ও কুশিয়ারা',
      'মিলিত নাম: কালনী নদী (পরে মেঘনা)',
      'অবস্থান: আজমিরীগঞ্জ, হবিগঞ্জ ভাটি অঞ্চল'
    ]
  },
  {
    id: 'confluence-bhairab',
    nameBn: 'পুরাতন ব্রহ্মপুত্র ও কালনীর মিলন: ভৈরব বাজার',
    nameEn: 'Brahmaputra & Kalni Confluence, Bhairab',
    districtId: 'Kishoreganj',
    districtBn: 'ভৈরব (কিশোরগঞ্জ) ও আশুগঞ্জ (ব্রাহ্মণবাড়িয়া)',
    category: 'river_confluence',
    lat: 24.0450,
    lng: 90.9950,
    badgeBn: 'কালনী ও পুরাতন ব্রহ্মপুত্র মিলিত হয়ে মেঘনা নাম ধারণ',
    description: 'কিশোরগঞ্জের ভৈরব বাজারে কালনী নদী এবং ময়মনসিংহ থেকে আসা পুরাতন ব্রহ্মপুত্র নদ মিলিত হয়ে বিশাল মেঘনা নদী নামে দক্ষিণে প্রবাহিত হয়।',
    keyFacts: [
      'মিলিত নদীদ্বয়: কালনী নদী ও পুরাতন ব্রহ্মপুত্র নদ',
      'মিলিত নাম: মেঘনা নদী',
      'অবস্থান: ভৈরব-আশুগঞ্জ সংযোগ স্থল'
    ]
  },
  {
    id: 'confluence-dewanganj-split',
    nameBn: 'ব্রহ্মপুত্র থেকে যমুনার পৃথকীকরণ: দেওয়ানগঞ্জ',
    nameEn: 'Brahmaputra Split Point (Birth of Jamuna)',
    districtId: 'Jamalpur',
    districtBn: 'দেওয়ানগঞ্জ, জামালপুর',
    category: 'river_confluence',
    lat: 25.1400,
    lng: 89.7800,
    badgeBn: '১৭৮৭ সালের ভূমিকম্পে যমুনা নদীর সৃষ্টি',
    description: '১৭৮৭ সালের ভূমিকম্প ও ভয়াবহ বন্যার ফলে মূল ব্রহ্মপুত্রের তীব্র জলপ্রবাহ দেওয়ানগঞ্জের কাছে গতিপথ পরিবর্তন করে সোজা দক্ষিণে প্রবাহিত হয়ে যমুনা নদীর সৃষ্টি করে।',
    keyFacts: [
      'পুরাতন ব্রহ্মপুত্র চলে যায় ময়মনসিংহের দিকে',
      'নতুন শক্তিশালী শাখা হয় যমুনা নদী'
    ]
  },
  {
    id: 'confluence-amalshid-split',
    nameBn: 'বরাক নদী থেকে সুরমা ও কুশিয়ারার বিভাজন: অমলশীদ',
    nameEn: 'Barak River Bifurcation: Amalshid Point',
    districtId: 'Sylhet',
    districtBn: 'জকিগঞ্জ, সিলেট (ভারত সীমান্ত)',
    category: 'river_confluence',
    lat: 24.8800,
    lng: 92.4000,
    badgeBn: 'বরাক নদী দুই শাখায় বিভক্ত: সুরমা ও কুশিয়ারা',
    description: 'ভারতের মণিপুর থেকে আসা বরাক নদী সিলেট জেলার জকিগঞ্জের অমলশীদে প্রবেশমুখে সুরমা (উত্তর শাখা) এবং কুশিয়ারা (দক্ষিণ শাখা) নামে দুটি প্রধান নদীতে বিভক্ত হয়েছে।',
    keyFacts: [
      'মূল নদী: বরাক নদী (ভারত)',
      'উৎপন্ন শাখা: সুরমা নদী ও কুশিয়ারা নদী',
      'অবস্থান: অমলশীদ, জকিগঞ্জ, সিলেট'
    ]
  },
  {
    id: 'confluence-chilmari',
    nameBn: 'তিস্তা ও ব্রহ্মপুত্রের মিলনস্থল: চিলমারী',
    nameEn: 'Teesta & Brahmaputra Confluence, Chilmari',
    districtId: 'Kurigram',
    districtBn: 'চিলমারী, কুড়িগ্রাম',
    category: 'river_confluence',
    lat: 25.5500,
    lng: 89.6500,
    badgeBn: 'তিস্তা নদী ব্রহ্মপুত্র নদে মিলিত হওয়ার স্থান',
    description: 'হিমালয়ের সিকিম থেকে আসা তিস্তা নদী নীলফামারী, রংপুর ও গাইবান্ধা পার হয়ে কুড়িগ্রামের চিলমারী নৌবন্দরের কাছে ব্রহ্মপুত্র নদে পতিত হয়েছে।',
    keyFacts: [
      'নদীদ্বয়: তিস্তা নদী ও ব্রহ্মপুত্র নদ',
      'ঐতিহাসিক চিলমারী নদীবন্দর সংলগ্ন'
    ]
  },
  {
    id: 'confluence-kalurghat-halda',
    nameBn: 'হালদা ও কর্ণফুলী নদীর মিলনস্থল: কালুরঘাট',
    nameEn: 'Halda & Karnaphuli Confluence, Kalurghat',
    districtId: 'Chittagong',
    districtBn: 'কালুরঘাট, চট্টগ্রাম',
    category: 'river_confluence',
    lat: 22.3850,
    lng: 91.8600,
    badgeBn: 'হালদা নদী কর্ণফুলীতে পতনের মোহনা',
    description: 'দেশের একমাত্র প্রাকৃতিক মৎস্য প্রজনন নদী হালদা চট্টগ্রাম শহরের পূর্ব প্রান্তে কালুরঘাট সেতুর কাছে প্রমত্তা কর্ণফুলী নদীতে মিশেছে।',
    keyFacts: [
      'নদীদ্বয়: হালদা নদী ও কর্ণফুলী নদী',
      'কার্প জাতীয় মাছের ডিম ছাড়ার অঞ্চল হালদা এই মোহনার উজানে অবস্থিত'
    ]
  }
];

export function riverToPOI(river: RiverPath): LandmarkPOI {
  const midIndex = Math.floor(river.coordinates.length / 2);
  const midCoord = river.coordinates[midIndex] || [23.8, 90.3];

  return {
    id: river.id,
    nameBn: river.nameBn,
    nameEn: river.nameEn,
    districtId: 'Bangladesh',
    districtBn: 'বাংলাদেশ',
    category: 'river',
    badgeBn: `দৈর্ঘ্য: ${river.lengthKm} কিমি`,
    lat: midCoord[0],
    lng: midCoord[1],
    description: river.description,
    keyFacts: [
      `উৎপত্তি: ${river.origin}`,
      `মোট দৈর্ঘ্য: প্রায় ${river.lengthKm} কিলোমিটার`,
      `পতন ও মোহনা: ${river.estuary}`,
      'বাংলাদেশের প্রধান অভ্যন্তরীণ নৌপথ ও পানি প্রবাহের অন্যতম উৎস'
    ]
  };
}

