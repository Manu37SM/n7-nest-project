export default function Solutions() {
  const cards = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
  ];

  return (
    <section id="solutions" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl mb-12">
        All of our solutions are tailor-made to your needs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((item) => (
          <div
            key={item}
            className="border border-white/10 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-2xl mb-4">{item}</h3>
            <p className="text-gray-400">
              Built with focus to deliver ambient user experience and a
              customer-centric approach.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
