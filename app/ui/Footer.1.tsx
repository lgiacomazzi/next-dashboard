import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-10 text-xs text-white">
      <div className="flex flex-col items-center text-center">
        <JoanaBrum className="mb-8 w-28 invert" />
        <p>
          © {new Date().getFullYear()} Joana Brum Brasil. All rights reserved.
        </p>
        <p>
          Developed by{' '}
          <Link className="border-b" href="https://www.instagram.com/lg.zzz">
            lgiacomazzi
          </Link>
        </p>
      </div>
    </footer>
  );
}
