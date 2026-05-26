import Image from "next/image";

export default function MobileShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Say N7 to the new way of banking
        </h2>
      </div>

      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
        <div className="md:translate-y-8 md:-mr-8 z-10">
          <Image
            src="/images/mobile/phone-home.png"
            alt="phone-home"
            width={280}
            height={580}
            className="rounded-[2rem] shadow-2xl"
          />
        </div>

        <div className="z-20">
          <Image
            src="/images/mobile/phone-transaction.png"
            alt="transaction"
            width={300}
            height={600}
            className="rounded-[2rem] shadow-2xl"
          />
        </div>

        <div className="md:translate-y-8 md:-ml-8 z-10">
          <Image
            src="/images/mobile/phone-profile.png"
            alt="profile"
            width={280}
            height={580}
            className="rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
