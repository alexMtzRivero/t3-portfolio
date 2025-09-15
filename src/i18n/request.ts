import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocales = ['en', 'es'];
  const defaultLocale = 'en';
  
  const validLocale = (validLocales.includes(locale as any) ? locale : defaultLocale) as string;
 
  return {
    locale: validLocale,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../../messages/${validLocale}.json`)).default
  };
});