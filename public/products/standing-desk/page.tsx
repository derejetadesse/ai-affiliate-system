export default function ProductPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src="/products/standing-desk.png"
            alt="Standing Desk"
            className="w-full rounded-xl border"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            Standing Desk Adjustable Height Mobile Desk
          </h1>

          <p className="text-gray-700 mb-6">
            A flexible standing desk designed for comfort, mobility, and better
            posture. Perfect for home offices and small spaces.
          </p>

          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li>Adjustable height</li>
            <li>Easy to move with wheels</li>
            <li>Compact design</li>
          </ul>

          <a
            href="#"
            className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold"
          >
            Check Price on Amazon
          </a>
        </div>
      </div>
    </main>
  );
}
