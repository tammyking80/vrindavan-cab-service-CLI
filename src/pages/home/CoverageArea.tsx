import { MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';

export function CoverageArea() {
  const { language } = useLanguage();

  const states = [
    {
      name: language === 'hi' ? 'दिल्ली NCR' : 'Delhi NCR',
      cities: language === 'hi'
        ? ['दिल्ली', 'गुरुग्राम', 'नोएडा', 'फरीदाबाद']
        : ['Delhi', 'Gurgaon', 'Noida', 'Faridabad'],
    },
    {
      name: language === 'hi' ? 'उत्तर प्रदेश' : 'Uttar Pradesh',
      cities: language === 'hi'
        ? ['आगरा', 'लखनऊ', 'वाराणसी', 'प्रयागराज', 'अयोध्या']
        : ['Agra', 'Lucknow', 'Varanasi', 'Prayagraj', 'Ayodhya'],
    },
    {
      name: language === 'hi' ? 'राजस्थान' : 'Rajasthan',
      cities: language === 'hi'
        ? ['जयपुर', 'अजमेर', 'उदयपुर', 'जोधपुर', 'जैसलमेर']
        : ['Jaipur', 'Ajmer', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    },
    {
      name: language === 'hi' ? 'उत्तराखंड' : 'Uttarakhand',
      cities: language === 'hi'
        ? ['हरिद्वार', 'ऋषिकेश', 'देहरादून', 'मसूरी', 'नैनीताल']
        : ['Haridwar', 'Rishikesh', 'Dehradun', 'Mussoorie', 'Nainital'],
    },
    {
      name: language === 'hi' ? 'हिमाचल प्रदेश' : 'Himachal Pradesh',
      cities: language === 'hi'
        ? ['शिमला', 'मनाली', 'धर्मशाला', 'मैक्लोडगंज']
        : ['Shimla', 'Manali', 'Dharamshala', 'McLeodganj'],
    },
  ];

  return (
    <Section>
      <SectionHeader
        title={language === 'hi' ? 'हमारा कवरेज क्षेत्र' : 'Our Coverage Area'}
        subtitle={
          language === 'hi'
            ? 'वृंदावन से पूरे उत्तर भारत में सेवा'
            : 'Serving across North India from Vrindavan'
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {states.map((state, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl border border-charcoal-100 hover:border-saffron-300 bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-saffron-500" />
              <h3 className="font-display font-semibold text-charcoal-900">{state.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {state.cities.map((city, j) => (
                <span
                  key={j}
                  className="text-xs bg-cream-100 text-charcoal-600 px-2.5 py-1 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
