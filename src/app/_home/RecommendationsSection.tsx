import React, { FC } from 'react';
import RecommendationsCard from './recommendationsCard/RecommendationsCard';

const RecommendationsSection: FC = () => (
  <section className='h-[1300px] flex justify-center mt-[100px]'>
    <RecommendationsCard />
  </section>
);

export default RecommendationsSection;
