export type ProgramLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Program {
  id: string;
  title: string;
  category: 'Strength' | 'Weight' | 'Cardio' | 'Muscle' | 'Weight Management' | 'Functional' | 'Personal' | 'Group';
  tagline: string;
  description: string;
  fullDescription: string;
  level: ProgramLevel;
  durationWeeks: number;
  sessionDurationMins: number;
  caloriesBurnEstimate: string;
  trainerName: string;
  trainerRole: string;
  image: string;
  benefits: string[];
  equipment: string[];
  scheduleSummary: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  certifications: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  hourlyRate: number;
  instagram: string;
  availableDays: string[];
  clientCount: number;
}

export interface MembershipPlan {
  id: string;
  name: 'Basic' | 'Premium' | 'Pro';
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  features: string[];
  nonIncludedFeatures?: string[];
  trainingAccess: string;
  personalTrainingSessions: string;
  groupClassesAccess: string;
  equipmentAccess: string;
  color: string;
}

export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface ClassScheduleItem {
  id: string;
  title: string;
  category: 'Strength' | 'HIIT' | 'Cardio' | 'Functional' | 'Yoga' | 'Boxing' | 'Cycling';
  trainerName: string;
  trainerImage: string;
  day: DayOfWeek;
  startTime: string;
  endTime: string;
  room: string;
  maxSeats: number;
  bookedSeats: number;
  intensity: 'Low' | 'Medium' | 'High' | 'Extreme';
  calorieBurn: string;
}

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  type: 'class' | 'trainer' | 'free_pass';
  itemId: string;
  itemTitle: string;
  trainerName?: string;
  day?: string;
  date: string;
  time: string;
  room?: string;
  status: 'confirmed' | 'cancelled' | 'attended';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'workouts' | 'equipment' | 'sessions' | 'classes' | 'environment';
  image: string;
  description: string;
  aspect?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  image: string;
  programTaken: string;
  achievement: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'unread' | 'read' | 'replied';
  replyNotes?: string;
}

export interface GymInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  cityStateZip: string;
  hoursWeekday: string;
  hoursSaturday: string;
  hoursSunday: string;
  instagram: string;
  facebook: string;
  youtube: string;
  mapsEmbedUrl: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'admin';
  phone: string;
  avatar: string;
  membershipPlanId: string | null;
  membershipPlanName: string | null;
  membershipStatus: 'active' | 'inactive' | 'expired';
  membershipRenewsAt: string | null;
  memberSince: string;
  qrCode: string;
  fitnessGoal: string;
  heightCm?: number;
  weightKg?: number;
  calculatedBmi?: number;
  bmiCategory?: string;
}
