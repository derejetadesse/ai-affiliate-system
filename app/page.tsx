export default function ProductPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        TRALT Ergonomic Office Chair Review
      </h1>

      <img
        src="https://images.unsplash.com/photo-1505843490701-5be5d1b29956?auto=format&fit=crop&w=1000&q=80"
        alt="TRALT Office Chair"
        className="w-full rounded-lg mb-6"
      />

      <p className="text-gray-700 mb-6 leading-7">
        The TRALT ergonomic office chair is designed for long work hours and everyday comfort.
        It includes head, back, hip, and arm support, plus adjustable lumbar support for a better sitting experience.
        The breathable mesh back and smooth wheels make it a practical choice for home offices and study spaces.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
        <li>Ergonomic support for head, back, hips, and arms</li>
        <li>Adjustable lumbar support and seat height</li>
        <li>Breathable mesh back design</li>
        <li>330 lb maximum weight capacity</li>
        <li>360° swivel base and smooth rolling casters</li>
        <li>Suitable for office work, study, and gaming</li>
      </ul>

      <a
        href="https://amzn.to/4uOyXKR"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300"
      >
        View on Amazon
      </a>
    </main>
  );
}
