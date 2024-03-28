import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function HeaderDropdown({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const selectedYear = usePathname().split('/')[2];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => currentYear - i);

  return (
    <div className="dropdown text-sm">
      <button
        className="uppercase"
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        {children}
        {selectedYear && `/${selectedYear}`}
      </button>
      {isDropdownVisible && (
        <div className="absolute flex flex-col gap-2 bg-black p-4 text-center text-white">
          {years.map((year) => (
            <Link
              href={`/paintings/${year.toString()}`}
              key={year}
              onClick={() => setIsDropdownVisible(false)}
            >
              {year}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
