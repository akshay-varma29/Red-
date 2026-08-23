import {
  Program,
  Trainer,
  MembershipPlan,
  ClassScheduleItem,
  GalleryItem,
  Testimonial,
  ContactMessage,
  GymInfo,
  User,
  Booking
} from '../types';

export const INITIAL_GYM_INFO: GymInfo = {
  name: 'Star Fitness Studio',
  tagline: 'Build Strength. Build Confidence. Build Your Best Self.',
  phone: '+91 98765 43210',
  email: 'info@starfitnessstudio.com',
  address: 'Plot 42, High-Tech City Road, Cyber Hills',
  cityStateZip: 'Hyderabad, Telangana 500081',
  hoursWeekday: '05:00 AM - 11:00 PM (24/7 Keycard Access for Pro Members)',
  hoursSaturday: '06:00 AM - 09:00 PM',
  hoursSunday: '07:00 AM - 08:00 PM',
  instagram: 'instagram.com/starfitnessstudio',
  facebook: 'facebook.com/starfitnessstudio',
  youtube: 'youtube.com/@starfitnessstudio',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4022830825316!2d78.37256637516616!3d17.440467883457034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688ebb557861c!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const INITIAL_PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    title: 'Strength & Powerlifting',
    category: 'Strength',
    tagline: 'Master the Big 3 compound lifts and build unshakeable raw power.',
    description: 'A scientifically structured progressive overload program focused on squat, bench press, and deadlift execution with Olympic-grade bars.',
    fullDescription: 'Our Strength & Powerlifting program is crafted for lifters who want measurable neuromuscular adaptations, unbreakable core stability, and formidable force production. Each cycle incorporates periodized volume waves, RPE targeting, and biomechanical velocity tracking to shatter personal records safely.',
    level: 'Intermediate',
    durationWeeks: 12,
    sessionDurationMins: 75,
    caloriesBurnEstimate: '550 - 750 kcal',
    trainerName: 'Marcus Vance',
    trainerRole: 'Head Strength Coach & CSCS',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Significant increase in maximum 1RM strength',
      'Dense skeletal muscle hypertrophy & bone density',
      'Advanced barbell trajectory and technique refinement',
      'Custom deload and injury prevention protocols'
    ],
    equipment: ['Eleiko Competition Plates', 'Texas Power Bars', 'Heavy-Duty Power Racks', 'Chalk Stations'],
    scheduleSummary: 'Mon, Wed, Fri • 6:30 AM & 5:30 PM'
  },
  {
    id: 'prog-2',
    title: 'Precision Weight Training',
    category: 'Weight',
    tagline: 'Isolate muscle groups with biomechanically calibrated resistance.',
    description: 'Targeted resistance training utilizing prime machines, free weights, and cable arrays for symmetric muscle development and joint longevity.',
    fullDescription: 'Precision Weight Training blends the physics of resistance curves with targeted mind-muscle connection. Designed to eliminate sticking points and protect tendons, this program utilizes pin-loaded and plate-loaded Arsenal & Prime fitness equipment to stimulate every fiber.',
    level: 'All Levels',
    durationWeeks: 8,
    sessionDurationMins: 60,
    caloriesBurnEstimate: '450 - 600 kcal',
    trainerName: 'Elena Rostova',
    trainerRole: 'Body Composition Specialist',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Symmetric muscle hypertrophy without spinal compression',
      'Enhanced joint stability and tendon resilience',
      'Optimized time-under-tension protocols',
      'Detailed workout logging and progress metrics'
    ],
    equipment: ['Prime Cable Arrays', 'Arsenal Incline Machines', 'Dumbbells 5-150 lbs', 'Adjustable Benches'],
    scheduleSummary: 'Tue, Thu, Sat • 8:00 AM & 6:00 PM'
  },
  {
    id: 'prog-3',
    title: 'High-Octane Cardio Blast',
    category: 'Cardio',
    tagline: 'Elevate VO2 max and torch calories with high-velocity interval circuits.',
    description: 'Intense metabolic conditioning combining curved non-motorized treadmills, Concept2 rowers, SkiErgs, and plyometrics.',
    fullDescription: 'Cardio Blast pushes your cardiovascular threshold to elite athletic standards. Through monitored heart rate zones (using live overhead telemetry), you will cycle through anaerobic bursts and active recovery to boost stamina, athletic endurance, and post-workout EPOC calorie burn.',
    level: 'Beginner',
    durationWeeks: 6,
    sessionDurationMins: 45,
    caloriesBurnEstimate: '650 - 900 kcal',
    trainerName: 'Maya Patel',
    trainerRole: 'Master Conditioning Coach',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Rapid cardiovascular endurance & resting heart rate reduction',
      'Accelerated subcutaneous fat oxidation',
      'Enhanced lactate clearance during high workloads',
      'Real-time heart rate zone telemetry feedback'
    ],
    equipment: ['Woodway Curve Treadmills', 'Concept2 RowErg & SkiErg', 'Assault AirBikes', 'Agility Hurdles'],
    scheduleSummary: 'Mon through Fri • 7:00 AM, 12:00 PM & 6:30 PM'
  },
  {
    id: 'prog-4',
    title: 'Hypertrophy Muscle Building',
    category: 'Muscle',
    tagline: 'The ultimate aesthetic physique blueprint backed by exercise science.',
    description: 'Engineered for maximum lean muscle growth through mechanical tension, metabolic stress, and targeted muscle protein synthesis stimulation.',
    fullDescription: 'Transform your physique with our evidence-based hypertrophy curriculum. We break down the body into push, pull, and leg splits with specific focus on volume markers, angle variety, and eccentric tempo controls that stimulate maximal hypertrophy while avoiding central nervous system burnout.',
    level: 'Intermediate',
    durationWeeks: 16,
    sessionDurationMins: 70,
    caloriesBurnEstimate: '500 - 700 kcal',
    trainerName: 'Marcus Vance',
    trainerRole: 'Head Strength Coach & CSCS',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Substantial lean muscle tissue gain and muscle density',
      'Detailed nutrition and macronutrient timing guidance',
      'Individualized biomechanical stance adjustments',
      'Dedicated warm-up and myofascial mobility routines'
    ],
    equipment: ['Hack Squats & Pendulum Squats', 'Preacher Curls', 'Seated Row Stations', 'EZ-Curl Bars'],
    scheduleSummary: 'Mon, Tue, Thu, Fri • 9:00 AM & 7:00 PM'
  },
  {
    id: 'prog-5',
    title: 'Weight Management & Shred',
    category: 'Weight Management',
    tagline: 'Sustainable fat loss and metabolic reset with full nutritional support.',
    description: 'A holistic combination of resistance training, metabolic circuits, habit coaching, and body composition InBody 770 scanning.',
    fullDescription: 'Ditch crash diets and unsustainable routines. Our Weight Management track delivers sustainable body recomposition by combining lean-mass-preserving resistance sessions with thermogenic circuits and weekly certified dietitian consultations.',
    level: 'All Levels',
    durationWeeks: 10,
    sessionDurationMins: 50,
    caloriesBurnEstimate: '500 - 650 kcal',
    trainerName: 'Elena Rostova',
    trainerRole: 'Body Composition Specialist',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Bi-weekly InBody 770 body fat & visceral fat scans',
      'Personalized macro blueprint and meal prep guide',
      'Sustainable metabolic rate acceleration',
      'Accountability check-ins and habit tracking portal'
    ],
    equipment: ['Kettlebells 8-32kg', 'Battle Ropes', 'Slam Balls', 'TRX Suspension Trainers'],
    scheduleSummary: 'Mon, Wed, Fri • 8:30 AM & 5:00 PM'
  },
  {
    id: 'prog-6',
    title: 'Functional Cross-Training',
    category: 'Functional',
    tagline: 'Athletic agility, explosive power, and real-world movement mastery.',
    description: 'Dynamic multi-planar training featuring kettlebell complexes, sled pushes, box jumps, and rotational power movements.',
    fullDescription: 'Functional training prepares you for peak performance in sport and everyday life. By training movement patterns rather than isolated muscles (squat, hinge, lunge, push, pull, carry, rotate), you build an injury-resistant, agile, and spring-loaded body.',
    level: 'Advanced',
    durationWeeks: 8,
    sessionDurationMins: 60,
    caloriesBurnEstimate: '600 - 850 kcal',
    trainerName: 'David Kim',
    trainerRole: 'Functional Movement & Mobility Specialist',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Explosive rotational power and deceleration control',
      'Greatly improved hip, thoracic spine, and ankle mobility',
      'Enhanced spatial awareness and kinetic chain efficiency',
      'Turf track conditioning with heavy prowler sleds'
    ],
    equipment: ['30-meter Sprint Turf', 'Prowler Sleds', 'Rogue Plyo Boxes', 'Gymnastic Rings'],
    scheduleSummary: 'Tue, Thu, Sat • 7:00 AM & 6:30 PM'
  },
  {
    id: 'prog-7',
    title: '1-on-1 Elite Personal Training',
    category: 'Personal',
    tagline: 'Completely bespoke private coaching tailored to your exact DNA and goals.',
    description: 'Private 60-minute sessions with a dedicated Master Trainer, biomechanical movement screens, and tailored programming.',
    fullDescription: 'The pinnacle of personalized fitness. Your coach conducts comprehensive movement screens, VO2 max testing, posture diagnostics, and designs an exclusive training, recovery, and nutritional regimen updated weekly based on your physiological response.',
    level: 'All Levels',
    durationWeeks: 12,
    sessionDurationMins: 60,
    caloriesBurnEstimate: '500 - 800 kcal',
    trainerName: 'Marcus Vance & Team',
    trainerRole: 'Master Coaches',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      '100% customized private coaching and technique scrutiny',
      'Direct app & chat access to your master coach',
      'Comprehensive postural and joint screening',
      'Priority scheduling in private training bays'
    ],
    equipment: ['Private Coaching Bay', 'Full Gym Floor Access', 'Biofeedback Telemetry'],
    scheduleSummary: 'Flexible Booking 7 Days a Week • 5:00 AM - 9:00 PM'
  },
  {
    id: 'prog-8',
    title: 'High-Energy Group Fitness',
    category: 'Group',
    tagline: 'Electric beats, unmatched community camaraderie, and sweat-drenched energy.',
    description: 'Immersive group workouts with synchronized club lighting, pumping DJ mixes, and motivating team challenges.',
    fullDescription: 'Feed off the electric energy of our signature studio classes. Led by top-tier fitness instructors with concert-grade sound systems and reactive LED lighting, these classes will push your limits while having the most fun you have ever had working out.',
    level: 'All Levels',
    durationWeeks: 4,
    sessionDurationMins: 55,
    caloriesBurnEstimate: '550 - 800 kcal',
    trainerName: 'Maya Patel',
    trainerRole: 'Master Conditioning Coach',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop',
    benefits: [
      'Incredible community camaraderie and team motivation',
      'Concert-grade acoustics and immersive lighting design',
      'Scalable exercise modifications for every fitness tier',
      'Weekly themed challenges and social mixer workouts'
    ],
    equipment: ['Studio Dumbbells', 'Step Benches', 'Resistance Bands', 'Bodyweight Systems'],
    scheduleSummary: 'Daily Classes • Morning, Noon & Evening Slots'
  }
];

