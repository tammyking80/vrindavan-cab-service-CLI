export interface FaqItem {
  question: { en: string; hi: string };
  answer: { en: string; hi: string };
  category: string;
}

export const faqData: FaqItem[] = [
  {
    category: 'booking',
    question: { en: 'How do I book a cab?', hi: 'मैं कैब कैसे बुक करूं?' },
    answer: {
      en: 'You can book a cab by calling us at 9821164208, sending a WhatsApp message, or using the booking form on our website. Simply share your pickup location, destination, travel date, and preferred vehicle type.',
      hi: 'आप हमें 9821164208 पर कॉल करके, WhatsApp संदेश भेजकर, या हमारी वेबसाइट पर बुकिंग फॉर्म का उपयोग करके कैब बुक कर सकते हैं। बस अपना पिकअप स्थान, गंतव्य, यात्रा तिथि और पसंदीदा वाहन प्रकार बताएं।',
    },
  },
  {
    category: 'booking',
    question: { en: 'Can I book in advance?', hi: 'क्या मैं अग्रिम बुकिंग कर सकता हूं?' },
    answer: {
      en: 'Yes, we recommend booking at least 24 hours in advance for guaranteed availability, especially during peak season (October to March). However, we also accommodate last-minute bookings based on availability.',
      hi: 'हां, हम गारंटीड उपलब्धता के लिए कम से कम 24 घंटे पहले बुकिंग करने की सलाह देते हैं, खासकर पीक सीजन (अक्टूबर से मार्च) में। हालांकि, हम उपलब्धता के आधार पर अंतिम समय की बुकिंग भी स्वीकार करते हैं।',
    },
  },
  {
    category: 'booking',
    question: {
      en: 'Can I modify my booking after confirmation?',
      hi: 'क्या मैं पुष्टि के बाद अपनी बुकिंग बदल सकता हूं?',
    },
    answer: {
      en: 'Yes, you can modify your booking up to 6 hours before the scheduled pickup time. Simply call or WhatsApp us with your changes. Changes are subject to vehicle availability.',
      hi: 'हां, आप निर्धारित पिकअप समय से 6 घंटे पहले तक अपनी बुकिंग में बदलाव कर सकते हैं। बस अपने बदलावों के साथ हमें कॉल या WhatsApp करें। बदलाव वाहन उपलब्धता के अधीन हैं।',
    },
  },
  {
    category: 'pricing',
    question: { en: 'Are there any hidden charges?', hi: 'क्या कोई छिपे शुल्क हैं?' },
    answer: {
      en: 'No hidden charges. Our pricing is transparent. The fare includes the per-km rate. Additional charges for toll, parking, state tax, driver allowance, and night charges (10 PM - 6 AM) are clearly communicated upfront.',
      hi: 'कोई छिपे शुल्क नहीं। हमारी कीमतें पारदर्शी हैं। किराये में प्रति-km दर शामिल है। टोल, पार्किंग, राज्य कर, ड्राइवर भत्ता और रात्रि शुल्क (रात 10 - सुबह 6) के लिए अतिरिक्त शुल्क पहले से स्पष्ट रूप से बताए जाते हैं।',
    },
  },
  {
    category: 'pricing',
    question: { en: 'What payment methods do you accept?', hi: 'आप कौन से भुगतान तरीके स्वीकार करते हैं?' },
    answer: {
      en: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and digital wallets. Payment is typically made at the end of the trip or as agreed during booking.',
      hi: 'हम नकद, UPI (Google Pay, PhonePe, Paytm), बैंक ट्रांसफर और डिजिटल वॉलेट स्वीकार करते हैं। भुगतान आमतौर पर यात्रा के अंत में या बुकिंग के दौरान तय अनुसार किया जाता है।',
    },
  },
  {
    category: 'pricing',
    question: {
      en: 'What is the per day km limit for outstation trips?',
      hi: 'बाहरी यात्रा के लिए प्रतिदिन km सीमा क्या है?',
    },
    answer: {
      en: 'The per day limit is 300 km for outstation trips. If you exceed this limit, additional km will be charged at the applicable per-km rate for your vehicle type.',
      hi: 'बाहरी यात्रा के लिए प्रतिदिन सीमा 300 km है। यदि आप इस सीमा को पार करते हैं, तो आपके वाहन प्रकार के लिए लागू प्रति-km दर पर अतिरिक्त km शुल्क लिया जाएगा।',
    },
  },
  {
    category: 'vehicles',
    question: { en: 'Are your vehicles AC?', hi: 'क्या आपके वाहन AC हैं?' },
    answer: {
      en: 'Yes, all our vehicles are fully air-conditioned and well-maintained. We ensure regular servicing and cleaning of all vehicles for your comfort and safety.',
      hi: 'हां, हमारे सभी वाहन पूर्ण रूप से वातानुकूलित और अच्छी तरह से रखरखाव किए हुए हैं। हम आपके आराम और सुरक्षा के लिए सभी वाहनों की नियमित सर्विसिंग और सफाई सुनिश्चित करते हैं।',
    },
  },
  {
    category: 'vehicles',
    question: {
      en: 'What types of vehicles do you have?',
      hi: 'आपके पास किस प्रकार के वाहन हैं?',
    },
    answer: {
      en: 'We have Sedans (4-seater), SUVs (6-seater), Innova Crysta (7-seater), Tempo Travellers (12, 17, 20, 25 seater), Urbania (20-seater), and Volvo Bus. Our fleet covers every travel need from small families to large groups.',
      hi: 'हमारे पास सेडान (4 सीटर), SUV (6 सीटर), इनोवा क्रिस्टा (7 सीटर), टेम्पो ट्रैवलर (12, 17, 20, 25 सीटर), अर्बेनिया (20 सीटर) और वॉल्वो बस हैं। हमारा बेड़ा छोटे परिवारों से लेकर बड़े समूहों तक हर यात्रा आवश्यकता को पूरा करता है।',
    },
  },
  {
    category: 'vehicles',
    question: {
      en: 'Can I get a decorated car for my wedding?',
      hi: 'क्या मुझे शादी के लिए सजी हुई कार मिल सकती है?',
    },
    answer: {
      en: 'Yes, we provide beautifully decorated vehicles for weddings, including luxury cars for baraat and coordinated guest transport. Contact us with your wedding date and requirements for a customized quote.',
      hi: 'हां, हम शादियों के लिए खूबसूरती से सजे वाहन प्रदान करते हैं, जिसमें बारात के लिए लक्ज़री कारें और समन्वित मेहमान परिवहन शामिल है। कस्टमाइज़ कोटेशन के लिए अपनी शादी की तारीख और आवश्यकताओं के साथ हमसे संपर्क करें।',
    },
  },
  {
    category: 'routes',
    question: { en: 'Which cities do you cover?', hi: 'आप कौन से शहर कवर करते हैं?' },
    answer: {
      en: 'We cover all major cities across Delhi NCR, Uttar Pradesh (Agra, Lucknow, Varanasi, Prayagraj, Ayodhya), Rajasthan (Jaipur, Ajmer, Udaipur, Jodhpur), Uttarakhand (Haridwar, Rishikesh, Dehradun, Mussoorie, Nainital), and Himachal Pradesh (Shimla, Manali, Dharamshala). Our Volvo Bus service is available all over India.',
      hi: 'हम दिल्ली NCR, उत्तर प्रदेश (आगरा, लखनऊ, वाराणसी, प्रयागराज, अयोध्या), राजस्थान (जयपुर, अजमेर, उदयपुर, जोधपुर), उत्तराखंड (हरिद्वार, ऋषिकेश, देहरादून, मसूरी, नैनीताल) और हिमाचल प्रदेश (शिमला, मनाली, धर्मशाला) के सभी प्रमुख शहरों को कवर करते हैं। हमारी वॉल्वो बस सेवा पूरे भारत में उपलब्ध है।',
    },
  },
  {
    category: 'routes',
    question: { en: 'Do you offer one-way trips?', hi: 'क्या आप वन-वे ट्रिप देते हैं?' },
    answer: {
      en: 'We primarily offer round-trip outstation services. For one-way trips, please contact us directly as pricing may vary based on route and availability.',
      hi: 'हम मुख्य रूप से राउंड-ट्रिप बाहरी सेवाएं प्रदान करते हैं। वन-वे ट्रिप के लिए कृपया हमसे सीधे संपर्क करें क्योंकि रूट और उपलब्धता के आधार पर कीमत अलग हो सकती है।',
    },
  },
  {
    category: 'general',
    question: {
      en: 'Are your drivers experienced and verified?',
      hi: 'क्या आपके ड्राइवर अनुभवी और सत्यापित हैं?',
    },
    answer: {
      en: 'All our drivers are professionally trained, have valid commercial licenses, and undergo thorough background verification. They are experienced with local and highway routes and are courteous and reliable.',
      hi: 'हमारे सभी ड्राइवर पेशेवर रूप से प्रशिक्षित हैं, वैध व्यावसायिक लाइसेंस रखते हैं और पूरी तरह से बैकग्राउंड वेरिफिकेशन से गुजरते हैं। वे स्थानीय और हाईवे रूट में अनुभवी, विनम्र और विश्वसनीय हैं।',
    },
  },
  {
    category: 'general',
    question: {
      en: 'What if my flight/train is delayed?',
      hi: 'अगर मेरी फ्लाइट/ट्रेन लेट हो जाए तो?',
    },
    answer: {
      en: 'We track flights and train schedules in real-time. Our driver will wait for you regardless of delays. There are no extra charges for waiting due to flight/train delays for airport and railway station transfers.',
      hi: 'हम रियल-टाइम में फ्लाइट और ट्रेन शेड्यूल ट्रैक करते हैं। हमारा ड्राइवर देरी की परवाह किए बिना आपका इंतजार करेगा। एयरपोर्ट और रेलवे स्टेशन ट्रांसफर के लिए फ्लाइट/ट्रेन में देरी के कारण इंतज़ार का कोई अतिरिक्त शुल्क नहीं है।',
    },
  },
  {
    category: 'general',
    question: { en: 'Is 24/7 service really available?', hi: 'क्या सच में 24/7 सेवा उपलब्ध है?' },
    answer: {
      en: 'Yes, we operate 24 hours a day, 7 days a week, 365 days a year. Whether you need an early morning airport pickup or a late-night ride, we are always available. Night charges apply between 10 PM and 6 AM.',
      hi: 'हां, हम साल के 365 दिन, सप्ताह के 7 दिन, दिन के 24 घंटे काम करते हैं। चाहे आपको सुबह-सुबह एयरपोर्ट पिकअप चाहिए या देर रात की सवारी, हम हमेशा उपलब्ध हैं। रात 10 बजे से सुबह 6 बजे के बीच रात्रि शुल्क लागू होता है।',
    },
  },
  {
    category: 'general',
    question: { en: 'Do you provide child seats?', hi: 'क्या आप चाइल्ड सीट देते हैं?' },
    answer: {
      en: 'Child seats can be arranged upon request at the time of booking. Please inform us about the age and weight of the child so we can provide the appropriate seat.',
      hi: 'बुकिंग के समय अनुरोध पर चाइल्ड सीट की व्यवस्था की जा सकती है। कृपया बच्चे की उम्र और वजन के बारे में हमें बताएं ताकि हम उचित सीट प्रदान कर सकें।',
    },
  },
];

export const faqCategories = [
  { key: 'all', label: { en: 'All', hi: 'सभी' } },
  { key: 'booking', label: { en: 'Booking', hi: 'बुकिंग' } },
  { key: 'pricing', label: { en: 'Pricing', hi: 'मूल्य' } },
  { key: 'vehicles', label: { en: 'Vehicles', hi: 'वाहन' } },
  { key: 'routes', label: { en: 'Routes', hi: 'रूट' } },
  { key: 'general', label: { en: 'General', hi: 'सामान्य' } },
];
