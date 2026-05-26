export default function Insights() {
  return (
    <section id="insights" className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-4xl mb-16">
        Get yourself up-to-speed on all the things happening in fintech
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border border-white/10 rounded-2xl p-8">
            <p className="text-blue-500 text-sm mb-4">GETTING STARTED</p>
            <h3 className="text-2xl mb-8">
              How to transition from a traditional to a digital bank
            </h3>

            <button className="border rounded-full px-5 py-2">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
