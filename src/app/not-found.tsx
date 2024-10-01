import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-2">
      <h2>Page Not Found</h2>

      <Link href="/" className="bg-slate-400 py-2 px-6 text-white rounded-md">
        Return Home
      </Link>
    </div>
  );
}
