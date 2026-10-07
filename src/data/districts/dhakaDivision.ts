import { DistrictGK } from '../../types';

export const DHAKA_DISTRICTS: DistrictGK[] = [
  {
    id: 'dhaka',
    adm2En: 'Dhaka',
    nameBn: 'ঢাকা',
    nameEn: 'Dhaka',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.8103,
    lng: 90.4125,
    areaKm2: 1463.6,
    oldNames: ['জাহাঙ্গীরনগর (১৬১০)', 'ঢাবোকা'],
    nicknames: ['মসজিদের শহর', 'রিকশার নগরী', 'বাঙালির রাজনৈতিক কেন্দ্র'],
    speciality: 'বাংলাদেশের রাজধানী, জাতীয় সংসদ ভবন, শহীদ মিনার ও লালবাগ কেল্লা।',
    agricultureImpact: {
      topCrop: 'সবজি ও ফুল',
      description: 'বাণিজ্যিক শাকসবজি ও সাভারের গোলাপ গ্রাম খ্যাত বিরুলিয়া ফুল চাষ।',
      giProduct: 'মিরপুরের বেনারসি শাড়ি, ঐতিহ্যবাহী বাকরখানি'
    },
    infrastructure: [
      { title: 'জাতীয় সংসদ ভবন', details: 'স্থপতি লুই আই কান (উদ্বোধন ২৮ জানুয়ারি ১৯৮২, ৯টি তল, উচ্চতা ১৫৫ ফুট)', type: 'other' },
      { title: 'ঢাকা মেট্রোরেল (MRT-6)', details: 'উত্তরা থেকে মতিঝিল/কমলাপুর। ১ম নারী চালক মরিয়ম আফিজা।', type: 'railway' },
      { title: 'ঢাকা এলিভেটেড এক্সপ্রেসওয়ে', details: 'হযরত শাহজালাল বিমানবন্দর কাওলা থেকে কুতুবখালী।', type: 'bridge' },
      { title: 'কমলাপুর রেলওয়ে স্টেশন', details: 'দেশের বৃহত্তম ও কেন্দ্রীয় রেলওয়ে স্টেশন, স্থপতি বব বুই।', type: 'railway' },
      { title: 'হযরত শাহজালাল বিমানবন্দর', details: '৩য় টার্মিনালের স্থপতি রোহানি বাহারিন।', type: 'airport' }
    ],
    heritageAndArchaeology: [
      { name: 'লালবাগ দুর্গ (ঔরঙ্গবাদ দুর্গ)', periodOrSignificance: '১৬৭৮ সালে সুবেদার আজম শাহ শুরু করেন, পরী বিবির মাজার অবস্থিত।' },
      { name: 'আহসান মঞ্জিল', periodOrSignificance: 'বুড়িগঙ্গার তীরে নওয়াবদের প্রাসাদ ও জাদুঘর।' },
      { name: 'তারা মসজিদ ও হোসেনী দালান', periodOrSignificance: 'মুঘল ও ঔপনিবেশিক আমলের ঐতিহাসিক স্থাপত্য নিদর্শন।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'বুড়িগঙ্গা ও তুরাগ নদী', type: 'river', significance: 'ঢাকার প্রাণরেখা, প্রাচীন নদীপথ।' }
    ],
    liberationWar: {
      sector: '২ নং সেক্টর (ও ক্র্যাক প্লাটুন)',
      sectorCommander: 'মেজর খালেদ মোশাররফ ও মেজর এ.টি.এম হায়দার',
      sectorHQ: 'মেলাঘর, ত্রিপুরা',
      birSreshthoInfo: [
        { name: 'ফ্লাইট লেফটেন্যান্ট মতিউর রহমান', role: 'burial', details: '২০০৬ সালে করাচি থেকে দেহাবশেষ এনে মিরপুর শহীদ বুদ্ধিজীবী কবরস্থানে পুনঃসমাহিত করা হয়।' },
        { name: 'সিপাহী হামিদুর রহমান', role: 'burial', details: '২০০৭ সালে ভারতের আমবাসা থেকে এনে মিরপুর শহীদ বুদ্ধিজীবী কবরস্থানে সমাহিত করা হয়।' }
      ],
      events: [
        '২৫ মার্চ রাতে অপারেশন সার্চলাইট পরিচালিত হয় ঢাবি জগন্নাথ হল, রাজারবাগ ও পিলখানায়।',
        'ঢাকায় ক্র্যাক প্লাটুনের গেরিলা অপারেশন (হোটেল ইন্টারকন্টিনেন্টালে গ্রেনেড হামলা)।',
        '১৬ ডিসেম্বর সোহরাওয়ার্দী উদ্যানে পাক হানাদার বাহিনীর আত্মসমর্পণ।'
      ]
    },
    medicalAndEducation: {
      medicalCollege: 'ঢাকা মেডিকেল কলেজ (১৯৪৬) ও সলিমুল্লাহ মেডিকেল কলেজ (মিটফোর্ড)',
      establishedYear: '১৯৪৬',
      universityOrInstitute: 'ঢাকা বিশ্ববিদ্যালয় (১৯২১, প্রথম ভিসি স্যার পি. জে. হার্টস), বুয়েট (১৯৬২)'
    },
    julyMovement: {
      martyrName: 'মীর মাহফুজুর রহমান মুগ্ধ, ফারহান ফাইয়াজ, তাহির জামান প্রিয়',
      significance: '১৮ জুলাই উত্তরায় মীর মুগ্ধ শহীদ হন ("পানি লাগবে কারো?")। বৈষম্যবিরোধী ছাত্র আন্দোলনের মূল স্ফুলিঙ্গ ছিল ঢাকা।'
    },
    bcsQuestions: [
      {
        question: 'জাতীয় সংসদ ভবনের প্রধান স্থপতি কে?',
        options: ['লুই আই কান', 'এফ আর খান', 'হামিদুর রহমান', 'তানভীর কবির'],
        answerIndex: 0,
        explanation: 'মার্কিন স্থপতি লুই আই কান জাতীয় সংসদ ভবনের নকশা করেন। এটি ১৯৮২ সালে উদ্বোধন হয়।',
        examTag: '24th BCS, 19th BCS'
      },
      {
        question: 'ঢাকা প্রথম কবে বাংলার রাজধানী হয়েছিল?',
        options: ['১৬১০ সালে', '১২০৬ সালে', '১৭৫৭ সালে', '১৯০৫ সালে'],
        answerIndex: 0,
        explanation: 'মুঘল সুবেদার ইসলাম খান ১৬১০ সালে রাজমহল থেকে রাজধানী ঢাকায় স্থানান্তর করে নাম দেন জাহাঙ্গীরনগর।',
        examTag: '28th BCS'
      }
    ]
  },
  {
    id: 'gazipur',
    adm2En: 'Gazipur',
    nameBn: 'গাজীপুর',
    nameEn: 'Gazipur',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 24.0023,
    lng: 90.4264,
    areaKm2: 1806.4,
    oldNames: ['ভাওয়াল পরগনা'],
    nicknames: ['হাইটেক জেলা', 'গবেষণার রাজধানী'],
    speciality: 'বঙ্গবন্ধু হাইটেক সিটি, জাতীয় ফল কাঁঠালের শীর্ষ উৎপাদক, দেশের একমাত্র টাকশাল ও সমরাস্ত্র কারখানা।',
    agricultureImpact: {
      topCrop: 'কাঁঠাল',
      description: 'জাতীয় ফল কাঁঠাল উৎপাদনে গাজীপুর সারা দেশে ১ম স্থান অধিকারী।',
      isTopProducer: true
    },
    infrastructure: [
      { title: 'বঙ্গবন্ধু হাই-টেক সিটি', details: 'কালিয়াকৈর, গাজীপুর (দেশের প্রথম হাই-টেক পার্ক)।', type: 'industrial' },
      { title: 'সিকিউরিটি প্রিন্টিং প্রেস (টাকশাল)', details: 'বাংলাদেশের সব ব্যাংক নোট ও ডাকটিকিট মুদ্রণের একমাত্র প্রতিষ্ঠান।', type: 'industrial' },
      { title: 'বাংলাদেশ সমরাস্ত্র কারখানা (BOF)', details: 'গাজীপুর সেনানিবাসে অবস্থিত দেশের একমাত্র অস্ত্র কারখানা।', type: 'industrial' }
    ],
    heritageAndArchaeology: [
      { name: 'ভাওয়াল রাজবাড়ি', periodOrSignificance: 'ঐতিহাসিক ভাওয়াল সন্ন্যাসী মামলার সাথে জড়িত ঐতিহ্যবাহী রাজপ্রাসাদ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'ভাওয়াল জাতীয় উদ্যান', type: 'forest', significance: 'শালবনের সুবিশাল জাতীয় উদ্যান (১৯৭৪ সালে প্রতিষ্ঠিত)।' }
    ],
    liberationWar: {
      sector: '২ নং ও ৩ নং সেক্টর',
      sectorCommander: 'মেজর খালেদ মোশাররফ / মেজর কে এম শফিউল্লাহ',
      sectorHQ: 'মেলাঘর / হেজামারা',
      events: ['১৯ মার্চ ১৯৭১ জয়দেবপুরে পাকিস্তানি হানাদারদের বিরুদ্ধে ১ম সশস্ত্র প্রতিরোধ গড়ে ওঠে।']
    },
    medicalAndEducation: {
      medicalCollege: 'শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ (২০১৩)',
      universityOrInstitute: 'BRRI (ধান গবেষণা ইনস্টিটিউট), BARI (কৃষি গবেষণা), BSMRAU, DUET'
    },
    bcsQuestions: [
      {
        question: 'বাংলাদেশের প্রথম হাইটেক পার্ক কোথায় অবস্থিত?',
        options: ['কালিয়াকৈর, গাজীপুর', 'সাভার, ঢাকা', 'মিরসরাই, চট্টগ্রাম', 'ভালুকা, ময়মনসিংহ'],
        answerIndex: 0,
        explanation: 'গাজীপুরের কালিয়াকৈরে বঙ্গবন্ধু হাই-টেক পার্ক গড়ে তোলা হয়।',
        examTag: '30th BCS'
      },
      {
        question: '১৯৭১ সালের ১৯ মার্চ প্রথম সশস্ত্র প্রতিরোধ কোথায় হয়?',
        options: ['জয়দেবপুর, গাজীপুর', 'রাজারবাগ, ঢাকা', 'কালুরঘাট, চট্টগ্রাম', 'টাঙ্গাইল'],
        answerIndex: 0,
        explanation: 'জয়দেবপুর চৌরাস্তায় বীর জনতা ও ১ম বেঙ্গল রেজিমেন্টের সৈনিকরা পাকিস্তানি হানাদারদের রুখে দেয়।',
        examTag: '45th BCS, 41st BCS'
      }
    ]
  },
  {
    id: 'narayanganj',
    adm2En: 'Narayanganj',
    nameBn: 'নারায়ণগঞ্জ',
    nameEn: 'Narayanganj',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.6238,
    lng: 90.5000,
    areaKm2: 684.4,
    oldNames: ['সুবর্ণগ্রাম (সোনারগাঁও)'],
    nicknames: ['প্রাচ্যের ড্যান্ডি (Dundee of the East)'],
    speciality: 'সুলতানি আমলের রাজধানী সোনারগাঁও, পানাম নগর, জামদানি শাড়ি (১ম জিআই পণ্য), আদমজী পাটকল।',
    agricultureImpact: {
      topCrop: 'পাট বাণিজ্য কেন্দ্র',
      description: 'পাট বাণিজ্য ও পাটজাত পণ্যের ঐতিহাসিক কেন্দ্র।',
      giProduct: 'ঐতিহ্যবাহী জামদানি শাড়ি (বাংলাদেশের প্রথম জিআই পণ্য, ২০১৬)'
    },
    infrastructure: [
      { title: 'নারায়ণগঞ্জ নদী বন্দর', details: 'শীতলক্ষ্যা নদীর তীরে অবস্থিত দেশের প্রধান ও বৃহত্তম অভ্যন্তরীণ নদীবন্দর।', type: 'port' },
      { title: 'আদমজী ইপিজেড', details: 'সাবেক বিশ্বের বৃহত্তম আদমজী জুট মিলের জায়গায় স্থাপিত ইপিজেড।', type: 'industrial' }
    ],
    heritageAndArchaeology: [
      { name: 'সোনারগাঁও পানাম নগর', periodOrSignificance: 'ঈসা খাঁ ও সুলতানি বাংলার ঐতিহাসিক রাজধানী, বিশ্ববিখ্যাত পানাম নগর।' },
      { name: 'লোক ও কারুশিল্প জাদুঘর', periodOrSignificance: 'শিল্পাচার্য জয়নুল আবেদিন কর্তৃক ১৯৭৫ সালে সোনারগাঁওয়ে প্রতিষ্ঠিত।' },
      { name: 'সোনাকান্দা দুর্গ', periodOrSignificance: 'শীতলক্ষ্যার তীরে সুবেদার মীর জুমলা কর্তৃক নির্মিত মুঘল জলদুর্গ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'শীতলক্ষ্যা নদী', type: 'river', significance: 'শিল্প ও নৌ যোগাযোগের প্রাণপ্রবাহ।' }
    ],
    liberationWar: {
      sector: '২ নং সেক্টর',
      sectorCommander: 'মেজর খালেদ মোশাররফ',
      sectorHQ: 'মেলাঘর',
      events: ['শীতলক্ষ্যা ও মেঘনা নদী ঘিরে গেরিলা প্রতিরোধ ও অপারেশন।']
    },
    medicalAndEducation: {
      medicalCollege: 'নারায়ণগঞ্জ ৩০০ শয্যা বিশিষ্ট হাসপাতাল ও ইনস্টিটিউট'
    },
    bcsQuestions: [
      {
        question: 'বাংলাদেশের প্রথম জিআই (ভৌগোলিক নির্দেশক) পণ্য কোনটি?',
        options: ['জামদানি শাড়ি (নারায়ণগঞ্জ)', 'ইলিশ মাছ', 'চাঁপাইনবাবগঞ্জের ক্ষীরশাপাতি আম', 'দিনাজপুরের কাটারিভোগ'],
        answerIndex: 0,
        explanation: '২০১৬ সালে নারায়ণগঞ্জের জামদানি শাড়ি বাংলাদেশের প্রথম জিআই পণ্যের স্বীকৃতি পায়।',
        examTag: '37th BCS, Medical Admission'
      },
      {
        question: 'সোনারগাঁওয়ে লোক ও কারুশিল্প জাদুঘরের প্রতিষ্ঠাতা কে?',
        options: ['শিল্পাচার্য জয়নুল আবেদিন', 'পটুয়া কামরুল হাসান', 'এস এম সুলতান', 'আব্দুল করিম সাহিত্যবিশারদ'],
        answerIndex: 0,
        explanation: 'শিল্পাচার্য জয়নুল আবেদিন ১৯৭৫ সালে সোনারগাঁওয়ে লোক ও কারুশিল্প ফাউন্ডেশন ও জাদুঘর প্রতিষ্ঠা করেন।',
        examTag: '22nd BCS, 31st BCS'
      }
    ]
  },
  {
    id: 'narsingdi',
    adm2En: 'Narsingdi',
    nameBn: 'নরসিংদী',
    nameEn: 'Narsingdi',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.9322,
    lng: 90.7154,
    areaKm2: 1140.8,
    oldNames: ['নরসিংহ সিংহের জমিদারি'],
    nicknames: ['তাঁত ও টেক্সটাইল পল্লী'],
    speciality: 'উয়ারী-বটেশ্বর (২৫০০ বছরের প্রাচীন নগরী), ঘোড়াশাল-পলাশ ফার্টিলাইজার (দক্ষিণ এশিয়ার বৃহত্তম), বীরশ্রেষ্ঠ মতিউর রহমানের পৈতৃক নিবাস।',
    agricultureImpact: {
      topCrop: 'লটকন ও অমৃতসাগর কলা',
      description: 'স্বাদে অতুলনীয় শিবপুরের লটকন এবং সুমিষ্ট অমৃতসাগর কলা। লটকন বিদেশেও রপ্তানি হয়।'
    },
    infrastructure: [
      { title: 'ঘোড়াশাল-পলাশ ফার্টিলাইজার পিএলসি', details: 'দক্ষিণ এশিয়ার বৃহত্তম ইউরিয়া সার কারখানা (দৈনিক ২৮০০ মে.টন)।', type: 'industrial' },
      { title: 'ঘোড়াশাল তাপবিদ্যুৎ কেন্দ্র', details: 'গ্যাসভিত্তিক সর্ববৃহৎ সরকারি বিদ্যুৎ কেন্দ্রগুলোর একটি।', type: 'energy' },
      { title: 'বাবুরহাট (শেখেরচর)', details: 'প্রাচ্যের ম্যানচেস্টার খ্যাত দেশের বৃহত্তম পাইকারি কাপড়ের হাট।', type: 'industrial' }
    ],
    heritageAndArchaeology: [
      { name: 'উয়ারী-বটেশ্বর', periodOrSignificance: 'বেলাবোতে প্রাপ্ত প্রায় আড়াই হাজার বছরের প্রাচীন দুর্গনগরী ও প্রত্নতাত্ত্বিক নিদর্শন।' },
      { name: 'আশরাফপুর মসজিদ', periodOrSignificance: 'শিবপুরে অবস্থিত ১৫২৪ সালের ঐতিহাসিক প্রাচীন মসজিদ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '৩ নং সেক্টর',
      sectorCommander: 'মেজর কে এম শফিউল্লাহ ও মেজর এ এন এম নূরুজ্জামান',
      sectorHQ: 'হেজামারা',
      birSreshthoInfo: [
        { name: 'ফ্লাইট লেফটেন্যান্ট মতিউর রহমান', role: 'birth', details: 'পৈতৃক নিবাস রায়পুরা উপজেলার রামনগর (বর্তমান মতিউর নগর) গ্রামে।' }
      ],
      events: ['৬৯-এর গণঅভ্যুত্থানের শহীদ আসাদের বাড়ি নরসিংদীর শিবপুরে।']
    },
    medicalAndEducation: {
      medicalCollege: 'নরসিংদী মেডিকেল কলেজ (৩৭তম সরকারি মেডিকেল কলেজ)'
    },
    bcsQuestions: [
      {
        question: 'উয়ারী-বটেশ্বর প্রত্নতাত্ত্বিক স্থানটি কোন নদীর তীরে অবস্থিত?',
        options: ['কয়রা নদী', 'মেঘনা নদী', 'ব্রহ্মপুত্র', 'শীতলক্ষ্যা'],
        answerIndex: 0,
        explanation: 'নরসিংদী জেলার বেলাবো উপজেলায় পুরাতন ব্রহ্মপুত্রের শাখা কয়রা নদীর তীরে উয়ারী-বটেশ্বর অবস্থিত।',
        examTag: '41st BCS, 43rd BCS'
      }
    ]
  },
  {
    id: 'munshiganj',
    adm2En: 'Munshiganj',
    nameBn: 'মুন্সীগঞ্জ',
    nameEn: 'Munshiganj',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.5422,
    lng: 90.5305,
    areaKm2: 954.9,
    oldNames: ['বিক্রমপুর', 'ইদ্রাকপুর'],
    nicknames: ['জ্ঞানের তীর্থভূমি বিক্রমপুর'],
    speciality: 'পদ্মা সেতু (মাওয়া প্রান্ত), দেশের ১ম ঔষধ শিল্প পার্ক (এপিআই পার্ক, গজারিয়া), অতীশ দীপঙ্করের জন্মস্থান, আলু উৎপাদনে শীর্ষে।',
    agricultureImpact: {
      topCrop: 'আলু',
      description: 'দেশের অন্যতম শীর্ষ আলু উৎপাদনকারী ও রপ্তানিকারক জেলা বিক্রমপুর/মুন্সীগঞ্জ।',
      isTopProducer: true
    },
    infrastructure: [
      { title: 'পদ্মা বহুমুখী সেতু (উত্তর প্রান্ত)', details: 'মাওয়া প্রান্তে টোল প্লাজা ও সংযোগ এক্সপ্রেসওয়ে।', type: 'bridge' },
      { title: 'ঔষধ শিল্প পার্ক (API Industrial Park)', details: 'গজারিয়ার বাউশিয়ায় দেশের একমাত্র কাঁচামাল ঔষধ পার্ক।', type: 'industrial' },
      { title: 'শাহ সিমেন্ট ইন্ডাস্ট্রিজ', details: 'মুক্তারপুরে অবস্থিত দেশের সর্ববৃহৎ সিমেন্ট কারখানা।', type: 'industrial' }
    ],
    heritageAndArchaeology: [
      { name: 'ইদ্রাকপুর কেল্লা', periodOrSignificance: '১৬৬০ সালে মীর জুমলা কর্তৃক জলদস্যু দমনে নির্মিত নদী দুর্গ।' },
      { name: 'অতীশ দীপঙ্করের পণ্ডিত ভিটা', periodOrSignificance: 'বজ্রযোগিনী গ্রামে বিখ্যাত বৌদ্ধ পণ্ডিত শ্রীজ্ঞান অতীশ দীপঙ্করের জন্মভিটা।' },
      { name: 'সোনারং জোড়া মঠ', periodOrSignificance: 'টঙ্গীবাড়িতে অবস্থিত ১৮ শতকের অনুপম হিন্দু স্থাপত্য।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '২ নং সেক্টর',
      sectorCommander: 'মেজর খালেদ মোশাররফ',
      sectorHQ: 'মেলাঘর',
      events: ['পদ্মা ও মেঘনা অববাহিকায় নৌ গেরিলা অপারেশন।']
    },
    medicalAndEducation: {
      medicalCollege: 'মুন্সীগঞ্জ জেনারেল হাসপাতাল ও বিক্রমপুর মেডিকেল সেন্টার'
    },
    bcsQuestions: [
      {
        question: 'অতীশ দীপঙ্কর কোন প্রাচীন জনপদে জন্মগ্রহণ করেছিলেন?',
        options: ['বিক্রমপুর (মুন্সীগঞ্জ)', 'পুণ্ড্র (বগুড়া)', 'হরিকেল (সিলেট)', 'রাঢ়'],
        answerIndex: 0,
        explanation: 'অতীশ দীপঙ্কর বিক্রমপুরের বজ্রযোগিনী গ্রামে ৯৮২ খ্রিষ্টাব্দে জন্মগ্রহণ করেন।',
        examTag: '16th BCS, Medical Exam'
      }
    ]
  },
  {
    id: 'manikganj',
    adm2En: 'Manikganj',
    nameBn: 'মানিকগঞ্জ',
    nameEn: 'Manikganj',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.8617,
    lng: 90.0003,
    areaKm2: 1378.9,
    oldNames: ['মানিক শাহের নামানুসারে'],
    nicknames: ['হাজারী গুড়ের দেশ'],
    speciality: 'ভাষা শহীদ রফিক উদ্দিন আহমদের জন্মস্থান, হাজারী গুড় (জিআই পণ্য), আরিচা ঘাট, বালিয়াটি জমিদার বাড়ি।',
    agricultureImpact: {
      topCrop: 'হাজারী গুড় (খেজুরের গুড়)',
      description: 'হরিরামপুরের শতবর্ষী সুস্বাদু হাজারী গুড় (জিআই স্বীকৃতিপ্রাপ্ত)।',
      giProduct: 'হাজারী গুড় (৬৬তম জিআই পণ্য)'
    },
    infrastructure: [
      { title: 'পাটুরিয়া-দৌলতদিয়া ফেরি ঘাট', details: 'দক্ষিণ-পশ্চিমাঞ্চলের প্রবেশদ্বার ঐতিহাসিক নৌ ও ফেরি সংযোগ।', type: 'port' }
    ],
    heritageAndArchaeology: [
      { name: 'বালিয়াটি প্রাসাদ', periodOrSignificance: 'সাটুরিয়ায় অবস্থিত সুবিশাল ৫২ কক্ষের সুরম্য জমিদার বাড়ি।' },
      { name: 'তৈয়বপুর মসজিদ ও তেওতা জমিদার বাড়ি', periodOrSignificance: 'ঐতিহাসিক নিদর্শন।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '২ নং সেক্টর',
      sectorCommander: 'মেজর খালেদ মোশাররফ',
      sectorHQ: 'মেলাঘর',
      events: [
        'ভাষা শহীদ রফিক উদ্দিন আহমদের জন্ম সিঙ্গাইর উপজেলার পারিল গ্রামে (ভাষা আন্দোলনের ১ম শহীদ)।',
        'গোবিন্দল ও তেরশ্রী গণহত্যা ১৯৭১।'
      ]
    },
    medicalAndEducation: {
      medicalCollege: 'কর্নেল মালেক মেডিকেল কলেজ, মানিকগঞ্জ'
    },
    bcsQuestions: [
      {
        question: 'ভাষা আন্দোলনের প্রথম শহীদ রফিক উদ্দিন আহমদ কোন জেলার সন্তান?',
        options: ['মানিকগঞ্জ', 'ময়মনসিংহ', 'মুর্শিদাবাদ', 'ফেনী'],
        answerIndex: 0,
        explanation: 'শহীদ রফিক মানিকগঞ্জের সিঙ্গাইর উপজেলার পারিল গ্রামে জন্মগ্রহণ করেন।',
        examTag: '43rd BCS, DU'
      }
    ]
  },
  {
    id: 'tangail',
    adm2En: 'Tangail',
    nameBn: 'টাঙ্গাইল',
    nameEn: 'Tangail',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 24.2513,
    lng: 89.9167,
    areaKm2: 3414.3,
    oldNames: ['কাগমারী পরগনা'],
    nicknames: ['তাঁতের রাজধানী', 'চমচমের শহর'],
    speciality: 'ঐতিহ্যবাহী টাঙ্গাইল শাড়ি (জিআই পণ্য), পোড়াবাড়ির চমচম, যমুনা বহুমুখী সেতু, কাদেরিয়া বাহিনী, কাগমারী সম্মেলন (১৯৫৭)।',
    agricultureImpact: {
      topCrop: 'আনারস ও সরিষা',
      description: 'মধুপুরের পাহাড়ি লাল মাটির রসালো আনারস এবং বিস্তীর্ণ সরিষা খেত।',
      giProduct: 'টাঙ্গাইল শাড়ি, পোড়াবাড়ির চমচম'
    },
    infrastructure: [
      { title: 'বঙ্গবন্ধু যমুনা বহুমুখী সেতু (পূর্ব প্রান্ত)', details: 'যমুনা নদীর উপর ৪.৮ কিলোমিটার দৈর্ঘ্যের সেতু।', type: 'bridge' },
      { title: 'যমুনা রেল সেতু', details: 'যমুনা নদীর উপর সমান্তরাল ৪.৮ কিমি ডুয়েলগেজ ডাবল ট্র্যাক রেল সেতু।', type: 'railway' }
    ],
    heritageAndArchaeology: [
      { name: 'আতিয়া মসজিদ', periodOrSignificance: '১৬০৯ সালে নির্মিত সুলতানি-মুঘল আমলের ৪ গম্বুজ বিশিষ্ট মসজিদ (১০ টাকার নোটে মুদ্রিত ছিল)।' },
      { name: 'কাগমারী', periodOrSignificance: 'মওলানা ভাসানীর স্মৃতিধন্য, ১৯৫৭ সালের ঐতিহাসিক কাগমারী সম্মেলন।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'মধুপুর শালবন ও জাতীয় উদ্যান', type: 'forest', significance: 'প্রাচীন প্লাইস্টোসিন যুগের লাল মাটির শালবন ও গারো নৃগোষ্ঠীর আবাস।' }
    ],
    liberationWar: {
      sector: '১১ নং সেক্টর',
      sectorCommander: 'মেজর এম এ তাহের ও উইং কমান্ডার হামিদুল্লাহ',
      sectorHQ: 'মহেন্দ্রগঞ্জ',
      events: [
        'বঙ্গবীর কাদের সিদ্দিকীর নেতৃত্বে বিখ্যাত কাদেরিয়া বাহিনী প্রায় ১৭ হাজার মুক্তিযোদ্ধা নিয়ে যুদ্ধ পরিচালনা করে।',
        'সর্বকনিষ্ঠ বীর প্রতীক মো. শহীদুল ইসলাম লালু (১৩ বছর বয়সী) গোপালপুর, টাঙ্গাইলের যোদ্ধা ছিলেন।'
      ]
    },
    medicalAndEducation: {
      medicalCollege: 'শেখ হাসিনা মেডিকেল কলেজ, টাঙ্গাইল',
      universityOrInstitute: 'মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (MBSTU)'
    },
    bcsQuestions: [
      {
        question: '১৯৫৭ সালের ঐতিহাসিক কাগমারী সম্মেলন কোথায় অনুষ্ঠিত হয়?',
        options: ['টাঙ্গাইল', 'সিরাজগঞ্জ', 'ঢাকা', 'চট্টগ্রাম'],
        answerIndex: 0,
        explanation: 'মওলানা ভাসানীর উদ্যোগে টাঙ্গাইলের সন্তোষের কাগমারীতে এই যুগান্তকারী সম্মেলন অনুষ্ঠিত হয়।',
        examTag: '41st BCS, RU'
      }
    ]
  },
  {
    id: 'kishoreganj',
    adm2En: 'Kishoreganj',
    nameBn: 'কিশোরগঞ্জ',
    nameEn: 'Kishoreganj',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 24.4449,
    lng: 90.7766,
    areaKm2: 2688.6,
    oldNames: ['কিশোর প্রামাণিকের হাট'],
    nicknames: ['হাওরের প্রবেশদ্বার', 'ইতিহাস-সাহিত্যের লীলাভূমি'],
    speciality: 'ঐতিহাসিক শোলাকিয়া ঈদগাহ ময়দান, নিকলী হাওর ও অলওয়েদার রোড, চন্দ্রাবতীর শিব মন্দির (১ম বাঙালি নারী কবি)।',
    agricultureImpact: {
      topCrop: 'হাওরের বোরো ধান ও মিষ্টিপানির মাছ',
      description: 'নিকলী ও ইটনা-মিঠামইনের হাওরাঞ্চল বিশাল বোরো ধানের আধার।'
    },
    infrastructure: [
      { title: 'হাওর অলওয়েদার রোড', details: 'ইটনা-মিঠামইন-অষ্টগ্রাম ২৯.৭৩ কিমি দীর্ঘ হাওরের বিস্ময় সড়ক।', type: 'bridge' }
    ],
    heritageAndArchaeology: [
      { name: 'শোলাকিয়া ঈদগাহ', periodOrSignificance: '১৮২৮ সালে প্রতিষ্ঠিত দেশের অন্যতম বৃহত্তম ঐতিহ্যবাহী জামাত ময়দান।' },
      { name: 'জঙ্গলবাড়ি দুর্গ', periodOrSignificance: 'বারো ভূঁইয়া প্রধান ঈসা খাঁর দ্বিতীয় রাজধানী ও দুর্গ।' },
      { name: 'চন্দ্রাবতীর শিব মন্দির', periodOrSignificance: 'বাংলা সাহিত্যের প্রথম নারী কবি চন্দ্রাবতীর পূজিত প্রাচীন মন্দির।' },
      { name: 'এগারসিন্ধুর দুর্গ', periodOrSignificance: 'বেবুধ রাজার প্রতিষ্ঠিত ঐতিহাসিক দুর্গ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'নিকলী হাওর ও বড় হাওর', type: 'haor', significance: 'পর্যটনে জনপ্রিয় অপরূপ জলরাশি ও মৎস্যভাণ্ডার।' }
    ],
    liberationWar: {
      sector: '৩ নং সেক্টর',
      sectorCommander: 'মেজর কে এম শফিউল্লাহ',
      sectorHQ: 'হেজামারা',
      events: ['সৈয়দ নজরুল ইসলাম (মুজিবনগর সরকারের অস্থায়ী রাষ্ট্রপতি)-এর জন্ম কিশোরগঞ্জের যশোদালে।']
    },
    medicalAndEducation: {
      medicalCollege: 'শহীদ সৈয়দ নজরুল ইসলাম মেডিকেল কলেজ, কিশোরগঞ্জ'
    },
    bcsQuestions: [
      {
        question: 'বাংলা সাহিত্যের প্রথম বাঙালি নারী কবি কে এবং তাঁর নিবাস কোথায়?',
        options: ['চন্দ্রাবতী, কিশোরগঞ্জ', 'বেগম রোকেয়া, রংপুর', 'সুফিয়া কামাল, বরিশাল', 'স্বর্ণকুমারী দেবী'],
        answerIndex: 0,
        explanation: 'চন্দ্রাবতী ১৬শ শতকের রামায়ণ অনুবাদক কবি, কিশোরগঞ্জের পাতুয়ার গ্রামে তাঁর জন্ম।',
        examTag: '29th BCS, Medical Exam'
      }
    ]
  },
  {
    id: 'faridpur',
    adm2En: 'Faridpur',
    nameBn: 'ফরিদপুর',
    nameEn: 'Faridpur',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.6071,
    lng: 89.8429,
    areaKm2: 2072.7,
    oldNames: ['ফতেহাবাদ'],
    nicknames: ['সোনালী আঁশের রানী', 'পল্লীকবির দেশ'],
    speciality: 'পাট উৎপাদনে দেশের ১ম জেলা, পল্লীকবি জসীমউদ্দীন ও বীরশ্রেষ্ঠ মুন্সী আব্দুর রউফের জন্মভূমি, নদী গবেষণা ইনস্টিটিউট।',
    agricultureImpact: {
      topCrop: 'পাট (সোনালী আঁশ)',
      description: 'বাংলাদেশে সর্বোচ্চ পাট উৎপাদনকারী শীর্ষ জেলা ফরিদপুর।',
      isTopProducer: true,
      giProduct: 'ফরিদপুরের পাট (৬১তম জিআই পণ্য)'
    },
    infrastructure: [
      { title: 'বাংলাদেশ নদী গবেষণা ইনস্টিটিউট (RRI)', details: 'হারুকান্দি, ফরিদপুর (নদী হাইড্রোলিক্স ও পলল গবেষণাগার)।', type: 'industrial' },
      { title: 'আন্তর্জাতিক মহাকাশ মানমন্দির', details: 'ভাঙ্গা উপজেলায় কর্কটক্রান্তি ও ৯০° পূর্ব দ্রাঘিমারেখার সংযোগস্থল।', type: 'other' }
    ],
    heritageAndArchaeology: [
      { name: 'অম্বিকাপুর (পল্লীকবির বাড়ি)', periodOrSignificance: 'পল্লীকবি জসীমউদ্দীনের জন্মভিটা ও কবরস্থান (ডালিম গাছের তলায়)।' },
      { name: 'মথুরাপুর দেউল', periodOrSignificance: 'মধুখালীতে অবস্থিত ১৬ শতকের প্রাচীন টেরাকোটা সৌধ।' },
      { name: 'হাজী শরীয়তুল্লাহর স্মৃতি', periodOrSignificance: 'ফরায়েজি আন্দোলনের ঐতিহাসিক পটভূমি।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '২ নং ও ৮ নং সেক্টর',
      sectorCommander: 'মেজর খালেদ মোশাররফ / মেজর আবু ওসমান চৌধুরী',
      sectorHQ: 'মেলাঘর / কল্যাণী',
      birSreshthoInfo: [
        { name: 'ল্যান্স নায়েক মুন্সী আব্দুর রউফ', role: 'birth', details: 'মধুখালী (সাবেক বোয়ালমারী) উপজেলার সালামতপুর গ্রামে ১৯৪৩ সালে জন্ম।' }
      ],
      events: ['বীরশ্রেষ্ঠ মুন্সী আব্দুর রউফের স্মৃতি জাদুঘর ও গ্রন্থাগার সালামতপুরে অবস্থিত।']
    },
    medicalAndEducation: {
      medicalCollege: 'বঙ্গবন্ধু শেখ মুজিব মেডিকেল কলেজ, ফরিদপুর (১৯৯২)'
    },
    bcsQuestions: [
      {
        question: 'পাট উৎপাদনে বাংলাদেশের শীর্ষ জেলা কোনটি?',
        options: ['ফরিদপুর', 'ময়মনসিংহ', 'রংপুর', 'যশোর'],
        answerIndex: 0,
        explanation: 'কৃষি পরিসংখ্যান বর্ষগ্রন্থ অনুযায়ী পাট উৎপাদনে শীর্ষ জেলা ফরিদপুর।',
        examTag: '40th BCS, 11th BCS'
      },
      {
        question: 'কর্কটক্রান্তি রেখা এবং ৯০° পূর্ব দ্রাঘিমারেখা কোন স্থানে মিলিত হয়েছে?',
        options: ['ভাঙ্গা, ফরিদপুর', 'শাহবাগ, ঢাকা', 'ঈশ্বরদী, পাবনা', 'টেকনাফ'],
        answerIndex: 0,
        explanation: 'ফরিদপুরের ভাঙ্গা উপজেলায় এই দুটি ভৌগোলিক রেখা মিলিত হয়েছে, যেখানে স্পেস অবজারভেটরি নির্মিত হচ্ছে।',
        examTag: '36th BCS, Medical Exam'
      }
    ]
  },
  {
    id: 'gopalganj',
    adm2En: 'Gopalganj',
    nameBn: 'গোপালগঞ্জ',
    nameEn: 'Gopalganj',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.0051,
    lng: 89.8266,
    areaKm2: 1489.9,
    oldNames: ['মুকসুদপুর পরগনা'],
    nicknames: ['বঙ্গবন্ধুর স্মৃতিভূমি'],
    speciality: 'টুঙ্গিপাড়া, মধুমতী নদী, আকিজ জুট মিল (দেশের বৃহত্তম বেসরকারি জুট মিল)।',
    agricultureImpact: {
      topCrop: 'ধান ও মাছ',
      description: 'বিল বেষ্টিত উর্বর জমিতে বোরো ধান ও গলদা চিংড়ি চাষ।'
    },
    infrastructure: [
      { title: 'আকিজ জুট মিলস লিমিটেড', details: 'গোপালগঞ্জের মুকসুদপুরে অবস্থিত দেশের বৃহত্তম বেসরকারি জুট মিল।', type: 'industrial' }
    ],
    heritageAndArchaeology: [
      { name: 'টুঙ্গিপাড়া সমাধিসৌধ', periodOrSignificance: 'মধুমতীর তীরে বঙ্গবন্ধু শেখ মুজিবুর রহমানের জন্মস্থান ও সমাধিসৌধ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '৮ নং ও ৯ নং সেক্টর',
      sectorCommander: 'মেজর এম এ মঞ্জুর ও মেজর জলিল',
      sectorHQ: 'কল্যাণী ও হাসনাবাদ',
      events: ['কোটালীপাড়ায় হেমায়েত বাহিনীর গেরিলা যুদ্ধ (অধিনায়ক হেমায়েত উদ্দিন বীর বিক্রম)।']
    },
    medicalAndEducation: {
      medicalCollege: 'শেখ সায়েরা খাতুন মেডিকেল কলেজ, গোপালগঞ্জ (২০১১)',
      universityOrInstitute: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (BSMRSTU)'
    },
    bcsQuestions: [
      {
        question: 'হেমায়েত বাহিনী ১৯৭১ সালে কোন অঞ্চলে বীরত্বপূর্ণ যুদ্ধ পরিচালনা করে?',
        options: ['কোটালীপাড়া, গোপালগঞ্জ', 'টাঙ্গাইল', 'মাগুরা', 'মানিকগঞ্জ'],
        answerIndex: 0,
        explanation: 'হেমায়েত উদ্দিন বীর বিক্রম কোটালীপাড়ায় আঞ্চলিক হেমায়েত বাহিনী গঠন করে পাকিস্তানি বাহিনীকে পরাস্ত করেন।',
        examTag: '45th BCS'
      }
    ]
  },
  {
    id: 'madaripur',
    adm2En: 'Madaripur',
    nameBn: 'মাদারীপুর',
    nameEn: 'Madaripur',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.1641,
    lng: 90.1897,
    areaKm2: 1144.9,
    oldNames: ['বদরপুর', 'শাহ মাদার-এর নামানুসারে'],
    nicknames: ['ফরায়েজি আন্দোলনের সূতিকাগার'],
    speciality: 'হাজী শরীয়তুল্লাহর জন্মস্থান ও ফরায়েজি আন্দোলন, পদ্মা সেতু সংযোগ, আড়িয়াল খাঁ নদী।',
    agricultureImpact: {
      topCrop: 'পাট ও রসুন',
      description: 'আড়িয়াল খাঁ ও কুমার নদীর পলিবিধৌত মাটিতে উন্নত জাতের পাট ও মসলা ফসল।'
    },
    infrastructure: [
      { title: 'পদ্মা সেতু সংযোগ সড়ক (শিবচর এক্সপ্রেসওয়ে)', details: 'ঢাকা-মাওয়া-ভাঙ্গা এক্সপ্রেসওয়ের অন্যতম মূল করিডোর।', type: 'bridge' }
    ],
    heritageAndArchaeology: [
      { name: 'হাজী শরীয়তুল্লাহর মাজার', periodOrSignificance: 'শিবচর উপজেলার শামাইল গ্রামে ফরায়েজি আন্দোলনের প্রবক্তার স্মৃতি।' },
      { name: 'রাজারাম রায়ের মন্দির', periodOrSignificance: 'খালিয়া গ্রামে ১৭ শতকের টেরাকোটা মন্দির।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '৮ নং ও ৯ নং সেক্টর',
      sectorCommander: 'মেজর ওসমান চৌধুরী ও মেজর জলিল',
      sectorHQ: 'কল্যাণী',
      events: ['সম্মুখ সমরে মাদারীপুর মুক্ত হয় ১০ ডিসেম্বর ১৯৭১।']
    },
    medicalAndEducation: {
      medicalCollege: 'মাদারীপুর সদর হাসপাতাল ও প্রস্তাবিত মেডিকেল কলেজ'
    },
    bcsQuestions: [
      {
        question: 'ফরায়েজি আন্দোলনের প্রবক্তা হাজী শরীয়তুল্লাহর জন্ম কোন জেলায়?',
        options: ['মাদারীপুর', 'ফরিদপুর', 'বরিশাল', 'শরীয়তপুর'],
        answerIndex: 0,
        explanation: 'হাজী শরীয়তুল্লাহ ১৭৮১ সালে মাদারীপুরের শিবচর উপজেলার শামাইল গ্রামে জন্মগ্রহণ করেন।',
        examTag: '42nd BCS, DU'
      }
    ]
  },
  {
    id: 'rajbari',
    adm2En: 'Rajbari',
    nameBn: 'রাজবাড়ী',
    nameEn: 'Rajbari',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.7574,
    lng: 89.6445,
    areaKm2: 1118.8,
    oldNames: ['গোয়ালন্দ'],
    nicknames: ['পদ্মার প্রবেশমুখ', 'চমচমের রাজবাড়ী'],
    speciality: 'দৌলতদিয়া ঘাট, মীর মশাররফ হোসেনের স্মৃতিধন্য পদমদী, পদ্মার ইলিশ।',
    agricultureImpact: {
      topCrop: 'চমচম ও পাট',
      description: 'ক্ষীরসা চমচম ও পদ্মার চরাঞ্চলের পাট ও ধান।'
    },
    infrastructure: [
      { title: 'দৌলতদিয়া নৌ ও ফেরিঘাট', details: 'দেশের অন্যতম প্রধান নদীঘাট যা দক্ষিণবঙ্গের ১৯টি জেলার যাতায়াত সংযোগ।', type: 'port' }
    ],
    heritageAndArchaeology: [
      { name: 'মীর মশাররফ হোসেন স্মৃতি কমপ্লেক্স', periodOrSignificance: 'পদমদীতে "বিষাদ সিন্ধু" প্রণেতার সমাধিস্থল।' },
      { name: 'রাজবাড়ী রেল স্টেশন', periodOrSignificance: '১৮৬২ সালে নির্মিত অবিভক্ত বাংলার প্রাচীনতম রেলপথের অন্যতম জংশন।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    liberationWar: {
      sector: '৮ নং সেক্টর',
      sectorCommander: 'মেজর এম এ মঞ্জুর',
      sectorHQ: 'কল্যাণী',
      events: ['পদ্মার চরে পাকিস্তানি গানবোট প্রতিরোধ যুদ্ধ।']
    },
    medicalAndEducation: {
      medicalCollege: 'রাজবাড়ী সদর জেনারেল হাসপাতাল'
    },
    bcsQuestions: [
      {
        question: 'সাহিত্যিক মীর মশাররফ হোসেনের সমাধি কোথায় অবস্থিত?',
        options: ['পদমদী, রাজবাড়ী', 'শিলাইদহ, কুষ্টিয়া', 'সালামতপুর, ফরিদপুর', 'জোড়াসাঁকো'],
        answerIndex: 0,
        explanation: 'রাজবাড়ী জেলার বালিয়াকান্দি উপজেলার পদমদী গ্রামে মীর মশাররফ হোসেন সমাহিত।',
        examTag: '38th BCS, 26th BCS'
      }
    ]
  },
  {
    id: 'shariatpur',
    adm2En: 'Shariatpur',
    nameBn: 'শরীয়তপুর',
    nameEn: 'Shariatpur',
    divisionId: 'dhaka',
    divisionBn: 'ঢাকা',
    divisionEn: 'Dhaka',
    lat: 23.2423,
    lng: 90.4348,
    areaKm2: 1181.5,
    oldNames: ['হাজী শরীয়তুল্লাহর নামানুসারে (সাবেক ইদিলপুর)'],
    nicknames: ['পদ্মা সেতুর দক্ষিণ দুয়ার'],
    speciality: 'পদ্মা সেতুর জাজিরা প্রান্ত, কীর্তিনাশা নদী, ক্ষুদ্রতম পৌরসভা ভেদরগঞ্জ (আয়তনে)।',
    agricultureImpact: {
      topCrop: 'ধান ও মিষ্টি আলু',
      description: 'পদ্মার ভাঙনকবলিত পলিমাটিতে ধান, পাট ও শাকসবজি।'
    },
    infrastructure: [
      { title: 'পদ্মা সেতু (জাজিরা সংযোগ প্রান্ত)', details: 'সেতুর দক্ষিণ প্রান্ত ও সার্ভিস এরিয়া।', type: 'bridge' },
      { title: 'ভেদরগঞ্জ পৌরসভা', details: 'আয়তনের দিক থেকে বাংলাদেশের ক্ষুদ্রতম পৌরসভা।', type: 'other' }
    ],
    heritageAndArchaeology: [
      { name: 'ফতেহজংপুর দুর্গ', periodOrSignificance: 'মানসিংহের আমলে নির্মিত ঐতিহাসিক দুর্গ।' }
    ],
    chhitmahal: { count: 0, details: 'কোনো ছিটমহল নেই।' },
    wetlandsAndForests: [
      { name: 'কীর্তিনাশা নদী ও পদ্মা', type: 'river', significance: 'ভাঙনের জন্য কুখ্যাত ও বিখ্যাত নদী (নড়িয়া উপজেলা সবচেয়ে বেশি নদীভাঙন কবলিত)।' }
    ],
    liberationWar: {
      sector: '৮ নং ও ৯ নং সেক্টর',
      sectorCommander: 'মেজর এম এ মঞ্জুর / মেজর জলিল',
      sectorHQ: 'কল্যাণী',
      events: ['৭১-এ পদ্মা নদীতে পাক হানাদারদের গানবোট আক্রমণ ও গেরিলা প্রতিরোধ।']
    },
    medicalAndEducation: {
      medicalCollege: 'শরীয়তপুর সদর আধুনিক হাসপাতাল'
    },
    bcsQuestions: [
      {
        question: 'আয়তনের দিক দিয়ে বাংলাদেশের ক্ষুদ্রতম পৌরসভা কোনটি?',
        options: ['ভেদরগঞ্জ (শরীয়তপুর)', 'কোটালীপাড়া (গোপালগঞ্জ)', 'হিলি (দিনাজপুর)', 'বেনাপোল'],
        answerIndex: 0,
        explanation: 'আয়তনের দিক থেকে বাংলাদেশের সবচেয়ে ছোট পৌরসভা হলো শরীয়তপুর জেলার ভেদরগঞ্জ।',
        examTag: '37th BCS, Medical Exam'
      }
    ]
  }
];