export const INITIAL_TRAINERS: Trainer[] = [
  {
    id: 'tr-1',
    name: 'Marcus Vance',
    specialization: 'Strength & Conditioning, Olympic Powerlifting',
    experience: '11+ Years Experience',
    bio: 'Former collegiate athlete and CSCS certified master coach who has trained national level powerlifters and everyday athletes seeking peak physical power and posture.',
    certifications: ['NSCA-CSCS', 'USA Weightlifting Level 2', 'Precision Nutrition L1', 'FMS Certified'],
    rating: 4.9,
    reviewsCount: 148,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    hourlyRate: 2499,
    instagram: '@marcus_ironvance',
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    clientCount: 42
  },
  {
    id: 'tr-2',
    name: 'Elena Rostova',
    specialization: 'Body Composition, Hypertrophy & Nutrition',
    experience: '8+ Years Experience',
    bio: 'Ex-gymnast and certified physique specialist specializing in scientific hypertrophy, metabolic sculpting, and sustainable nutritional transformation without starvation diets.',
    certifications: ['NASM-CPT', 'ISSA Master Trainer', 'CISSN Sports Nutrition', 'PN Level 2'],
    rating: 5.0,
    reviewsCount: 192,
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    hourlyRate: 2199,
    instagram: '@elena_fitscience',
    availableDays: ['Tuesday', 'Thursday', 'Friday', 'Sunday'],
    clientCount: 56
  },
  {
    id: 'tr-3',
    name: 'David Kim',
    specialization: 'Functional Movement, Mobility & Injury Rehab',
    experience: '9+ Years Experience',
    bio: 'Kinesiology graduate dedicated to bulletproofing joints, correcting muscular imbalances, and building athletic resilience that carries over to every sport.',
    certifications: ['BS Kinesiology', 'ACE-CPT', 'FRC Mobility Specialist', 'TRX Master Instructor'],
    rating: 4.9,
    reviewsCount: 114,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    hourlyRate: 1999,
    instagram: '@davidkim_mobility',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
    clientCount: 38
  },
  {
    id: 'tr-4',
    name: 'Maya Patel',
    specialization: 'Cardio Blast, Boxing Conditioning & HIIT',
    experience: '7+ Years Experience',
    bio: 'Golden Gloves finalist and certified group fitness dynamo known for electrifying class energy, explosive boxing drills, and contagious positive motivation.',
    certifications: ['USA Boxing Coach', 'AFAA Group Fitness', 'Schwinn Spin Certified', 'NASM-PES'],
    rating: 5.0,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    hourlyRate: 1999,
    instagram: '@mayapatel_punch',
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    clientCount: 65
  }
];

