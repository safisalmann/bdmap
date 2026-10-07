import { LandmarkPOI } from '../types';
import { GROUP_1_LARGEST_SPOTS } from './landmarks/group1Largest';
import { GROUP_2_FIRSTS_SPOTS } from './landmarks/group2Firsts';
import { GROUP_3_HERITAGE_SPOTS } from './landmarks/group3Heritage';
import { GROUP_4_GEOGRAPHY_SPOTS } from './landmarks/group4Geography';
import { IMPORTANT_BRIDGES } from './bridgeData';
import { RIVER_CONFLUENCES } from './riverData';

// Specially curated landmarks with explicit categories (Mountains, Factories, Power Plants, Bridges, etc.)
export const EXTRA_NOTABLE_SPOTS: LandmarkPOI[] = [
  {
    id: 'saidpur-rail-workshop',
    spotNumber: 55,
    nameBn: 'সৈয়দপুর রেলওয়ে কারখানা',
    nameEn: 'Saidpur Railway Carriage Workshop',
    districtId: 'Nilphamari',
    districtBn: 'সৈয়দপুর, নীলফামারী',
    category: 'factory',
    badgeBn: 'দেশের একমাত্র ও বৃহত্তম রেল কারখানা (১৮৭০)',
    lat: 25.7780,
    lng: 88.8950,
    description: '১৮৭০ সালে ব্রিটিশ আসাম-বেঙ্গল রেলওয়ের সময় প্রতিষ্ঠিত বাংলাদেশের বৃহত্তম ও একমাত্র প্রধান রেল ক্যারেজ অ্যান্ড ওয়াগন মেরামত কারখানা। আয়তন প্রায় ১১০ একর।',
    keyFacts: [
      'অবস্থান: সৈয়দপুর উপজেলা, নীলফামারী জেলা',
      'রেলওয়ের ইঞ্জিন, কোচ ও মালবাহী ওয়াগন মেরামত করা হয়',
      'কারখানাটিতে ২৮টিরও বেশি পৃথক শপ/বিভাগ রয়েছে'
    ]
  },
  {
    id: 'medicine-park',
    spotNumber: 56,
    nameBn: 'ঔষধ শিল্প পার্ক (API Park)',
    nameEn: 'Active Pharmaceutical Ingredient (API) Industrial Park',
    districtId: 'Munshiganj',
    districtBn: 'বাউশিয়া, গজারিয়া, মুন্সীগঞ্জ',
    category: 'medicine_park',
    badgeBn: 'দেশের প্রথম ও একমাত্র ঔষধ কাঁচামাল পার্ক',
    lat: 23.5350,
    lng: 90.6120,
    description: 'ঔষধের কাঁচামাল উৎপাদনে স্বয়ংসম্পূর্ণতা অর্জনের লক্ষ্যে মুন্সীগঞ্জের গজারিয়ার বাউশিয়ায় ২০০ একর ভূমিতে প্রতিষ্ঠিত দেশের একমাত্র এপিআই ইন্ডাস্ট্রিয়াল পার্ক।',
    keyFacts: [
      'অবস্থান: বাউশিয়া, গজারিয়া, মুন্সীগঞ্জ',
      'কাঁচামাল বা এপিআই আমদানিনির্ভরতা হ্রাস করে স্থানীয় উৎপাদন বৃদ্ধি',
      'ঢাকা-চট্টগ্রাম মহাসড়কের পাশে অবস্থিত'
    ]
  },
  {
    id: 'kaptai-hydro',
    spotNumber: 57,
    nameBn: 'কাপ্তাই জলবিদ্যুৎ কেন্দ্র',
    nameEn: 'Kaptai Hydroelectric Power Plant',
    districtId: 'Rangamati',
    districtBn: 'কাপ্তাই, রাঙ্গামাটি',
    category: 'power_plant',
    badgeBn: 'দেশের একমাত্র জলবিদ্যুৎ কেন্দ্র (২৩০ মেগাওয়াট)',
    lat: 22.4960,
    lng: 92.2280,
    description: '১৯৬২ সালে কর্ণফুলী নদীর ওপর কাপ্তাই বাঁধ নির্মাণের মাধ্যমে প্রতিষ্ঠিত বাংলাদেশের একমাত্র জলবিদ্যুৎ কেন্দ্র।',
    keyFacts: [
      '৫টি ইউনিটে মোট উৎপাদন ক্ষমতা ২৩০ মেগাওয়াট',
      'কাপ্তাই কৃত্রিম হ্রদের পানিপ্রবাহের সাহায্যে টারবাইন পরিচালিত হয়',
      'রাঙ্গামাটি জেলার কাপ্তাইয়ে অবস্থিত'
    ]
  },
  {
    id: 'matarbari-power-plant',
    spotNumber: 58,
    nameBn: 'মাতারবাড়ি আল্ট্রা সুপারক্রিটিক্যাল বিদ্যুৎ কেন্দ্র',
    nameEn: 'Matarbari Ultra Supercritical Power Plant',
    districtId: "Cox's Bazar",
    districtBn: 'মহেশখালী, কক্সবাজার',
    category: 'power_plant',
    badgeBn: '১২০০ মেগাওয়াট আল্ট্রা সুপারক্রিটিক্যাল কেন্দ্র',
    lat: 21.7050,
    lng: 91.8750,
    description: 'জাপানের জাইকার অর্থায়নে কক্সবাজারের মহেশখালীর মাতারবাড়িতে নির্মিত দেশের সর্বাধুনিক কয়লাভিত্তিক বিদ্যুৎ কেন্দ্র ও গভীর সমুদ্র চ্যানেল।',
    keyFacts: [
      'অবস্থান: মাতারবাড়ি, মহেশখালী, কক্সবাজার',
      'ক্ষমতা: ১২০০ মেগাওয়াট (৬০০×২ মেগাওয়াট)',
      'কয়লাবাহী বড় জাহাজ ভেড়ার জন্য গভীর চ্যানেলযুক্ত'
    ]
  },
  {
    id: 'rampal-power-plant',
    spotNumber: 59,
    nameBn: 'মৈত্রী সুপার থার্মাল পাওয়ার প্রজেক্ট (রামপাল)',
    nameEn: 'Rampal Maitree Super Thermal Power Project',
    districtId: 'Bagerhat',
    districtBn: 'রামপাল, বাগেরহাট',
    category: 'power_plant',
    badgeBn: '১৩২০ মেগাওয়াট তাপবিদ্যুৎ প্রকল্প',
    lat: 22.5850,
    lng: 89.5600,
    description: 'বাগেরহাটের রামপালে পশুর নদীর তীরে বাংলাদেশ ও ভারতের যৌথ উদ্যোগে নির্মিত আল্ট্রা সুপারক্রিটিক্যাল কয়লাভিত্তিক বিদ্যুৎ কেন্দ্র।',
    keyFacts: [
      'অবস্থান: রামপাল, বাগেরহাট জেলা',
      'মোংলা বন্দর ও সুন্দরবনের নিকটবর্তী পশুর নদীর তীরে অবস্থিত',
      'মোট উৎপাদন ক্ষমতা: ১৩২০ মেগাওয়াট'
    ]
  },
  {
    id: 'saka-haphong-peak',
    spotNumber: 60,
    nameBn: 'মোদক মুয়াল / সাকা হাফং',
    nameEn: 'Saka Haphong (Mowdok Mual) Peak',
    districtId: 'Bandarban',
    districtBn: 'থানচি, বান্দরবান',
    category: 'mountain',
    badgeBn: 'প্রকৃত সর্বোচ্চ পর্বতশৃঙ্গ (৩,৪৫১ ফুট)',
    lat: 21.7864,
    lng: 92.6097,
    description: 'জিপিএস ও পর্বতারোহীদের আধুনিক পরিমাপ অনুসারে বাংলাদেশের সর্বোচ্চ শৃঙ্গ (উচ্চতা ১,০৫২ মিটার / ৩,৪৫১ ফুট)।',
    keyFacts: [
      'অবস্থান: থানচি উপজেলা, বান্দরবান (বাংলাদেশ-মিয়ানমার সীমান্ত)',
      'স্থানীয় নাম মোদক মুয়াল বা সাকা হাফং'
    ]
  },
  {
    id: 'chandranath-hill',
    spotNumber: 61,
    nameBn: 'চন্দ্রনাথ পাহাড় ও তীর্থ',
    nameEn: 'Chandranath Hill & Temple, Sitakunda',
    districtId: 'Chittagong',
    districtBn: 'সীতাকুণ্ড, চট্টগ্রাম',
    category: 'mountain',
    badgeBn: 'সুউচ্চ পাহাড়ি চূড়া (১,১৫৫ ফুট)',
    lat: 22.6520,
    lng: 91.6850,
    description: 'সীতাকুণ্ড ইকোপার্ক সংলগ্ন প্রায় ১,১৫৫ ফুট উঁচু পাহাড় চূড়ায় অবস্থিত ঐতিহাসিক চন্দ্রনাথ মন্দির।',
    keyFacts: [
      'অবস্থান: সীতাকুণ্ড, চট্টগ্রাম',
      'শিবচতুর্দশী মেলা ও প্রাকৃতিক ট্রেকিংয়ের প্রধান আকর্ষণ'
    ]
  },
  {
    id: 'garo-hills-birisiri',
    spotNumber: 62,
    nameBn: 'গারো পাহাড় ও বিরিশিরি',
    nameEn: 'Garo Hills & Birisiri, Netrokona',
    districtId: 'Netrakona',
    districtBn: 'দুর্গাপুর, নেত্রকোনা',
    category: 'mountain',
    badgeBn: 'সাদা মাটির পাহাড় ও সোমেশ্বরী নদী',
    lat: 25.1250,
    lng: 90.6650,
    description: 'মেঘালয় সীমান্ত ঘেঁষা বিজয়পুরের চিনামাটির পাহাড়, নীল পানির হ্রদ এবং বিরিশিরি ক্ষুদ্র নৃগোষ্ঠী কালচারাল একাডেমি।',
    keyFacts: [
      'অবস্থান: দুর্গাপুর, নেত্রকোনা',
      'সোমেশ্বরী নদী ও সুসং দুর্গাপুরের ঐতিহাসিক রাজবাড়ি'
    ]
  },
  {
    id: 'airport-hsia',
    spotNumber: 63,
    nameBn: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর',
    nameEn: 'Hazrat Shahjalal International Airport (DAC)',
    districtId: 'Dhaka',
    districtBn: 'কুর্মিটোলা, ঢাকা',
    category: 'port_airport',
    badgeBn: 'প্রধান আন্তর্জাতিক বিমানবন্দর (টার্মিনাল-৩)',
    lat: 23.8433,
    lng: 90.3978,
    description: 'বাংলাদেশের প্রধান আন্তর্জাতিক বিমানবন্দর। বর্তমানে দৃষ্টিনন্দন আধুনিক ৩য় টার্মিনাল নির্মাণ সম্পন্ন হয়েছে।',
    keyFacts: [
      'অবস্থান: কুর্মিটোলা, উত্তরা, ঢাকা',
      'আইএটিএ কোড: DAC',
      'দেশের সিংহভাগ আন্তর্জাতিক ফ্লাইট পরিচালনা করে'
    ]
  },
  {
    id: 'airport-osmani',
    spotNumber: 64,
    nameBn: 'ওসমানী আন্তর্জাতিক বিমানবন্দর',
    nameEn: 'Osmani International Airport (ZYL)',
    districtId: 'Sylhet',
    districtBn: 'সিলেট সদর',
    category: 'port_airport',
    badgeBn: 'সিলেটের আন্তর্জাতিক বিমানবন্দর',
    lat: 24.9632,
    lng: 91.8714,
    description: 'মুক্তিযুদ্ধকালীন প্রধান সেনাপতি এম এ জি ওসমানীর নামে নামাঙ্কিত উত্তর-পূর্বাঞ্চলের আন্তর্জাতিক প্রবেশদ্বার।',
    keyFacts: [
      'অবস্থান: সিলেট সদর',
      'যুক্তরাজ্য ও মধ্যপ্রাচ্যের সাথে সরাসরি ফ্লাইট সার্ভিস'
    ]
  },
  {
    id: 'airport-saidpur',
    spotNumber: 65,
    nameBn: 'সৈয়দপুর বিমানবন্দর',
    nameEn: 'Saidpur Airport (SPD)',
    districtId: 'Nilphamari',
    districtBn: 'সৈয়দপুর, নীলফামারী',
    category: 'port_airport',
    badgeBn: 'উত্তরবঙ্গের ব্যস্ততম অভ্যন্তরীণ বিমানবন্দর',
    lat: 25.7592,
    lng: 88.9086,
    description: 'রংপুর ও নীলফামারী অঞ্চলের যাতায়াতের প্রধান অভ্যন্তরীণ বিমানবন্দর। এটি আঞ্চলিক বিমানবন্দরে রূপান্তরের কাজ চলছে।',
    keyFacts: [
      'অবস্থান: সৈয়দপুর, নীলফামারী',
      'রংপুর বিভাগের ৮ জেলার প্রধান বিমান যোগাযোগের মাধ্যম'
    ]
  },
  {
    id: 'airport-coxs-bazar',
    spotNumber: 66,
    nameBn: 'কক্সবাজার আন্তর্জাতিক বিমানবন্দর',
    nameEn: "Cox's Bazar International Airport (CXB)",
    districtId: "Cox's Bazar",
    districtBn: 'কক্সবাজার সদর',
    category: 'port_airport',
    badgeBn: 'সমুদ্রের বুকে নির্মিত দেশের দীর্ঘতম রানওয়ে',
    lat: 21.4520,
    lng: 91.9638,
    description: 'সমুদ্রের জলসীমা ভরাট করে তৈরি করা ১০,৭০০ ফুট দীর্ঘ রানওয়ে বিশিষ্ট দেশের আধুনিকতম আন্তর্জাতিক বিমানবন্দর।',
    keyFacts: [
      'অবস্থান: কক্সবাজার সদর',
      'দেশের দীর্ঘতম রানওয়ে (১০,৭০০ ফুট)'
    ]
  },
  {
    id: 'shat-gombuj-unesco',
    spotNumber: 67,
    nameBn: 'ষাট গম্বুজ মসজিদ',
    nameEn: 'Sixty Dome Mosque, Bagerhat',
    districtId: 'Bagerhat',
    districtBn: 'বাগেরহাট সদর',
    category: 'heritage',
    badgeBn: 'ইউনেস্কো বিশ্ব ঐতিহ্য (১৯৮৫) • ৮১টি গম্বুজ',
    lat: 22.6744,
    lng: 89.7419,
    description: 'পঞ্চদশ শতাব্দীতে হযরত খান জাহান আলী (র.) কর্তৃক নির্মিত বিশ্ববিখ্যাত স্থাপত্য। এতে মোট ৮১টি গম্বুজ (ছাদে ৭৭টি ও চার কোণে ৪টি বুরুজ) এবং ৬০টি পাথরের খাম রয়েছে।',
    keyFacts: [
      'ইউনেস্কো ঘোষিত ঐতিহাসিক মসজিদের শহর বাগেরহাটের প্রধান নিদর্শন',
      'তুঘলক স্থাপত্যরীতির অনন্য স্থাপত্যকলা'
    ]
  },
  {
    id: 'mahasthangarh-pundranagar',
    spotNumber: 68,
    nameBn: 'মহাস্থানগড় (প্রাচীন পুণ্ড্রনগর)',
    nameEn: 'Mahasthangarh, Bogura',
    districtId: 'Bogra',
    districtBn: 'শিবগঞ্জ, বগুড়া',
    category: 'heritage',
    badgeBn: 'প্রাচীনতম ঐতিহাসিক নগরী (খ্রিস্টপূর্ব ৩য় শতক)',
    lat: 24.9610,
    lng: 89.3450,
    description: 'করতোয়া নদীর পশ্চিম তীরে অবস্থিত প্রাচীন বাংলার রাজধানী পুণ্ড্রনগর। মৌর্য ও গুপ্ত যুগের বহু প্রত্নতাত্ত্বিক নিদর্শন এখানে পাওয়া গেছে।',
    keyFacts: [
      'বেহুলা-লখিন্দরের বাসর ঘর (গোকুল মেথ) সংলগ্ন',
      'প্রাচীনতম ব্রাহ্মী লিপির শিলালিপি প্রাপ্তিস্থান'
    ]
  },
  {
    id: 'paharpur-somapura',
    spotNumber: 69,
    nameBn: 'পাহাড়পুর সোমপুর মহাবিহার',
    nameEn: 'Somapura Mahavihara, Paharpur',
    districtId: 'Naogaon',
    districtBn: 'বদলগাছী, নওগাঁ',
    category: 'heritage',
    badgeBn: 'ইউনেস্কো বিশ্ব ঐতিহ্য (১৯৮৫) • পাল রাজা ধর্মপাল',
    lat: 25.0315,
    lng: 88.9770,
    description: 'অষ্টম শতাব্দীতে পাল রাজা ধর্মপাল কর্তৃক নির্মিত বৌদ্ধ বিহার। এটি প্রাচীন বিশ্বের বৃহত্তম একক আবাসিক মহাবিহার ছিল।',
    keyFacts: [
      '১৭৭টি ভিক্ষুকক্ষ এবং কেন্দ্রস্থলে সুবিশাল টেরাকোটা মন্দির',
      'ইউনেস্কো স্বীকৃত সাংস্কৃতিক বিশ্ব ঐতিহ্য'
    ]
  },
  {
    id: 'kantajew-temple',
    spotNumber: 70,
    nameBn: 'কান্তজিউ মন্দির (নবরত্ন মন্দির)',
    nameEn: 'Kantajew Temple, Dinajpur',
    districtId: 'Dinajpur',
    districtBn: 'কাহারোল, দিনাজপুর',
    category: 'heritage',
    badgeBn: 'টেরাকোটা পোড়ামাটির নবরত্ন স্থাপত্য (১৭৫২)',
    lat: 25.7900,
    lng: 88.6650,
    description: 'মহারাজা প্রাণনাথ ও তার দত্তকপুত্র রামনাথ কর্তৃক ১৭৫২ সালে নির্মিত দৃষ্টিনন্দন পোড়ামাটির ফলক সমৃদ্ধ নবরত্ন মন্দির।',
    keyFacts: [
      'ঢেঁপা নদীর তীরে অবস্থিত',
      'রামায়ণ-মহাভারতের কাহিনী টেরাকোটা শিল্পে চিত্রিত'
    ]
  },
  {
    id: 'lalbagh-fort',
    spotNumber: 71,
    nameBn: 'লালবাগ কেল্লা (আওরঙ্গবাদ দুর্গ)',
    nameEn: 'Lalbagh Fort, Dhaka',
    districtId: 'Dhaka',
    districtBn: 'পুরাতন ঢাকা',
    category: 'heritage',
    badgeBn: 'মুঘল সুবাদার শায়েস্তা খাঁ ও শাহজাদা আজম (১৬৭৮)',
    lat: 23.7198,
    lng: 90.3881,
    description: '১৬৭৮ সালে মুঘল যুবরাজ আজম শাহ কর্তৃক শুরু এবং পরবর্তীতে সুবাদার শায়েস্তা খাঁ কর্তৃক নির্মিত ঐতিহাসিক মুঘল দুর্গ। পরী বিবির মাজার এখানে অবস্থিত।',
    keyFacts: [
      'দরবার হল, হাম্মামখানা ও তিন গম্বুজ বিশিষ্ট মসজিদ',
      'বুড়িগঙ্গা নদীর তীরে অবস্থিত'
    ]
  }
];

