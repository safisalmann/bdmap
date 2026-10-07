import { DivisionId } from '../types';

export interface DivisionInfo {
  id: DivisionId;
  nameBn: string;
  nameEn: string;
  color: string;
  fillColor: string;
  borderColor: string;
  bgLight: string;
  districtsCount: number;
}

export const DIVISIONS: Record<DivisionId, DivisionInfo> = {
  dhaka: {
    id: 'dhaka',
    nameBn: 'ঢাকা বিভাগ',
    nameEn: 'Dhaka Division',
    color: '#3b82f6', // blue
    fillColor: '#60a5fa',
    borderColor: '#2563eb',
    bgLight: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    districtsCount: 13,
  },
  chattogram: {
    id: 'chattogram',
    nameBn: 'চট্টগ্রাম বিভাগ',
    nameEn: 'Chattogram Division',
    color: '#06b6d4', // cyan
    fillColor: '#22d3ee',
    borderColor: '#0891b2',
    bgLight: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    districtsCount: 11,
  },
  rajshahi: {
    id: 'rajshahi',
    nameBn: 'রাজশাহী বিভাগ',
    nameEn: 'Rajshahi Division',
    color: '#f59e0b', // amber
    fillColor: '#fbbf24',
    borderColor: '#d97706',
    bgLight: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    districtsCount: 8,
  },
  khulna: {
    id: 'khulna',
    nameBn: 'খুলনা বিভাগ',
    nameEn: 'Khulna Division',
    color: '#10b981', // emerald
    fillColor: '#34d399',
    borderColor: '#059669',
    bgLight: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    districtsCount: 10,
  },
  barishal: {
    id: 'barishal',
    nameBn: 'বরিশাল বিভাগ',
    nameEn: 'Barishal Division',
    color: '#14b8a6', // teal
    fillColor: '#2dd4bf',
    borderColor: '#0d9488',
    bgLight: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    districtsCount: 6,
  },
  sylhet: {
    id: 'sylhet',
    nameBn: 'সিলেট বিভাগ',
    nameEn: 'Sylhet Division',
    color: '#8b5cf6', // purple
    fillColor: '#a78bfa',
    borderColor: '#7c3aed',
    bgLight: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    districtsCount: 4,
  },
  rangpur: {
    id: 'rangpur',
    nameBn: 'রংপুর বিভাগ',
    nameEn: 'Rangpur Division',
    color: '#f43f5e', // rose
    fillColor: '#fb7185',
    borderColor: '#e11d48',
    bgLight: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    districtsCount: 8,
  },
  mymensingh: {
    id: 'mymensingh',
    nameBn: 'ময়মনসিংহ বিভাগ',
    nameEn: 'Mymensingh Division',
    color: '#a855f7', // violet
    fillColor: '#c084fc',
    borderColor: '#9333ea',
    bgLight: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    districtsCount: 4,
  },
};
