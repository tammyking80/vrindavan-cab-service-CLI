export interface Vehicle {
  id: string;
  name: { en: string; hi: string };
  category: 'sedan' | 'suv' | 'luxury' | 'traveller' | 'bus';
  image: string;
  capacity: number;
  luggage: number;
  ratePerKm: number | null;
  features: { en: string[]; hi: string[] };
  bestFor: { en: string; hi: string };
  badge?: { en: string; hi: string };
}

export const vehicles: Vehicle[] = [
  {
    id: 'sedan',
    name: { en: 'Sedan', hi: 'सेडान' },
    category: 'sedan',
    image: '/cab-images-repository/fleet/sedan.png',
    capacity: 4,
    luggage: 2,
    ratePerKm: 11,
    features: {
      en: ['AC', 'Music System', 'Comfortable Seats', 'Charging Point'],
      hi: ['AC', 'म्यूजिक सिस्टम', 'आरामदायक सीटें', 'चार्जिंग पॉइंट'],
    },
    bestFor: { en: 'Small families & couples', hi: 'छोटे परिवार और जोड़े' },
  },
  {
    id: 'suv',
    name: { en: 'SUV', hi: 'SUV' },
    category: 'suv',
    image: '/cab-images-repository/fleet/suv.jpg',
    capacity: 6,
    luggage: 3,
    ratePerKm: 14,
    features: {
      en: ['AC', 'Music System', 'Spacious Interior', 'Large Boot Space', 'Charging Point'],
      hi: ['AC', 'म्यूजिक सिस्टम', 'विशाल इंटीरियर', 'बड़ा बूट स्पेस', 'चार्जिंग पॉइंट'],
    },
    bestFor: { en: 'Families & groups', hi: 'परिवार और समूह' },
  },
  {
    id: 'crysta',
    name: { en: 'Innova Crysta', hi: 'इनोवा क्रिस्टा' },
    category: 'luxury',
    image: '/cab-images-repository/fleet/innvoa-crysta.jpg',
    capacity: 7,
    luggage: 4,
    ratePerKm: 18,
    features: {
      en: ['AC', 'Premium Seats', 'Music System', 'Ample Luggage Space', 'Charging Point', 'First Aid Kit'],
      hi: ['AC', 'प्रीमियम सीटें', 'म्यूजिक सिस्टम', 'पर्याप्त सामान स्थान', 'चार्जिंग पॉइंट', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Premium travel & families', hi: 'प्रीमियम यात्रा और परिवार' },
    badge: { en: 'Premium', hi: 'प्रीमियम' },
  },
  {
    id: 'tempo-12',
    name: { en: 'Tempo Traveller 12 Seater', hi: 'टेम्पो ट्रैवलर 12 सीटर' },
    category: 'traveller',
    image: '/cab-images-repository/fleet/tempo-traveller-12-SEATER.jpg',
    capacity: 12,
    luggage: 6,
    ratePerKm: 30,
    features: {
      en: ['AC', 'Push-back Seats', 'Music System', 'Luggage Carrier', 'Curtains', 'First Aid Kit'],
      hi: ['AC', 'पुश-बैक सीटें', 'म्यूजिक सिस्टम', 'सामान कैरियर', 'पर्दे', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Group tours & pilgrimages', hi: 'समूह यात्रा और तीर्थयात्रा' },
  },
  {
    id: 'tempo-17',
    name: { en: 'Tempo Traveller 17 Seater', hi: 'टेम्पो ट्रैवलर 17 सीटर' },
    category: 'traveller',
    image: '/cab-images-repository/fleet/tempo-traveller-17-Seater.jpg',
    capacity: 17,
    luggage: 8,
    ratePerKm: 32,
    features: {
      en: ['AC', 'Push-back Seats', 'Music System', 'Luggage Carrier', 'Curtains', 'First Aid Kit'],
      hi: ['AC', 'पुश-बैक सीटें', 'म्यूजिक सिस्टम', 'सामान कैरियर', 'पर्दे', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Large groups & events', hi: 'बड़े समूह और इवेंट' },
  },
  {
    id: 'tempo-20',
    name: { en: 'Tempo Traveller 20 Seater', hi: 'टेम्पो ट्रैवलर 20 सीटर' },
    category: 'traveller',
    image: '/cab-images-repository/fleet/tempo-travler-20-seater.jpeg',
    capacity: 20,
    luggage: 10,
    ratePerKm: 35,
    features: {
      en: ['AC', 'Push-back Seats', 'Music System', 'Luggage Carrier', 'Curtains', 'First Aid Kit'],
      hi: ['AC', 'पुश-बैक सीटें', 'म्यूजिक सिस्टम', 'सामान कैरियर', 'पर्दे', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Weddings & large groups', hi: 'शादी और बड़े समूह' },
  },
  {
    id: 'tempo-25',
    name: { en: 'Tempo Traveller 25 Seater', hi: 'टेम्पो ट्रैवलर 25 सीटर' },
    category: 'traveller',
    image: '/cab-images-repository/fleet/tempo-travler-25-seater.jpeg',
    capacity: 25,
    luggage: 12,
    ratePerKm: 40,
    features: {
      en: ['AC', 'Push-back Seats', 'Music System', 'Luggage Carrier', 'Curtains', 'First Aid Kit'],
      hi: ['AC', 'पुश-बैक सीटें', 'म्यूजिक सिस्टम', 'सामान कैरियर', 'पर्दे', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Large events & pilgrimages', hi: 'बड़े इवेंट और तीर्थयात्रा' },
  },
  {
    id: 'urbania',
    name: { en: 'Urbania 20 Seater', hi: 'अर्बेनिया 20 सीटर' },
    category: 'luxury',
    image: '/cab-images-repository/fleet/urbania-20-seater.avif',
    capacity: 20,
    luggage: 10,
    ratePerKm: 40,
    features: {
      en: ['AC', 'Luxury Seats', 'Music System', 'USB Charging', 'Luggage Space', 'First Aid Kit'],
      hi: ['AC', 'लक्ज़री सीटें', 'म्यूजिक सिस्टम', 'USB चार्जिंग', 'सामान स्थान', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Premium group travel', hi: 'प्रीमियम समूह यात्रा' },
    badge: { en: 'Premium', hi: 'प्रीमियम' },
  },
  {
    id: 'volvo-bus',
    name: { en: 'Volvo Bus', hi: 'वॉल्वो बस' },
    category: 'bus',
    image: '/cab-images-repository/fleet/volvo-bus.cms',
    capacity: 45,
    luggage: 20,
    ratePerKm: null,
    features: {
      en: ['AC', 'Recliner Seats', 'Entertainment System', 'Large Luggage Bay', 'Curtains', 'First Aid Kit'],
      hi: ['AC', 'रिक्लाइनर सीटें', 'एंटरटेनमेंट सिस्टम', 'बड़ा सामान बे', 'पर्दे', 'फर्स्ट एड किट'],
    },
    bestFor: { en: 'Large events & all-India bookings', hi: 'बड़े इवेंट और पूरे भारत में बुकिंग' },
    badge: { en: 'All India', hi: 'पूरे भारत' },
  },
];
