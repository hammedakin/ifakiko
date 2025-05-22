'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";

export default function LanguageSwitcher() {
      const router = useRouter();
      const pathname = usePathname();
      const currentLang = pathname.split('/')[1];

      const handleChange = (e) => {
            // const lang = e.target.value;
            // const newPath = '/' + lang + pathname.slice(3);
            // router.push(newPath);
      };

      return (
            <>
                  <select
                        className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl font-bold text-secondary text-sm"
                        style={{
                              border: '2px solid',
                              borderImageSource: 'linear-gradient(135deg, #74B117 13.54%, #333333 100%)',
                              borderImageSlice: 1,
                              borderRadius: '12px !important',
                        }}
                        onChange={handleChange}
                        value={currentLang}

                  >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                  </select>
                  {/* <button
            className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl font-bold text-secondary text-sm"
            style={{
                  border: '2px solid',
                  borderImageSource: 'linear-gradient(135deg, #74B117 13.54%, #333333 100%)',
                  borderImageSlice: 1,
                  borderRadius: '12px !important',
            }}
      >
            <FaGlobeAmericas /> En <FaChevronDown />
      </button> */}
            </>
      );
}