// Helper to normalize and categorize raw group spots
function normalizeSpot(spot: LandmarkPOI): LandmarkPOI {
  let updatedCategory = spot.category;

  // Mountains
  if (
    spot.id.includes('tajingdong') || 
    spot.id.includes('keokradong') || 
    spot.id.includes('saka') || 
    spot.id.includes('mountain') ||
    spot.nameBn.includes('পর্বত') ||
    spot.nameBn.includes('পাহাড়')
  ) {
    updatedCategory = 'mountain';
  }
  // Power plants
  else if (
    spot.id.includes('power-plant') ||
    spot.id.includes('rooppur') ||
    spot.id.includes('solar') ||
    spot.nameBn.includes('বিদ্যুৎ') ||
    spot.nameBn.includes('সৌরবিদ্যুৎ') ||
    spot.nameBn.includes('পারমাণবিক')
  ) {
    updatedCategory = 'power_plant';
  }
  // Factories
  else if (
    spot.id.includes('fertilizer') ||
    spot.id.includes('factory') ||
    spot.id.includes('workshop') ||
    spot.id.includes('paper-mill') ||
    spot.id.includes('cement') ||
    spot.nameBn.includes('কারখানা') ||
    spot.nameBn.includes('কাগজ কল')
  ) {
    updatedCategory = 'factory';
  }
  // Bridges
  else if (
    spot.id.includes('bridge') ||
    spot.nameBn.includes('সেতু')
  ) {
    updatedCategory = 'bridge';
  }
  // Wetlands & haors
  else if (
    spot.id.includes('haor') ||
    spot.id.includes('sundarbans') ||
    spot.id.includes('beel') ||
    spot.nameBn.includes('হাওর') ||
    spot.nameBn.includes('বিল') ||
    spot.nameBn.includes('ম্যানগ্রোভ')
  ) {
    updatedCategory = 'wetland_forest';
  }

  return {
    ...spot,
    category: updatedCategory
  };
}

