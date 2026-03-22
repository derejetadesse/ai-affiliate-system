export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
              AI-Powered Computer Accessories Website
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Find the best computer accessories for productivity, comfort, and value
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Discover ergonomic mice, keyboards, laptop stands, webcams, and
              other setup essentials with reviews, comparisons, and smart buying guides.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/reviews"
                className="rounded-2xl bg-black px-6 py-3 text-white transition hover:opacity-90"
              >
                Explore Reviews
              </a>
              <a
                href="/blog"
                className="rounded-2xl border border-gray-300 px-6 py-3 transition hover:bg-gray-50"
              >
                Read Guides
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Top categories</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold">Ergonomic Mice</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Reduce wrist strain and work more comfortably.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold">Keyboards</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Find the best typing experience for work and study.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold">Laptop Stands</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Improve posture and create a healthier desk setup.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold">Webcams & Headsets</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Upgrade your remote work and meeting quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Why this site exists</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            This platform helps people choose the best computer accessories through
            honest reviews, useful comparisons, and practical setup advice.
          </p>
        </div>
      </section>
    </main>
  );
}