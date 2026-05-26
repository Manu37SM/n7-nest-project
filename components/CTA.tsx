import Image from "next/image";

export default function CTA() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl mb-6">A complete cloud-based core banking</h2>

          <p className="text-gray-400 mb-6">
            Faster time to market with our cloud-based core banking services.
          </p>

          <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full">
            Request Demo
          </button>
        </div>

        <Image
          src="/images/dashboard/aml-dashboard.png"
          alt="dashboard"
          width={1200}
          height={700}
          className="rounded-2xl w-full h-auto"
        />
      </div>
    </section>
  );
}
