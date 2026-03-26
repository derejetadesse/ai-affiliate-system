export default function ProductPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">
        TRALT Ergonomic Office Chair Review
      </h1>

   <img
      src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1000&q=80"
      alt="TRALT Office Chair"
      className="h-64 w-full object-cover"
    />
      <p className="text-gray-700 leading-7 mb-6">
        The TRALT ergonomic office chair is built for long work hours, comfort,
        and daily support. It is designed to support the head, back, hips, and
        arms, while the adjustable lumbar support helps improve sitting posture.
        The breathable mesh design and smooth wheels make it a strong option for
        home offices, study spaces, and desk setups.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
        <li>Ergonomic support for head, back, hips, and arms</li>
        <li>Adjustable lumbar support and seat height</li>
        <li>Breathable mesh back and comfortable seat</li>
        <li>330 lb maximum weight capacity</li>
        <li>360° swivel base with smooth rolling casters</li>
        <li>Useful for office work, study, and gaming</li>
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
