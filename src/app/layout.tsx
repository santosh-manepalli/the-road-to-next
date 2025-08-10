import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Road To Next',
  description: 'My Road To Next Application ...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main
            className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
