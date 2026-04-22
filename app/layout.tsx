import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: 'Elite CRNA Mentorship | Premium Admissions Prep',
  description:
    'Private CRNA mentorship for high-achieving applicants seeking strategic consultation, interview coaching, and application positioning.',
  keywords: [
    'CRNA mentorship',
    'CRNA admissions consulting',
    'mock CRNA interview',
    'CRNA application strategy',
    'how to become a CRNA'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-sans antialiased'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
