import {
  poppins, spaceGrotesk, notoSans, lato, josefinSans,
} from "./font";
import "./globals.css";
// import { Poppins, Space_Grotesk, Noto_Sans, Lato, Josefin_Sans } from 'next/font/google';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '600'], // Customize weights as needed
// });

// const spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// const notoSans = Noto_Sans({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// const josefinSans = Josefin_Sans({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// import {
//   poppins,
//   spaceGrotesk,
//   notoSans,
//   lato,
//   josefinSans,
// } from './fonts';


export const metadata = {
  title: "IFA KIKO by Hammed Akinyemi",
  description: "IFA KIKO by Hammed Akinyemi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ poppins.variable } ${ spaceGrotesk.variable } ${ notoSans.variable } ${ lato.variable } ${ josefinSans.variable }`}
      >
        {children}
      </body>
    </html>
  );
}
