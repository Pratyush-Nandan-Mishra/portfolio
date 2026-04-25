'use client';

import { useEffect } from 'react';
import { motion, useTransform, useMotionValue, useSpring } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';

interface Props {
  scrollY: number;
}

// Fixed positions for scattered background logos
const positions = [
  { x: '8%',  y: '12%' },
  { x: '82%', y: '8%'  },
  { x: '18%', y: '55%' },
  { x: '88%', y: '40%' },
  { x: '5%',  y: '80%' },
  { x: '72%', y: '72%' },
  { x: '45%', y: '18%' },
  { x: '60%', y: '85%' },
];

export default function BackgroundLogos({ scrollY }: Props) {
  const scrollMV = useMotionValue(0);
  const smoothScroll = useSpring(scrollMV, { stiffness: 60, damping: 25 });

  useEffect(() => {
    scrollMV.set(scrollY);
  }, [scrollY, scrollMV]);

  // Page fades logos out as user scrolls down
  const containerOpacity = useTransform(smoothScroll, [0, 600], [1, 0]);

  const logos = portfolioData.techLogos.slice(0, 8);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div className="absolute inset-0" style={{ opacity: containerOpacity }}>
        {logos.map((logo, i) => {
          const pos = positions[i];
          // Gentle parallax — each logo drifts at slightly different rate
          const logoY = useTransform(smoothScroll, [0, 800], [0, -(20 + i * 8)]);

          return (
            <motion.div
              key={logo.name}
              className="absolute"
              style={{ left: pos.x, top: pos.y, y: logoY }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 0.08, scale: 1 }}
              transition={{ duration: 1.8, delay: i * 0.15, ease: 'easeOut' }}
            >
              {/* Gentle float loop per logo */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5 + i * 0.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.logo}
                  alt={logo.name}
                  width={72}
                  height={72}
                  className="object-contain select-none"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
