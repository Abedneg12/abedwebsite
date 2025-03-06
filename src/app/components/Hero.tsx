import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/avatar.jpg"
            alt="Abednego"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Abednego
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
          Full-Stack Developer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Saya adalah Fullstack Developer Newbie.
        </p>
        <a
          href="#work"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
        >
          View Work
        </a>
      </div>
    </section>
  );
}