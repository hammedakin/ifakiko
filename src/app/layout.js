import {
  poppins, spaceGrotesk, notoSans, lato, josefinSans,
} from "./font";
import "./globals.css";
import 'aos/dist/aos.css';

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
