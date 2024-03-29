/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable no-confusing-arrow */

'use client';

import React, { FC } from 'react';
import { Card, CardFooter } from '@nextui-org/react';
import useGetTopTracks from '@/server/topTracks/queries';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import TrackSkeleton from '../../../components/skeletons/TrackSkeleton';

const TracksCard: FC = () => {
  const { data: session } = useSession();

  const { data, isLoading } = useGetTopTracks(
    session?.accessToken ?? '',
    'medium_term',
    '10',
  );

  return (
    <div className='grid w-full grid-cols-2 gap-4 sm:grid-cols-5'>
      {isLoading ? (
        <>
          {Array.from({ length: 10 }).map((_, index) => (
            <TrackSkeleton key={index} />
          ))}
        </>
      ) : (
        data?.map((track) => (
          <Card
            isFooterBlurred
            radius='lg'
            className='border-none xs:w-[120px] ph:w-[150px] md:w-[120px] lg:w-[180px] min-[1150px]:w-[210px]'
            key={track.id}
          >
            <Image
              alt={track.name}
              className='object-cover'
              height={300}
              src={track?.album?.images[1]?.url ?? ''}
              width={300}
            />
            <CardFooter className='absolute bottom-1 z-10 ml-1 h-[70px] w-[calc(100%_-_8px)] overflow-hidden rounded-large border-1 border-white/20 bg-slate-700 bg-opacity-70 shadow-small before:rounded-xl before:bg-white/10 sm:py-2'>
              <div className='space-y-1 p-1'>
                <Link href={track.external_urls.spotify}>
                  <p className='text-tiny font-bold text-white/80 hover:underline'>
                    {track.name}
                  </p>
                </Link>
                <p className='text-tiny text-white/80'>
                  {track.artists.map((artist: any, index: number) => (
                    <span key={artist.id}>
                      {artist.name}
                      {index < track.artists.length - 1 && ', '}
                    </span>
                  ))}
                </p>
                <ArrowUpRight size={16} className='absolute right-1 top-1' />
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};

export default TracksCard;
