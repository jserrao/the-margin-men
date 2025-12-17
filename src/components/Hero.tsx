'use client';

import { Modal } from './Modal';
import { useState } from 'react';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center my-24 relative">
      <h1 className="font-baskerville text-4xl md:text-7xl lg:text-8xl pb-4 font-medium text-transparent bg-clip-text bg-linear-to-b from-white via-neutral-100 to-neutral-500 tracking-tighter mb-6 text-glow leading-[1.1] relative z-20">
        Protecting Your Margins From AI
      </h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-20 mt-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer w-full sm:w-auto h-12 px-8 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-500/80 transition-all flex items-center justify-center gap-2"
        >
          Book Consultation
          <iconify-icon
            icon="lucide:arrow-right"
            width="16"
            stroke-width="1.5"
          />
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Talk to the Experts"
        >
          <div>
            John and Jeff are ready to help your organization defend its margins
            from AI.
          </div>
          <div>
            <h3>John Serrao</h3>
            <p>
              John is a seasoned executive with a background in technology and
              business. He has worked with some of the world's largest companies
              to help them defend their margins from AI.
            </p>
          </div>
          <div>
            <h3>Jeffrey Hoffman</h3>
            <p>
              Jeffrey is a seasoned executive with a background in technology
              and business. He has worked with some of the world's largest
              companies to help them defend their margins from AI.
            </p>
          </div>
        </Modal>
      </div>
    </section>
  );
}
