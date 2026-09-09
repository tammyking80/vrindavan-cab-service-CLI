import type { Language } from '../data/translations';

const WHATSAPP_NUMBER = '919821164208';

function buildUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(buildUrl(message), '_blank');
}

export function getWhatsAppUrl(message: string): string {
  return buildUrl(message);
}

export function buildBookingMessage(
  lang: Language,
  data: {
    name?: string;
    phone?: string;
    pickup?: string;
    destination?: string;
    date?: string;
    vehicle?: string;
    passengers?: string;
    message?: string;
  }
): string {
  if (lang === 'hi') {
    let msg = `नमस्ते! मैं वृंदावन कैब सर्विस से बुकिंग करना चाहता/चाहती हूं।\n\n`;
    if (data.name) msg += `नाम: ${data.name}\n`;
    if (data.phone) msg += `फोन: ${data.phone}\n`;
    if (data.pickup) msg += `पिकअप: ${data.pickup}\n`;
    if (data.destination) msg += `गंतव्य: ${data.destination}\n`;
    if (data.date) msg += `तिथि: ${data.date}\n`;
    if (data.vehicle) msg += `वाहन: ${data.vehicle}\n`;
    if (data.passengers) msg += `यात्री: ${data.passengers}\n`;
    if (data.message) msg += `\nसंदेश: ${data.message}\n`;
    msg += `\nकृपया कीमत और उपलब्धता बताएं।`;
    return msg;
  }

  let msg = `Hello! I would like to book a cab with Vrindavan Cab Service.\n\n`;
  if (data.name) msg += `Name: ${data.name}\n`;
  if (data.phone) msg += `Phone: ${data.phone}\n`;
  if (data.pickup) msg += `Pickup: ${data.pickup}\n`;
  if (data.destination) msg += `Destination: ${data.destination}\n`;
  if (data.date) msg += `Date: ${data.date}\n`;
  if (data.vehicle) msg += `Vehicle: ${data.vehicle}\n`;
  if (data.passengers) msg += `Passengers: ${data.passengers}\n`;
  if (data.message) msg += `\nMessage: ${data.message}\n`;
  msg += `\nPlease share the price and availability.`;
  return msg;
}

export function buildServiceEnquiryMessage(lang: Language, service: string): string {
  if (lang === 'hi') {
    return `नमस्ते! मुझे वृंदावन कैब सर्विस की "${service}" सेवा के बारे में जानकारी चाहिए। कृपया विवरण और कीमत बताएं।`;
  }
  return `Hello! I am interested in the "${service}" service from Vrindavan Cab Service. Please share the details and pricing.`;
}

export function buildVehicleBookingMessage(lang: Language, vehicle: string): string {
  if (lang === 'hi') {
    return `नमस्ते! मैं वृंदावन कैब सर्विस से ${vehicle} बुक करना चाहता/चाहती हूं। कृपया उपलब्धता और कीमत बताएं।`;
  }
  return `Hello! I would like to book a ${vehicle} from Vrindavan Cab Service. Please share availability and pricing.`;
}

export function buildPackageBookingMessage(
  lang: Language,
  packageName: string,
  stops: string[]
): string {
  const stopsList = stops.join(', ');
  if (lang === 'hi') {
    return `नमस्ते! मैं वृंदावन कैब सर्विस का "${packageName}" पैकेज बुक करना चाहता/चाहती हूं।\n\nस्थान: ${stopsList}\n\nकृपया कीमत और उपलब्धता बताएं।`;
  }
  return `Hello! I would like to book the "${packageName}" package from Vrindavan Cab Service.\n\nStops: ${stopsList}\n\nPlease share the price and availability.`;
}

export function buildRouteBookingMessage(
  lang: Language,
  destination: string,
  vehicle?: string
): string {
  if (lang === 'hi') {
    let msg = `नमस्ते! मैं वृंदावन से ${destination} के लिए कैब बुक करना चाहता/चाहती हूं।`;
    if (vehicle) msg += `\nवाहन: ${vehicle}`;
    msg += `\n\nकृपया किराया और उपलब्धता बताएं।`;
    return msg;
  }
  let msg = `Hello! I would like to book a cab from Vrindavan to ${destination}.`;
  if (vehicle) msg += `\nVehicle: ${vehicle}`;
  msg += `\n\nPlease share the fare and availability.`;
  return msg;
}

export function buildRouteEnquiryMessage(
  lang: Language,
  destination: string
): string {
  if (lang === 'hi') {
    return `नमस्ते! मुझे वृंदावन से ${destination} की यात्रा के बारे में जानकारी चाहिए। कृपया किराया, वाहन विकल्प और समय बताएं।`;
  }
  return `Hello! I would like to enquire about travelling from Vrindavan to ${destination}. Please share the fare, vehicle options, and travel time.`;
}

export function buildContactMessage(
  lang: Language,
  data: {
    name?: string;
    phone?: string;
    email?: string;
    service?: string;
    vehicle?: string;
    date?: string;
    message?: string;
  }
): string {
  if (lang === 'hi') {
    let msg = `नमस्ते! मैं वृंदावन कैब सर्विस से संपर्क कर रहा/रही हूं।\n\n`;
    if (data.name) msg += `नाम: ${data.name}\n`;
    if (data.phone) msg += `फोन: ${data.phone}\n`;
    if (data.email) msg += `ईमेल: ${data.email}\n`;
    if (data.service) msg += `सेवा: ${data.service}\n`;
    if (data.vehicle) msg += `वाहन: ${data.vehicle}\n`;
    if (data.date) msg += `तिथि: ${data.date}\n`;
    if (data.message) msg += `\nसंदेश: ${data.message}\n`;
    return msg;
  }
  let msg = `Hello! I am reaching out to Vrindavan Cab Service.\n\n`;
  if (data.name) msg += `Name: ${data.name}\n`;
  if (data.phone) msg += `Phone: ${data.phone}\n`;
  if (data.email) msg += `Email: ${data.email}\n`;
  if (data.service) msg += `Service: ${data.service}\n`;
  if (data.vehicle) msg += `Vehicle: ${data.vehicle}\n`;
  if (data.date) msg += `Date: ${data.date}\n`;
  if (data.message) msg += `\nMessage: ${data.message}\n`;
  return msg;
}

export function buildGreetingMessage(lang: Language): string {
  if (lang === 'hi') {
    return 'नमस्ते! मुझे वृंदावन कैब सर्विस के बारे में जानकारी चाहिए।';
  }
  return 'Hello! I would like to know more about Vrindavan Cab Service.';
}
