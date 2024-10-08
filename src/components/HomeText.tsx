'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { cExtended } from '@/utils/Font';
import SignInButton from './SignInButton';

const HomeText: FC = () => {
  const gerak = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='relative flex h-full flex-col items-center justify-center space-y-5'>
      <motion.h1
        className={`text-xl text-black dark:text-white ph:text-3xl md:text-6xl ${cExtended.className}`}
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0,
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        &quot;Your <span style={{ color: '#07F468' }}>ID</span>, please.&quot;
      </motion.h1>
      <motion.p
        className='w-[300px] text-center text-xs font-light text-black dark:text-white md:w-[500px] md:text-medium'
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0.5,
          duration: 2,
          ease: 'easeOut',
        }}
      >
        Create your very own ID card with your Spotify profile picture, name,
        and your top artists from the past few months.
      </motion.p>
      <motion.div
        className='flex items-center justify-center'
        variants={gerak}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 1,
          duration: 2,
          ease: 'easeOut',
        }}
      >
        <SignInButton />
      </motion.div>
    </div>
  );
};

export default HomeText;
