import { DistrictGK, DivisionId } from '../types';
import { DHAKA_DISTRICTS } from './districts/dhakaDivision';
import { CHATTOGRAM_DISTRICTS } from './districts/chattogramDivision';
import { RAJSHAHI_RANGPUR_DISTRICTS } from './districts/rajshahiRangpurDivision';
import { SOUTH_EAST_DISTRICTS } from './districts/southEastDivision';

// All 64 Districts combined
export const ALL_DISTRICTS: DistrictGK[] = [
  ...DHAKA_DISTRICTS,
  ...CHATTOGRAM_DISTRICTS,
  ...RAJSHAHI_RANGPUR_DISTRICTS,
  ...SOUTH_EAST_DISTRICTS
];

// Lookup by ADM2_EN (matches the GeoJSON property)
export const DISTRICTS_BY_ADM2: Record<string, DistrictGK> = {};
// Lookup by ID
export const DISTRICTS_BY_ID: Record<string, DistrictGK> = {};
// Lookup by Bengali name
export const DISTRICTS_BY_BN: Record<string, DistrictGK> = {};

ALL_DISTRICTS.forEach(d => {
  DISTRICTS_BY_ADM2[d.adm2En.toLowerCase()] = d;
  DISTRICTS_BY_ID[d.id.toLowerCase()] = d;
  DISTRICTS_BY_BN[d.nameBn] = d;
});

// Helper getter
export function getDistrictByAdm2(adm2Name: string): DistrictGK | undefined {
  if (!adm2Name) return undefined;
  const key = adm2Name.toLowerCase().trim();
  // Handle common spelling variations between geojson and district names
  if (key === 'brahamanbaria') return DISTRICTS_BY_ADM2['brahamanbaria'] || DISTRICTS_BY_ID['brahmanbaria'];
  if (key === 'jessore') return DISTRICTS_BY_ADM2['jessore'] || DISTRICTS_BY_ID['jashore'];
  if (key === 'maulvibazar') return DISTRICTS_BY_ADM2['maulvibazar'] || DISTRICTS_BY_ID['moulvibazar'];
  if (key === 'nawabganj') return DISTRICTS_BY_ADM2['nawabganj'] || DISTRICTS_BY_ID['chapainawabganj'];
  if (key === 'barisal') return DISTRICTS_BY_ADM2['barisal'] || DISTRICTS_BY_ID['barishal'];
  if (key === 'comilla') return DISTRICTS_BY_ADM2['comilla'] || DISTRICTS_BY_ID['cumilla'];
  if (key === 'chittagong') return DISTRICTS_BY_ADM2['chittagong'] || DISTRICTS_BY_ID['chattogram'];
  
  return DISTRICTS_BY_ADM2[key] || DISTRICTS_BY_ID[key];
}

export function getDistrictsByDivision(divisionId: DivisionId): DistrictGK[] {
  return ALL_DISTRICTS.filter(d => d.divisionId === divisionId);
}
