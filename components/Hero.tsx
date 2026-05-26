"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          The new foundation
          <br />
          of modern banking
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          We drive innovation and growth, provide seamless customer experience
          and operational excellence.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full hover:scale-105 transition">
            Request Demo
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-full">
            Contact Us
          </button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="flex-1"
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="hero"
          width={700}
          height={500}
          className="w-full h-auto rounded-3xl"
          priority
        />
      </motion.div>
    </section>
  );
}
