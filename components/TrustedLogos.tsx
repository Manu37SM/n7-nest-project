export default function TrustedLogos() {
  const logos = [
    "SHELLS",
    "SmartFinder",
    "Zoomerr",
    "ArtVenue",
    "WAVESMARATHON",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-gray-400 uppercase text-sm tracking-[0.2em] mb-8">
        Trusted by
      </p>

      <div className="flex flex-wrap gap-8 md:gap-14 items-center text-white/70 text-xl font-medium">
        {logos.map((logo) => (
          <span
            key={logo}
            className="hover:text-white transition-colors duration-300"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