export const INITIAL_MEMBERSHIPS: MembershipPlan[] = [
  {
    id: 'plan-basic',
    name: 'Basic',
    tagline: 'Ideal for independent lifters seeking top-tier gym equipment and free weights.',
    priceMonthly: 1999,
    priceAnnual: 19990,
    popular: false,
    color: 'border-neutral-800 hover:border-neutral-700',
    trainingAccess: 'Standard Gym Floor & Cardio Zone access during staffed hours (5AM-11PM)',
    personalTrainingSessions: '1 Complimentary 45-min Fitness Assessment & Intro PT Session',
    groupClassesAccess: '2 Group Studio Classes per month included',
    equipmentAccess: 'Full access to Arsenal, Prime, Eleiko Barbells, & Cardio Deck',
    features: [
      'Full Gym Floor & Free Weights Access',
      'Cardio & Functional Turf Access',
      'Modern Locker Rooms & Rain Showers',
      'Star Studio Mobile App Member Portal',
      'Free High-Speed Wi-Fi & Water Refill Stations',
      '2 Guest Passes per calendar year'
    ],
    nonIncludedFeatures: [
      '24/7 Keycard Midnight Access',
      'Unlimited Group Fitness Classes',
      'Infrared Sauna & Cryo Lounge Access',
      'Monthly InBody 770 Body Scans'
    ]
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    tagline: 'Our most popular all-access pass with unlimited classes and recovery perks.',
    priceMonthly: 3999,
    priceAnnual: 39990,
    popular: true,
    color: 'border-[#CCFF00] shadow-[#CCFF00]/10 shadow-2xl ring-1 ring-[#CCFF00]',
    trainingAccess: 'Full 24/7 Unlimited Gym Floor, Studio, and Recovery Access',
    personalTrainingSessions: '2 One-on-One PT Sessions per month included with a Master Coach',
    groupClassesAccess: 'Unlimited Group Fitness, HIIT, Yoga, Boxing & Spin Classes',
    equipmentAccess: 'Full Access to All Equipment, Olympic Platforms & Recovery Lounge',
    features: [
      '24/7 Keycard Biometric Gym Access',
      'Unlimited Group Fitness & HIIT Classes',
      '2 Private Personal Training Sessions / Month',
      'Unlimited Infrared Sauna & Cold Plunge Lounge',
      'Bi-Weekly InBody 770 Composition Scans',
      'Star Nutrition Blueprint & Macro Calculator',
      'Permanent Locker Reservation & Towel Service',
      '6 Complimentary Guest Passes per year'
    ]
  },
  {
    id: 'plan-pro',
    name: 'Pro',
    tagline: 'The ultimate VIP tier with weekly personal coaching and elite wellness amenities.',
    priceMonthly: 6999,
    priceAnnual: 69990,
    popular: false,
    color: 'border-neutral-800 hover:border-neutral-700',
    trainingAccess: 'VIP Priority All-Access 24/7 + Private Coaching Bays',
    personalTrainingSessions: '4 Private 1-on-1 PT Sessions per month + Weekly Macro Adjustments',
    groupClassesAccess: 'Unlimited VIP Group Classes with Priority Spot Reservation',
    equipmentAccess: 'Unrestricted Access + Private Olympic Bay & Hyperbaric Recovery',
    features: [
      'Everything in Premium, plus VIP Privileges',
      '4 Private 1-on-1 Personal Training Sessions / Month',
      'Weekly 1-on-1 Dietitian & Macro Coaching',
      'Priority VIP Class Spot & Equipment Booking',
      'Unlimited Cryotherapy & Infrared Sauna Suites',
      'Free Daily Post-Workout Protein Shake at our Fuel Bar',
      'Exclusive Merch Pack (Gym Duffle, Shaker, Tank & Straps)',
      'Unlimited Guest Passes (1 per visit)'
    ]
  }
];