// Master raw list
const RAW_SPOTS: LandmarkPOI[] = [
  ...EXTRA_NOTABLE_SPOTS,
  ...IMPORTANT_BRIDGES,
  ...RIVER_CONFLUENCES,
  ...GROUP_1_LARGEST_SPOTS.map(normalizeSpot),
  ...GROUP_2_FIRSTS_SPOTS.map(normalizeSpot),
  ...GROUP_3_HERITAGE_SPOTS.map(normalizeSpot),
  ...GROUP_4_GEOGRAPHY_SPOTS.map(normalizeSpot)
];

// Deduplicate by ID
const seenIds = new Set<string>();
export const SPECIAL_LANDMARKS: LandmarkPOI[] = [];

RAW_SPOTS.forEach(spot => {
  if (!seenIds.has(spot.id)) {
    seenIds.add(spot.id);
    SPECIAL_LANDMARKS.push(spot);
  }
});

// Helper lookups
export const LANDMARKS_BY_ID: Record<string, LandmarkPOI> = {};
SPECIAL_LANDMARKS.forEach(lm => {
  LANDMARKS_BY_ID[lm.id] = lm;
});

export const LANDMARKS_BY_GROUP = {
  1: GROUP_1_LARGEST_SPOTS,
  2: GROUP_2_FIRSTS_SPOTS,
  3: GROUP_3_HERITAGE_SPOTS,
  4: GROUP_4_GEOGRAPHY_SPOTS
};

export function getLandmarksByGroup(group: 1 | 2 | 3 | 4): LandmarkPOI[] {
  return LANDMARKS_BY_GROUP[group] || [];
}
