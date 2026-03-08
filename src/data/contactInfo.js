// Centralized contact and business information
export const contactInfo = {
  // Business Details
  businessName: "BBQ Pioneer",
  legalName: "BBQ Pioneer LLC",
  tagline: "Premium High-Ticket Grills & Smokers",
  description: "BBQ Pioneer offers the world's finest high-ticket grills and smokers. Premium craftsmanship for the serious pitmaster.",
  
  // Contact Information
  email: {
    main: "support@bbqpioneer.com",
    support: "support@bbqpioneer.com",
    sales: "support@bbqpioneer.com",
    orders: "support@bbqpioneer.com",
    returns: "support@bbqpioneer.com",
    privacy: "support@bbqpioneer.com",
    legal: "support@bbqpioneer.com",
  },
  
  phone: {
    number: "+12137742135",
    display: "+1 (213) 774-2135",
    vanity: "1-213-774-2135",
  },
  
  // Address
  address: {
    street: "30N Gould Street",
    city: "Sheridan",
    state: "Wyoming",
    stateCode: "WY",
    zip: "82801",
    country: "United States of America",
    countryCode: "US",
  },
  
  // Business Hours
  hours: {
    weekdays: "Monday-Friday: 9AM-6PM MT",
    saturday: "Saturday: 10AM-4PM MT",
    sunday: "Sunday: Closed",
    support: "Monday-Friday, 9AM-6PM Mountain Time",
    timezone: "America/Denver",
  },
  
  // Shipping & Operations
  shipping: {
    freeShipping: true,
    freeShippingThreshold: 0, // Free on all orders
    operatingRegions: ["US"],
    standardDelivery: "5-10 business days",
    handlingTime: "1-3 business days",
  },
  
  // Social Media
  social: {
    facebook: "https://www.facebook.com/bbqpioneer",
    instagram: "https://www.instagram.com/bbqpioneer",
    youtube: "https://www.youtube.com/bbqpioneer",
    twitter: "https://twitter.com/bbqpioneer",
  },
  
  // Legal & Tax
  legal: {
    taxId: "XX-XXXXXXX", // Update with actual EIN
    foundedYear: "2020",
    registeredState: "Wyoming",
  },
  
  // Website URLs (update after deployment)
  website: {
    domain: "https://bbqpioneer.com", // Update with your actual domain
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    shippingPolicy: "/shipping-policy",
    refundPolicy: "/refund-policy",
    contact: "/contact",
  },
};

// Helper functions
export const getFullAddress = () => {
  const { street, city, state, zip, country } = contactInfo.address;
  return `${street}, ${city}, ${state} ${zip}, ${country}`;
};

export const getShortAddress = () => {
  const { city, state } = contactInfo.address;
  return `${city}, ${state}`;
};

export const getPhoneLink = () => {
  return `tel:${contactInfo.phone.number}`;
};

export const getEmailLink = (type = "main") => {
  return `mailto:${contactInfo.email[type] || contactInfo.email.main}`;
};

export const getSocialLink = (platform) => {
  return contactInfo.social[platform.toLowerCase()] || "#";
};