export const INITIAL_SCHEDULE: ClassScheduleItem[] = [
  // Monday
  {
    id: 'sched-1',
    title: 'Morning Iron Surge',
    category: 'Strength',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    day: 'Monday',
    startTime: '06:30 AM',
    endTime: '07:30 AM',
    room: 'Main Strength Bay A',
    maxSeats: 16,
    bookedSeats: 12,
    intensity: 'High',
    calorieBurn: '550 kcal'
  },
  {
    id: 'sched-2',
    title: 'Metabolic HIIT Ignition',
    category: 'HIIT',
    trainerName: 'Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    day: 'Monday',
    startTime: '08:00 AM',
    endTime: '08:45 AM',
    room: 'Studio 1 (Lighting Array)',
    maxSeats: 22,
    bookedSeats: 18,
    intensity: 'Extreme',
    calorieBurn: '720 kcal'
  },
  {
    id: 'sched-3',
    title: 'Functional Turf Warriors',
    category: 'Functional',
    trainerName: 'David Kim',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    day: 'Monday',
    startTime: '05:30 PM',
    endTime: '06:30 PM',
    room: 'Athletic Turf Track',
    maxSeats: 18,
    bookedSeats: 14,
    intensity: 'High',
    calorieBurn: '600 kcal'
  },
  {
    id: 'sched-4',
    title: 'Hypertrophy Glute & Core Lab',
    category: 'Strength',
    trainerName: 'Elena Rostova',
    trainerImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    day: 'Monday',
    startTime: '06:45 PM',
    endTime: '07:45 PM',
    room: 'Studio 2',
    maxSeats: 20,
    bookedSeats: 19,
    intensity: 'Medium',
    calorieBurn: '480 kcal'
  },
  // Tuesday
  {
    id: 'sched-5',
    title: 'Rhythm Boxing Knockout',
    category: 'Boxing',
    trainerName: 'Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    day: 'Tuesday',
    startTime: '07:00 AM',
    endTime: '07:50 AM',
    room: 'Combat Studio',
    maxSeats: 16,
    bookedSeats: 11,
    intensity: 'Extreme',
    calorieBurn: '680 kcal'
  },
  {
    id: 'sched-6',
    title: 'Upper Body Hypertrophy Blitz',
    category: 'Strength',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    day: 'Tuesday',
    startTime: '12:00 PM',
    endTime: '01:00 PM',
    room: 'Main Strength Bay B',
    maxSeats: 14,
    bookedSeats: 9,
    intensity: 'High',
    calorieBurn: '500 kcal'
  },
  {
    id: 'sched-7',
    title: 'Athletic Spine & Hip Mobility',
    category: 'Yoga',
    trainerName: 'David Kim',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    day: 'Tuesday',
    startTime: '06:00 PM',
    endTime: '07:00 PM',
    room: 'Mind & Body Studio',
    maxSeats: 25,
    bookedSeats: 15,
    intensity: 'Low',
    calorieBurn: '250 kcal'
  },
  // Wednesday
  {
    id: 'sched-8',
    title: 'Speed & Agility Prowler Sprint',
    category: 'Functional',
    trainerName: 'David Kim',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    day: 'Wednesday',
    startTime: '06:30 AM',
    endTime: '07:30 AM',
    room: 'Athletic Turf Track',
    maxSeats: 16,
    bookedSeats: 13,
    intensity: 'High',
    calorieBurn: '640 kcal'
  },
  {
    id: 'sched-9',
    title: 'Olympic Clean & Snatch Clinic',
    category: 'Strength',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    day: 'Wednesday',
    startTime: '05:30 PM',
    endTime: '06:45 PM',
    room: 'Olympic Lifting Platforms',
    maxSeats: 12,
    bookedSeats: 10,
    intensity: 'Extreme',
    calorieBurn: '580 kcal'
  },
  {
    id: 'sched-10',
    title: 'Cadence RPM Spin Inferno',
    category: 'Cycling',
    trainerName: 'Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    day: 'Wednesday',
    startTime: '07:00 PM',
    endTime: '07:50 PM',
    room: 'Spin Theater (Dolby Audio)',
    maxSeats: 24,
    bookedSeats: 21,
    intensity: 'Extreme',
    calorieBurn: '750 kcal'
  },
  // Thursday
  {
    id: 'sched-11',
    title: 'Core Architecture & Pilates Flow',
    category: 'Yoga',
    trainerName: 'Elena Rostova',
    trainerImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    day: 'Thursday',
    startTime: '07:00 AM',
    endTime: '08:00 AM',
    room: 'Studio 2',
    maxSeats: 20,
    bookedSeats: 16,
    intensity: 'Medium',
    calorieBurn: '320 kcal'
  },
  {
    id: 'sched-12',
    title: 'Heavy Bag Tactical Boxing',
    category: 'Boxing',
    trainerName: 'Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    day: 'Thursday',
    startTime: '06:00 PM',
    endTime: '07:00 PM',
    room: 'Combat Studio',
    maxSeats: 16,
    bookedSeats: 15,
    intensity: 'High',
    calorieBurn: '660 kcal'
  },
  // Friday
  {
    id: 'sched-13',
    title: 'Friday Full-Body Shred & Tone',
    category: 'HIIT',
    trainerName: 'Elena Rostova',
    trainerImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    day: 'Friday',
    startTime: '06:30 AM',
    endTime: '07:30 AM',
    room: 'Studio 1',
    maxSeats: 22,
    bookedSeats: 17,
    intensity: 'High',
    calorieBurn: '620 kcal'
  },
  {
    id: 'sched-14',
    title: 'Barbell Club & Deadlift Friday',
    category: 'Strength',
    trainerName: 'Marcus Vance',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    day: 'Friday',
    startTime: '05:30 PM',
    endTime: '07:00 PM',
    room: 'Main Strength Bay A',
    maxSeats: 16,
    bookedSeats: 14,
    intensity: 'Extreme',
    calorieBurn: '650 kcal'
  },
  // Saturday
  {
    id: 'sched-15',
    title: 'Weekend Warrior Team Challenge',
    category: 'Functional',
    trainerName: 'David Kim & Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    day: 'Saturday',
    startTime: '09:00 AM',
    endTime: '10:15 AM',
    room: 'Turf & Main Floor Combine',
    maxSeats: 30,
    bookedSeats: 27,
    intensity: 'Extreme',
    calorieBurn: '800 kcal'
  },
  {
    id: 'sched-16',
    title: 'Deep Tissue Release & Sound Bath',
    category: 'Yoga',
    trainerName: 'Elena Rostova',
    trainerImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    day: 'Saturday',
    startTime: '11:00 AM',
    endTime: '12:00 PM',
    room: 'Mind & Body Studio',
    maxSeats: 25,
    bookedSeats: 22,
    intensity: 'Low',
    calorieBurn: '180 kcal'
  },
  // Sunday
  {
    id: 'sched-17',
    title: 'Sunday Engine Rebuild (Zone 2 Cardio)',
    category: 'Cardio',
    trainerName: 'Maya Patel',
    trainerImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop',
    day: 'Sunday',
    startTime: '09:30 AM',
    endTime: '10:30 AM',
    room: 'Cardio Deck & SkiErg Zone',
    maxSeats: 18,
    bookedSeats: 12,
    intensity: 'Medium',
    calorieBurn: '520 kcal'
  },
  {
    id: 'sched-18',
    title: 'Restorative Mobility & Sauna Prep',
    category: 'Yoga',
    trainerName: 'David Kim',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    day: 'Sunday',
    startTime: '04:00 PM',
    endTime: '05:00 PM',
    room: 'Mind & Body Studio',
    maxSeats: 20,
    bookedSeats: 14,
    intensity: 'Low',
    calorieBurn: '200 kcal'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Olympic Free Weight Compound Arena',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    description: 'Eleiko certified calibrated discs, custom power cages, and deadlift platforms with vibration dampening.'
  },
  {
    id: 'gal-2',
    title: 'High-Velocity Sled & Turf Conditioning',
    category: 'workouts',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Members pushing heavy prowler sleds across our 30-meter high-density athletic sprint track.'
  },
  {
    id: 'gal-3',
    title: 'Prime & Arsenal Biomechanical Machinery',
    category: 'equipment',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    description: 'Precision plate-loaded and selectorized resistance equipment engineered to match human strength curves.'
  },
  {
    id: 'gal-4',
    title: '1-on-1 Master Trainer Coaching',
    category: 'sessions',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    description: 'Personalized movement assessment and form correction in our dedicated private coaching quarters.'
  },
  {
    id: 'gal-5',
    title: 'Immersive Studio HIIT & Cardio Experience',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
    description: 'Concert-grade acoustics, synchronized dynamic lighting, and heart-rate telemetry tracking.'
  },
  {
    id: 'gal-6',
    title: 'Recovery Lounge & Infrared Cedar Sauna',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    description: 'Full-spectrum infrared heat, cold plunge baths, and relaxation zone for accelerated post-workout recovery.'
  },
  {
    id: 'gal-7',
    title: 'Combat Boxing & Heavy Bag Studio',
    category: 'classes',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop',
    description: 'Aqua bags, leather heavy bags, speed balls, and sparring ring for functional fight conditioning.'
  },
  {
    id: 'gal-8',
    title: 'Luxury Locker Rooms & Grooming Suites',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop',
    description: 'Private rain showers, organic botanical grooming products, digital keypad lockers, and fresh towel service.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alexander Reed',
    role: 'Tech Executive & Marathoner',
    rating: 5,
    review: 'Star Fitness Studio is on a completely different planet compared to ordinary commercial gyms. The equipment calibration, cleanliness, and Marcus Vance\'s strength programming helped me add 65 lbs to my deadlift while cutting 4% body fat in 14 weeks.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    programTaken: 'Strength & Powerlifting',
    achievement: '-18 lbs fat • +65 lbs Deadlift'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Creative Director & Mother of 2',
    rating: 5,
    review: 'I used to feel intimidated walking into weight rooms. The trainers at Star Fitness Studio made me feel supported from day one. The 6:30 AM HIIT and body composition guidance from Elena gave me my energy back and transformed my posture completely!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    programTaken: 'Weight Management & Shred',
    achievement: 'Lost 24 lbs • Gained 6 lbs Lean Muscle'
  },
  {
    id: 'test-3',
    name: 'Jordan Martinez',
    role: 'Semi-Pro Soccer Player',
    rating: 5,
    review: 'The turf track, Woodway treadmills, and David Kim\'s mobility work cured my chronic hamstring tightness. The 24/7 keycard access means I can train at 5 AM before my team meetings without any crowd or waiting for squat racks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    programTaken: 'Functional Cross-Training',
    achievement: 'VO2 Max +18% • 40yd Dash -0.25s'
  },
  {
    id: 'test-4',
    name: 'Chloe Zhang',
    role: 'Architect & Fitness Enthusiast',
    rating: 5,
    review: 'The vibe here is electrifying. Lighting, music, top-tier coaches like Maya Patel who know every member by name. Plus, ending a brutal session in the cedar infrared sauna is pure luxury.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    programTaken: 'High-Energy Group Fitness',
    achievement: 'Completed 80+ Classes this Year'
  }
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Samantha Wright',
    email: 'samantha.w@example.com',
    phone: '+91 98765 12345',
    subject: 'Corporate Membership for Tech Startup (18 team members)',
    message: 'Hello, our team of 18 is looking for a comprehensive corporate wellness package with unlimited classes and monthly PT check-ins. Can you send over corporate tier details for Star Fitness Studio?',
    date: '2026-08-20',
    status: 'unread'
  },
  {
    id: 'msg-2',
    name: 'Michael Torres',
    email: 'mtorres.lift@example.com',
    phone: '+91 98765 67890',
    subject: 'Olympic Barbell & Private Bay Tour Request',
    message: 'Hi team! I\'m preparing for an upcoming powerlifting meet and would love to tour the facility tomorrow at 5 PM to see the competition plates and squat racks.',
    date: '2026-08-21',
    status: 'read'
  }
];

