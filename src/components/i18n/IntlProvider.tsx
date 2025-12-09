'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useLanguage } from '@/context/LanguageContext';
import { getMessages } from '@/lib/i18n';

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const messages = getMessages(language);

  // Use key to force remount when language changes
  return (
    <NextIntlClientProvider key={language} locale={language} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

