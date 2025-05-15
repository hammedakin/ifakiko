import { Poppins, Space_Grotesk, Noto_Sans, Lato, Josefin_Sans } from 'next/font/google';

export const poppins = Poppins({
      subsets: ['latin'],
      weight: ['300', '400', '500', '600', '700'],
      variable: '--font-poppins',
});

export const spaceGrotesk = Space_Grotesk({
      subsets: ['latin'],
      weight: ['300', '400', '500', '600', '700'],
      variable: '--font-space-grotesk',
});

export const notoSans = Noto_Sans({
      subsets: ['latin'],
      weight: ['300', '400', '500', '600', '700'],
      variable: '--font-noto-sans',
});

export const lato = Lato({
      subsets: ['latin'],
      weight: ['300', '400', '700'],
      variable: '--font-lato',
});

export const josefinSans = Josefin_Sans({
      subsets: ['latin'],
      weight: ['300', '400', '500', '600', '700'],
      variable: '--font-josefin-sans',
});
