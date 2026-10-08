export type DivisionId = 
  | 'dhaka' 
  | 'chattogram' 
  | 'rajshahi' 
  | 'khulna' 
  | 'barishal' 
  | 'sylhet' 
  | 'rangpur' 
  | 'mymensingh';

export interface BCSQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  examTag: string; // e.g. "44th BCS", "MBBS: 2024-25", "DU: 2023-24"
}

export interface DistrictGK {
  id: string; // matches geojson ADM2_EN lowercase or slug
  adm2En: string; // exact ADM2_EN in geojson
  nameBn: string;
  nameEn: string;
  divisionId: DivisionId;
  divisionBn: string;
  divisionEn: string;
  lat: number;
  lng: number;
  areaKm2: number;
  population?: string;
  oldNames: string[]; // পূর্বনাম
  nicknames: string[]; // ভৌগোলিক উপনাম
  speciality: string; // বিখ্যাত বৈশিষ্ট্য
  agricultureImpact: {
    topCrop: string;
    description: string;
    isTopProducer?: boolean;
    giProduct?: string;
  };
  infrastructure: {
    title: string;
    details: string;
    type: 'railway' | 'bridge' | 'energy' | 'port' | 'industrial' | 'airport' | 'other';
  }[];
  heritageAndArchaeology: {
    name: string;
    periodOrSignificance: string;
    unescoYear?: number;
  }[];
  chhitmahal: {
    count: number;
    details: string;
    hasCorridor?: boolean;
  };
  wetlandsAndForests?: {
    name: string;
    type: 'haor' | 'beel' | 'forest' | 'river' | 'beach' | 'lake' | 'waterfall';
    significance: string;
  }[];
  liberationWar: {
    sector: number | string; // e.g. 1, 2, "7 ও 8"
    sectorCommander: string;
    sectorHQ: string;
    birSreshthoInfo?: {
      name: string;
      role: 'birth' | 'burial' | 'both';
      details: string;
    }[];
    events: string[];
  };
  medicalAndEducation: {
    medicalCollege?: string;
    establishedYear?: string;
    universityOrInstitute?: string;
  };
  julyMovement?: {
    martyrName?: string;
    significance?: string;
  };
  specialInformation?: string[];
  parliamentSeats?: number;
  bcsQuestions: BCSQuestion[];
}

export interface LandmarkPOI {
  id: string;
  nameBn: string;
  nameEn: string;
  districtId: string;
  districtBn: string;
  category: 
    | 'wetland_forest' 
    | 'mega_infra' 
    | 'liberation_war' 
    | 'heritage' 
    | 'port_airport' 
    | 'agriculture_park'
    | 'education_research'
    | 'border_geo'
    | 'mountain'
    | 'factory'
    | 'power_plant'
    | 'bridge'
    | 'river_confluence'
    | 'river'
    | 'medicine_park'
    | 'beach_sea';
  group?: 1 | 2 | 3 | 4;
  groupTitle?: string;
  spotNumber?: number;
  lat: number;
  lng: number;
  badgeBn: string;
  description: string;
  keyFacts: string[];
  bcsQuestion?: BCSQuestion;
}
