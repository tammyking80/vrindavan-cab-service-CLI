export interface Testimonial {
  id: number;
  name: { en: string; hi: string };
  trip: { en: string; hi: string };
  rating: number;
  text: { en: string; hi: string };
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: { en: 'Kanhaiya Lal', hi: 'कन्हैया लाल' },
    trip: { en: 'Vrindavan Sightseeing', hi: 'वृंदावन दर्शन' },
    rating: 5,
    text: {
      en: 'Excellent service! The driver was very knowledgeable about all the temples and made our pilgrimage truly memorable. Clean car and very punctual.',
      hi: 'उत्कृष्ट सेवा! ड्राइवर को सभी मंदिरों के बारे में बहुत जानकारी थी और हमारी तीर्थयात्रा को वाकई यादगार बना दिया। साफ कार और बहुत समय पर।',
    },
    date: '2024-01',
  },
  {
    id: 2,
    name: { en: 'Riya Agarwal', hi: 'रिया अग्रवाल' },
    trip: { en: 'Delhi Airport Transfer', hi: 'दिल्ली एयरपोर्ट ट्रांसफर' },
    rating: 5,
    text: {
      en: 'My flight was delayed by 2 hours but the driver waited patiently. Very professional service. Will definitely use again for future trips.',
      hi: 'मेरी फ्लाइट 2 घंटे लेट थी लेकिन ड्राइवर ने धैर्यपूर्वक इंतज़ार किया। बहुत पेशेवर सेवा। भविष्य की यात्राओं के लिए ज़रूर फिर से उपयोग करूंगी।',
    },
    date: '2024-02',
  },
  {
    id: 3,
    name: { en: 'Adarsh Chandra', hi: 'आदर्श चन्द्रा' },
    trip: { en: 'Wedding Car Rental', hi: 'शादी कार रेंटल' },
    rating: 5,
    text: {
      en: 'Booked an Innova Crysta for my brother\'s wedding. The car was beautifully decorated and the coordination was flawless. Thank you VCS!',
      hi: 'भाई की शादी के लिए इनोवा क्रिस्टा बुक की। कार खूबसूरती से सजाई गई थी और समन्वय बेहतरीन था। धन्यवाद VCS!',
    },
    date: '2024-01',
  },
  {
    id: 4,
    name: { en: 'Rohit Sharma', hi: 'रोहित शर्मा' },
    trip: { en: 'Govardhan Parikrama Package', hi: 'गोवर्धन परिक्रमा पैकेज' },
    rating: 5,
    text: {
      en: 'Great experience with the Nand Gaon & Barsana package. The driver knew all the sacred spots. Very affordable pricing with no hidden costs.',
      hi: 'नंद गांव और बरसाना पैकेज के साथ बढ़िया अनुभव। ड्राइवर को सभी पवित्र स्थानों की जानकारी थी। कोई छिपी लागत नहीं के साथ बहुत किफायती।',
    },
    date: '2024-03',
  },
  {
    id: 5,
    name: { en: 'Devender Sharma', hi: 'देवेन्दर शर्मा' },
    trip: { en: 'Agra Day Trip', hi: 'आगरा डे ट्रिप' },
    rating: 5,
    text: {
      en: 'Took the Agra day trip package with family. Comfortable SUV, courteous driver, and we visited all three monuments without any rush. Highly recommended!',
      hi: 'परिवार के साथ आगरा डे ट्रिप पैकेज लिया। आरामदायक SUV, शिष्ट ड्राइवर, और हमने बिना किसी जल्दबाजी के तीनों स्मारकों का दौरा किया। बहुत सिफारिश की जाती है!',
    },
    date: '2024-02',
  },
  {
    id: 6,
    name: { en: 'Rishi Kumar', hi: 'ऋषि कुमार' },
    trip: { en: 'Corporate Monthly Rental', hi: 'कॉर्पोरेट मासिक रेंटल' },
    rating: 5,
    text: {
      en: 'We have been using VCS for our company transport for over a year now. Consistent quality, reliable drivers, and hassle-free billing. Best in the region.',
      hi: 'हम एक साल से अधिक समय से अपनी कंपनी के परिवहन के लिए VCS का उपयोग कर रहे हैं। लगातार गुणवत्ता, विश्वसनीय ड्राइवर और बिना परेशानी बिलिंग। क्षेत्र में सबसे अच्छा।',
    },
    date: '2023-12',
  },
  {
    id: 7,
    name: { en: 'Monika Choudhary', hi: 'मोनिका चौधरी' },
    trip: { en: 'Haridwar-Rishikesh Trip', hi: 'हरिद्वार-ऋषिकेश ट्रिप' },
    rating: 5,
    text: {
      en: 'Booked a tempo traveller for a group trip to Haridwar and Rishikesh. The vehicle was clean and comfortable. The driver was experienced with hill roads.',
      hi: 'हरिद्वार और ऋषिकेश की समूह यात्रा के लिए टेम्पो ट्रैवलर बुक किया। वाहन साफ और आरामदायक था। ड्राइवर को पहाड़ी सड़कों का अनुभव था।',
    },
    date: '2024-01',
  },
  {
    id: 8,
    name: { en: 'Gaurav Singh', hi: 'गौरव सिंह' },
    trip: { en: 'Jaipur Round Trip', hi: 'जयपुर राउंड ट्रिप' },
    rating: 5,
    text: {
      en: 'Fantastic service for our Jaipur trip. The Sedan was in great condition and the per-km rate was very competitive. No surprises in billing. Thank you Arvind ji!',
      hi: 'जयपुर यात्रा के लिए शानदार सेवा। सेडान बहुत अच्छी स्थिति में थी और प्रति-km दर बहुत प्रतिस्पर्धी थी। बिलिंग में कोई सरप्राइज नहीं। धन्यवाद अरविंद जी!',
    },
    date: '2024-03',
  },
  {
    id: 9,
    name: { en: 'Sunny SK', hi: 'सनी एसके' },
    trip: { en: 'Mathura Local Sightseeing', hi: 'मथुरा स्थानीय दर्शन' },
    rating: 5,
    text: {
      en: 'Amazing experience visiting all the temples in Mathura. The driver was very polite and knew all the best routes. Will book again for sure!',
      hi: 'मथुरा के सभी मंदिरों के दर्शन का अद्भुत अनुभव। ड्राइवर बहुत विनम्र था और सभी बेहतरीन रास्ते जानता था। ज़रूर दोबारा बुक करूंगा!',
    },
    date: '2024-04',
  },
  {
    id: 10,
    name: { en: 'Omver Singh', hi: 'ओमवीर सिंह' },
    trip: { en: 'Nainital Family Trip', hi: 'नैनीताल पारिवारिक यात्रा' },
    rating: 5,
    text: {
      en: 'Took an SUV for a family trip to Nainital. Very comfortable ride, well-maintained vehicle. The driver handled mountain roads with great skill.',
      hi: 'नैनीताल की पारिवारिक यात्रा के लिए SUV ली। बहुत आरामदायक सवारी, अच्छी तरह से बनाए रखा वाहन। ड्राइवर ने पहाड़ी सड़कों को बड़ी कुशलता से संभाला।',
    },
    date: '2024-02',
  },
  {
    id: 11,
    name: { en: 'Manish Jaat', hi: 'मनीष जाट' },
    trip: { en: 'Vrindavan Temple Tour', hi: 'वृंदावन मंदिर दर्शन' },
    rating: 5,
    text: {
      en: 'Best cab service in Vrindavan. Very reasonable rates and the driver helped us plan the entire temple route. Highly satisfied with the service.',
      hi: 'वृंदावन की सबसे अच्छी कैब सेवा। बहुत उचित दरें और ड्राइवर ने पूरे मंदिर मार्ग की योजना बनाने में मदद की। सेवा से बहुत संतुष्ट।',
    },
    date: '2024-03',
  },
  {
    id: 12,
    name: { en: 'Narayan Singh', hi: 'नारायण सिंह' },
    trip: { en: 'Delhi Round Trip', hi: 'दिल्ली राउंड ट्रिप' },
    rating: 4,
    text: {
      en: 'Booked a sedan for Delhi round trip. Smooth drive, good AC, and the driver was very professional. Pricing was transparent with no hidden charges.',
      hi: 'दिल्ली राउंड ट्रिप के लिए सेडान बुक की। आरामदायक ड्राइव, अच्छा AC, और ड्राइवर बहुत पेशेवर था। कोई छुपे चार्ज नहीं के साथ पारदर्शी मूल्य।',
    },
    date: '2024-01',
  },
  {
    id: 13,
    name: { en: 'Himanshu Anand', hi: 'हिमांशु आनंद' },
    trip: { en: 'Agra Sightseeing', hi: 'आगरा दर्शन' },
    rating: 5,
    text: {
      en: 'Wonderful service for our Agra visit. Visited Taj Mahal, Agra Fort and Fatehpur Sikri all in one day. The driver was excellent and very courteous.',
      hi: 'आगरा दर्शन के लिए अद्भुत सेवा। ताज महल, आगरा फोर्ट और फतेहपुर सीकरी सब एक दिन में देखे। ड्राइवर उत्कृष्ट और बहुत शिष्ट था।',
    },
    date: '2024-04',
  },
  {
    id: 14,
    name: { en: 'Anuj Mishra', hi: 'अनुज मिश्रा' },
    trip: { en: 'Outstation Trip', hi: 'बाहरी यात्रा' },
    rating: 5,
    text: {
      en: 'Used VCS for multiple outstation trips. Always reliable, always on time. The fleet is well maintained and drivers are courteous. Strongly recommend!',
      hi: 'कई बाहरी यात्राओं के लिए VCS का उपयोग किया। हमेशा विश्वसनीय, हमेशा समय पर। बेड़ा अच्छी तरह से बनाए रखा है और ड्राइवर शिष्ट हैं। ज़ोरदार सिफारिश!',
    },
    date: '2024-02',
  },
  {
    id: 15,
    name: { en: 'Mahima Phulwade', hi: 'महिमा फुलवाड़े' },
    trip: { en: 'Govardhan Parikrama', hi: 'गोवर्धन परिक्रमा' },
    rating: 5,
    text: {
      en: 'The Govardhan Parikrama package was perfectly organized. Driver was patient and let us take our time at each stop. Clean vehicle and great value for money.',
      hi: 'गोवर्धन परिक्रमा पैकेज बिल्कुल सही ढंग से आयोजित था। ड्राइवर धैर्यवान था और हमें हर पड़ाव पर अपना समय लेने दिया। साफ वाहन और पैसे का बढ़िया मूल्य।',
    },
    date: '2024-03',
  },
  {
    id: 16,
    name: { en: 'Jayveer Singh', hi: 'जयवीर सिंह' },
    trip: { en: 'Wedding Transport', hi: 'शादी परिवहन' },
    rating: 5,
    text: {
      en: 'Arranged multiple vehicles for my wedding. All cars arrived on time and were beautifully maintained. The team coordinated everything perfectly.',
      hi: 'शादी के लिए कई वाहन बुक किए। सभी कारें समय पर पहुंचीं और बेहतरीन तरीके से बनाई रखी गई थीं। टीम ने सब कुछ पूरी तरह से समन्वित किया।',
    },
    date: '2024-01',
  },
  {
    id: 17,
    name: { en: 'Omveer Faujdar', hi: 'ओमवीर फौजदार' },
    trip: { en: 'Haridwar Trip', hi: 'हरिद्वार यात्रा' },
    rating: 5,
    text: {
      en: 'Very smooth trip to Haridwar. AC was working perfectly, car was clean, and the driver drove very safely. Affordable rates compared to others.',
      hi: 'हरिद्वार की बहुत आरामदायक यात्रा। AC बिल्कुल सही काम कर रहा था, कार साफ थी, और ड्राइवर ने बहुत सुरक्षित गाड़ी चलाई। दूसरों की तुलना में किफायती दरें।',
    },
    date: '2024-04',
  },
  {
    id: 18,
    name: { en: 'Pachahara Gaurav', hi: 'पचाहरा गौरव' },
    trip: { en: 'Local Rental', hi: 'स्थानीय रेंटल' },
    rating: 5,
    text: {
      en: 'Rented a car for full day local use. Driver was very helpful and flexible with our schedule changes. Great service at reasonable price.',
      hi: 'पूरे दिन के स्थानीय उपयोग के लिए कार किराए पर ली। ड्राइवर बहुत सहायक था और हमारे शेड्यूल परिवर्तनों के साथ लचीला था। उचित मूल्य पर शानदार सेवा।',
    },
    date: '2024-02',
  },
  {
    id: 19,
    name: { en: 'Amarchand Rajput', hi: 'अमरचंद राजपूत' },
    trip: { en: 'Char Dham Yatra', hi: 'चार धाम यात्रा' },
    rating: 5,
    text: {
      en: 'Booked for the Char Dham trip. The driver was experienced with mountain terrain and made us feel very safe. Excellent vehicle condition throughout the journey.',
      hi: 'चार धाम यात्रा के लिए बुक किया। ड्राइवर पहाड़ी इलाकों में अनुभवी था और हमें बहुत सुरक्षित महसूस कराया। पूरी यात्रा में वाहन की उत्कृष्ट स्थिति।',
    },
    date: '2024-03',
  },
];
