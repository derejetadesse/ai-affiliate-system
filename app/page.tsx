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

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Featured Product
        </h2>

        <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1505843490701-5be5d1b29956?auto=format&fit=crop&w=1000&q=80"
            alt="TRALT Office Chair"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-bold">
              TRALT Ergonomic Office Chair
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Comfortable ergonomic chair with mesh back support, adjustable features, and a high-back design for long work hours.
            </p>

            <Link
              href="/reviews/tralt-office-chair"
              className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Read Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
