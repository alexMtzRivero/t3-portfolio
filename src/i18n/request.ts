import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocales = ['en', 'es', 'fr'];
  const defaultLocale = 'en';
  
  const validLocale = locale && validLocales.includes(locale) ? locale : defaultLocale;
 
  return {
    locale: validLocale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});