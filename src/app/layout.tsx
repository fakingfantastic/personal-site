import type {Metadata} from 'next';
import {
  Figtree,
  Fira_Sans,
  Fira_Sans_Condensed,
  IBM_Plex_Serif,
} from 'next/font/google';
import './globals.css';

const mainFont = Figtree({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Web & Mobile Application Engineer | Frank Lakatos',
  description:
    'Developer based in Northern NJ with a knack for building modern web apps, tackling devops challenges, and making complex tech approachable.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
