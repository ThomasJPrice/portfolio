'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const logos = [
  {
    image: '/houseofhandsome.png',
    name: 'House of Handsome',
    link: 'https://houseofhandsomebedford.co.uk'
  },
  {
    image: '/parentologyworld.png',
    name: 'Parentology World',
    link: 'https://www.parentologyworld.com/'
  },
  {
    image: '/perranbeachhouse.png',
    name: 'Perran Beach House',
    link: 'https://perranbeachhouse.com'
  },
  {
    image: '/paapo.png',
    name: 'Paapo',
    link: 'https://paapo.co.uk'
  },
  {
    image: '/babyblue.png',
    name: 'Baby Blue',
    link: 'https://babyblueitconsulting.com'
  },
  {
    image: '/veilandvogue.png',
    name: 'Veil and Vogue',
    link: 'https://veilandvogue.co.uk'
  },
  {
    image: '/thomasproperties.png',
    name: 'Thomas Properties',
    link: 'https://thomaspropertymanagement.co.uk/'
  },
  {
    image: '/ptlumination.png',
    name: 'PT Lumination',
    link: 'https://ptlumination.co.uk/'
  }
];

const ScrollingLogos = () => {
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless looping
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="w-full container mx-auto px-2 mb-8 md:mb-16 overflow-hidden"
    // onMouseEnter={() => setIsPaused(true)}
    // onMouseLeave={() => setIsPaused(false)}
    >
      {/* <motion.div
        className="flex w-max"
        animate={{ x: isPaused ? '0%' : ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
      >
        {duplicatedLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 block h-12 w-max relative"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              height={48}
              width={200}
              className="grayscale hover:grayscale-0 transition duration-300 h-12 w-full object-contain"
            />
          </a>
        ))}
      </motion.div> */}

      <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {logos.map((logo, index) => (
            <li key={index} className='group'>
              <Link target='_blank' href={logo.link}>
                <img className='h-12 grayscale group-hover:grayscale-0 transition-all duration-300' src={logo.image} alt={logo.name} />
              </Link>
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index} className='group'>
              <Link target='_blank' href={logo.link}>
                <img className='h-12 grayscale group-hover:grayscale-0 transition-all duration-300' src={logo.image} alt={logo.name} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ScrollingLogos;
