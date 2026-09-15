import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hendry Bambang Siswanto | Personal Space',
  description: 'Personal space, thoughts, and projects by Hendry Bambang Siswanto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased text-text-primary bg-background selection:bg-stone-200 selection:text-stone-900 dark:selection:bg-stone-800 dark:selection:text-stone-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
