/**
 * Environment variables configuration
 * Access environment variables with TypeScript type safety
 */

interface EnvConfig {
    // Contact Information
    contactPhone: string;
    contactEmail: string;
    contactWhatsapp: string;

    // Social Media
    socialInstagram: string;
    socialFacebook: string;
    socialTwitter: string;
    socialLinkedin: string;

    // Address
    address: string;

    // API Keys
    configcatKey: string;

    // API URL
    apiUrl: string;
}

const env: EnvConfig = {
    // Contact Information
    contactPhone: import.meta.env.VITE_CONTACT_PHONE,
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL,
    contactWhatsapp: import.meta.env.VITE_CONTACT_WHATSAPP,

    // Social Media
    socialInstagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
    socialFacebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
    socialTwitter: import.meta.env.VITE_SOCIAL_TWITTER,
    socialLinkedin: import.meta.env.VITE_SOCIAL_LINKEDIN,

    // Address
    address: import.meta.env.VITE_ADDRESS,

    // API Keys
    configcatKey: import.meta.env.VITE_CONFIGCAT_KEY,

    // API URL
    apiUrl: import.meta.env.VITE_API_URL,
};

export default env;
