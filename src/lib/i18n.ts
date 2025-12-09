import enMessages from '../../messages/en.json';
import roMessages from '../../messages/ro.json';

type Language = 'en' | 'ro';

const messages = {
  en: enMessages,
  ro: roMessages,
};

export function getMessages(locale: Language = 'en') {
  return messages[locale] || messages.en;
}

export type Messages = typeof enMessages;

