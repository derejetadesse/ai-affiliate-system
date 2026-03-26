import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-200">
            Smart Product Reviews
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            New reviews are coming soon
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            We are updating our website with fresh product reviews and better recommendations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/disclosure"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90"
            >
              Affiliate Disclosure
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Website Update in Progress</h2>
        <p className="mt-4 text-lg text-gray-600">
          We removed the old product listings and are preparing to upload new products soon.
        </p>
      </section>
    </main>
  );
}
