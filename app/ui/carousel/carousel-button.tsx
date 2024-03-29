import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function CarouselButton({ direction, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'absolute bottom-1/2 z-10 hidden bg-black p-4 text-sm text-white md:block',
        {
          'right-10': direction == 'right',
        },
        {
          'left-10': direction == 'left',
        },
      )}
    >
      {direction == 'right' ? (
        <ChevronRightIcon className="h-6 w-6 text-white" />
      ) : (
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}
