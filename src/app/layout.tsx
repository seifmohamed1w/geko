// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { WishlistProvider } from '@/context/WishlistContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { IntlProvider } from '@/components/i18n/IntlProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GEKO | Modern Furniture',
  description: 'Curated Scandinavian Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <IntlProvider>
            <WishlistProvider>
              <Navbar />
              <main className="min-h-screen pt-4">
                {children}
              </main>
              <Footer />
            </WishlistProvider>
          </IntlProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}