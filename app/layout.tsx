import type { Metadata } from "next";
import "./globals.scss";
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import theme from '../theme';

const mainFont = Space_Grotesk({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-main',
});

export const metadata: Metadata = {
  title: "Writer's Room",
  description: "Um lugar para construir estórias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={mainFont.variable}>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
