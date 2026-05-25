import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Futuro Académico | Medio Digital Universitario',
  description: 'Explorando la inteligencia artificial, la educación y el futuro profesional desde una perspectiva universitaria.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30">{children}</body>
    </html>
  );
}
