export interface PackageStop {
  name: { en: string; hi: string };
  desc: { en: string; hi: string };
  image: string;
}

export interface SightseeingPackage {
  id: string;
  name: { en: string; hi: string };
  duration: { en: string; hi: string };
  image: string;
  stops: PackageStop[];
}

export const sightseeingPackages: SightseeingPackage[] = [
  {
    id: 'package-1',
    name: { en: 'Nand Gaon & Barsana Tour', hi: 'नंद गांव और बरसाना टूर' },
    duration: { en: 'Full Day (8-10 hours)', hi: 'पूरा दिन (8-10 घंटे)' },
    image: '/packages/nandgaon-barsana.webp',
    stops: [
      {
        name: { en: 'Nand Gaon', hi: 'नंद गांव' },
        desc: {
          en: 'Birthplace of Lord Krishna\'s foster father Nand Baba. Visit the famous Nand Bhavan temple.',
          hi: 'भगवान कृष्ण के पालक पिता नंद बाबा का जन्मस्थान। प्रसिद्ध नंद भवन मंदिर का दर्शन करें।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
      {
        name: { en: 'Barsana', hi: 'बरसाना' },
        desc: {
          en: 'Birthplace of Radha Rani. Famous for the Lathmar Holi festival and Radha Rani Temple.',
          hi: 'राधा रानी का जन्मस्थान। लठमार होली और राधा रानी मंदिर के लिए प्रसिद्ध।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
      {
        name: { en: 'Kirti Mandir', hi: 'कीर्ति मंदिर' },
        desc: {
          en: 'The sacred temple marking the birthplace of Lord Krishna in Mathura.',
          hi: 'मथुरा में भगवान कृष्ण के जन्मस्थान को चिह्नित करने वाला पवित्र मंदिर।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
      {
        name: { en: 'Radha Kund', hi: 'राधा कुंड' },
        desc: {
          en: 'One of the holiest pilgrimage sites, believed to be bathing place of Radha.',
          hi: 'सबसे पवित्र तीर्थ स्थलों में से एक, माना जाता है कि यह राधा का स्नान स्थल है।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
      {
        name: { en: 'Shyam Kund', hi: 'श्याम कुंड' },
        desc: {
          en: 'Adjacent to Radha Kund, this sacred water body is dedicated to Lord Krishna.',
          hi: 'राधा कुंड के बगल में, यह पवित्र जलाशय भगवान कृष्ण को समर्पित है।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
      {
        name: { en: 'Govardhan Parikrama', hi: 'गोवर्धन परिक्रमा' },
        desc: {
          en: 'The sacred circumambulation of Govardhan Hill, associated with Lord Krishna lifting the hill.',
          hi: 'गोवर्धन पर्वत की पवित्र परिक्रमा, जो भगवान कृष्ण द्वारा पर्वत उठाने से जुड़ी है।',
        },
        image: '/packages/nandgaon-barsana.webp',
      },
    ],
  },
  {
    id: 'package-2',
    name: { en: 'Gokul & Raman Reti Tour', hi: 'गोकुल और रमण रेती टूर' },
    duration: { en: 'Full Day (6-8 hours)', hi: 'पूरा दिन (6-8 घंटे)' },
    image: '/packages/raman-reti-gokul.webp',
    stops: [
      {
        name: { en: 'Gokul', hi: 'गोकुल' },
        desc: {
          en: 'The village where Lord Krishna spent his early childhood. Rich in spiritual significance.',
          hi: 'वह गांव जहां भगवान कृष्ण ने अपना प्रारंभिक बचपन बिताया। आध्यात्मिक महत्व से भरपूर।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
      {
        name: { en: 'Raman Reti', hi: 'रमण रेती' },
        desc: {
          en: 'The sacred sandy banks where Krishna and Balarama used to play as children.',
          hi: 'पवित्र रेतीली तट जहां कृष्ण और बलराम बचपन में खेलते थे।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
      {
        name: { en: 'Brahmand Ghat', hi: 'ब्रह्मांड घाट' },
        desc: {
          en: 'Where Krishna showed the entire universe in his mouth to Yashoda Maiya.',
          hi: 'जहां कृष्ण ने यशोदा मैया को अपने मुख में पूरा ब्रह्मांड दिखाया।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
      {
        name: { en: 'Chinta Haran Mahadev', hi: 'चिंता हरण महादेव' },
        desc: {
          en: 'An ancient Shiva temple believed to remove all worries of devotees.',
          hi: 'एक प्राचीन शिव मंदिर जो भक्तों की सभी चिंताओं को दूर करता है।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
      {
        name: { en: '84 Khamba Temple', hi: '84 खंबा मंदिर' },
        desc: {
          en: 'Historic temple with 84 pillars, an architectural marvel of ancient times.',
          hi: '84 स्तंभों वाला ऐतिहासिक मंदिर, प्राचीन काल की वास्तुकला का चमत्कार।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
      {
        name: { en: 'Ukhal Bandhan', hi: 'ऊखल बंधन' },
        desc: {
          en: 'The place where Yashoda Maiya tied Krishna to a mortar as a child.',
          hi: 'वह स्थान जहां यशोदा मैया ने बालक कृष्ण को ऊखल से बांधा था।',
        },
        image: '/packages/raman-reti-gokul.webp',
      },
    ],
  },
  {
    id: 'package-3',
    name: { en: 'Bhandirvan & Belvan Tour', hi: 'भांडीरवन और बेलवन टूर' },
    duration: { en: 'Half Day (4-5 hours)', hi: 'आधा दिन (4-5 घंटे)' },
    image: '/packages/Bhandirvan-Belvan.jpg',
    stops: [
      {
        name: { en: 'Bhandirvan', hi: 'भांडीरवन' },
        desc: {
          en: 'Sacred forest where Krishna and Radha were married according to tradition.',
          hi: 'पवित्र वन जहां परंपरा के अनुसार कृष्ण और राधा का विवाह हुआ था।',
        },
        image: '/packages/Bhandirvan-Belvan.jpg',
      },
      {
        name: { en: 'Bansi Vat', hi: 'बंसी वट' },
        desc: {
          en: 'The ancient banyan tree under which Krishna played his divine flute.',
          hi: 'प्राचीन बरगद का पेड़ जिसके नीचे कृष्ण ने अपनी दिव्य बांसुरी बजाई।',
        },
        image: '/packages/Bhandirvan-Belvan.jpg',
      },
      {
        name: { en: 'Belvan (Laxmi Temple)', hi: 'बेलवन (लक्ष्मी मंदिर)' },
        desc: {
          en: 'Forest of Bel trees with the revered Laxmi Temple amidst natural beauty.',
          hi: 'बेल के पेड़ों का वन जहां प्राकृतिक सुंदरता के बीच पूजनीय लक्ष्मी मंदिर है।',
        },
        image: '/packages/Bhandirvan-Belvan.jpg',
      },
      {
        name: { en: 'Maan Mandir', hi: 'मान मंदिर' },
        desc: {
          en: 'Temple dedicated to Radha\'s divine sulking with Krishna, full of devotional charm.',
          hi: 'राधा के कृष्ण से रूठने को समर्पित मंदिर, भक्ति भाव से भरपूर।',
        },
        image: '/packages/Bhandirvan-Belvan.jpg',
      },
      {
        name: { en: 'Rawal', hi: 'रावल' },
        desc: {
          en: 'Ancient village associated with Krishna\'s pastimes, offering serene spiritual experience.',
          hi: 'कृष्ण की लीलाओं से जुड़ा प्राचीन गांव, शांत आध्यात्मिक अनुभव प्रदान करता है।',
        },
        image: '/packages/Bhandirvan-Belvan.jpg',
      },
    ],
  },
  {
    id: 'package-4',
    name: { en: 'Agra Day Trip', hi: 'आगरा डे ट्रिप' },
    duration: { en: 'Full Day (8-10 hours)', hi: 'पूरा दिन (8-10 घंटे)' },
    image: '/packages/agra-day-trip.jpg',
    stops: [
      {
        name: { en: 'Taj Mahal', hi: 'ताज महल' },
        desc: {
          en: 'One of the Seven Wonders of the World, a monument to eternal love built by Shah Jahan.',
          hi: 'दुनिया के सात अजूबों में से एक, शाहजहां द्वारा बनाया गया शाश्वत प्रेम का स्मारक।',
        },
        image: '/cab-images-repository/outstation-destinations/agra.jpg',
      },
      {
        name: { en: 'Red Fort (Agra Fort)', hi: 'लाल किला (आगरा फोर्ट)' },
        desc: {
          en: 'A UNESCO World Heritage Site, this Mughal-era fort is a masterpiece of sandstone architecture.',
          hi: 'एक यूनेस्को विश्व धरोहर स्थल, यह मुगल काल का किला बलुआ पत्थर की वास्तुकला का उत्कृष्ट नमूना है।',
        },
        image: '/cab-images-repository/outstation-destinations/agra.jpg',
      },
      {
        name: { en: 'Sikandra', hi: 'सिकंदरा' },
        desc: {
          en: 'Tomb of Emperor Akbar, a stunning blend of Hindu and Islamic architecture.',
          hi: 'सम्राट अकबर का मकबरा, हिंदू और इस्लामी वास्तुकला का अद्भुत मिश्रण।',
        },
        image: '/cab-images-repository/outstation-destinations/agra.jpg',
      },
    ],
  },
];