export const DEMO_USERS: User[] = [
  {
    id: 'user-member-1',
    name: 'Brandon Cole',
    email: 'member@starfitnessstudio.com',
    role: 'member',
    phone: '+91 98765 44321',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop',
    membershipPlanId: 'plan-premium',
    membershipPlanName: 'Premium Plan (Monthly)',
    membershipStatus: 'active',
    membershipRenewsAt: '2026-09-22',
    memberSince: '2025-03-15',
    qrCode: 'SFS-MEM-889342',
    fitnessGoal: 'Build Lean Muscle & Increase Deadlift to 405 lbs',
    heightCm: 182,
    weightKg: 84,
    calculatedBmi: 25.4,
    bmiCategory: 'Overweight / High Lean Mass'
  },
  {
    id: 'user-admin-1',
    name: 'Coach Vance (Gym Manager)',
    email: 'admin@starfitnessstudio.com',
    role: 'admin',
    phone: '+91 98765 43210',
    avatar: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop',
    membershipPlanId: 'plan-pro',
    membershipPlanName: 'Staff VIP Access',
    membershipStatus: 'active',
    membershipRenewsAt: '2029-12-31',
    memberSince: '2022-01-01',
    qrCode: 'SFS-STAFF-0001',
    fitnessGoal: 'Studio Management & Strength Master Coach',
    heightCm: 188,
    weightKg: 95,
    calculatedBmi: 26.9,
    bmiCategory: 'High Muscle Mass'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'book-1',
    userId: 'user-member-1',
    userName: 'Brandon Cole',
    userEmail: 'member@starfitnessstudio.com',
    type: 'class',
    itemId: 'sched-1',
    itemTitle: 'Morning Iron Surge',
    trainerName: 'Marcus Vance',
    day: 'Monday',
    date: '2026-08-25',
    time: '06:30 AM',
    room: 'Main Strength Bay A',
    status: 'confirmed',
    createdAt: '2026-08-21T14:30:00Z'
  },
  {
    id: 'book-2',
    userId: 'user-member-1',
    userName: 'Brandon Cole',
    userEmail: 'member@starfitnessstudio.com',
    type: 'trainer',
    itemId: 'tr-2',
    itemTitle: '1-on-1 Session with Elena Rostova',
    trainerName: 'Elena Rostova',
    day: 'Thursday',
    date: '2026-08-27',
    time: '04:00 PM',
    room: 'Private Coaching Bay 2',
    status: 'confirmed',
    createdAt: '2026-08-21T18:15:00Z'
  }
];
