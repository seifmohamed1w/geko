// src/components/layout/Footer.tsx
'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Building2 } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              GEKO
            </Link>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-black mb-4">{t('common.shop')}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/catalog" className="hover:text-black">{t('common.allProducts')}</Link></li>
              <li><Link href="/" className="hover:text-black">{t('common.newArrivals')}</Link></li>
              <li><Link href="/wishlist" className="hover:text-black">{t('common.wishlist')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">{t('common.company')}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-black">{t('common.about')}</Link></li>
              <li><Link href="/contact" className="hover:text-black">{t('common.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-black mb-4">{t('common.contactSection')}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:gekomarketsmf@gmail.com" className="hover:text-black break-all">
                  gekomarketsmf@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Building2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Bucuresti Sector 1<br />
                  Str. Lamaiului, Nr.4, Camera Nr 1
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  AFUMATI, Sos Bucuresti Urziceni<br />
                  nr 31 pavilion A parter spatiul 1 swr a, Jud. IF
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-start gap-4 text-xs text-gray-400">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} GEKO MARKETS M & F S.R.L. {t('footer.allRightsReserved')}</p>
            <p>
              <span className="font-semibold">CIF:</span> RO50362139 | <span className="font-semibold">RC:</span> J2024013719407 | <span className="font-semibold">UIT:</span> 1T4U2C2F8D289244
            </p>
            <p>
              <a href="mailto:gekomarketsmf@gmail.com" className="hover:text-gray-600">
                gekomarketsmf@gmail.com
              </a>
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
            {t('footer.designShowcaseMode')}
          </div>
        </div>
      </div>
    </footer>
  );
}