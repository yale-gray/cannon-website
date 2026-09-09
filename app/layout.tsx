import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')),
 title: 'Cannon Gray — Architecture & Exploration',
 description: 'Selected architectural work, physical models, drawings, and digital studies by Cannon Gray, an architecture student at the University of Oklahoma.',
 openGraph: { title: 'Cannon Gray — Architecture & Exploration', description: 'Curiosity takes shape. Selected work in architecture, drawing, and hands-on making.', type: 'website', images: [{ url: '/og.png', width: 1734, height: 907, alt: 'Cannon Gray — Curiosity takes shape.' }] },
 twitter: { card: 'summary_large_image', images: ['/og.png'], title: 'Cannon Gray — Architecture & Exploration', description: 'Curiosity takes shape. Selected work in architecture, drawing, and hands-on making.' },
 icons: { icon: '/favicon.svg' },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
