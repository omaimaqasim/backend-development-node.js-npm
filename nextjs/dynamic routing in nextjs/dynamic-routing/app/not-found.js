import Link from "next/link";
// we use this file for throwing custom non found page
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-6">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-tight text-white">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold text-zinc-100">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-zinc-400 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved or doesn't exist.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-white px-6 py-3
                     font-semibold text-zinc-900
                     transition hover:bg-zinc-200
                     active:scale-95"
        >
          ← Return Home
        </Link>

      </div>
    </div>
  );
}