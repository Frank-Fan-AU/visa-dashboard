"use client";
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { PostItemProps } from "@/type/Post";
import Link from "next/link";
import Card from "@/components/common/Card";
import { useState } from "react";
import Image from "@/components/common/Image";
import { BsArrowRight as MoreIcon } from 'react-icons/bs';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';
import {
    calculateReadingTime,
    formatDate,
    formatExcerpt,
  } from '@/lib/helpers';
import Breakline from "../common/Breakline";
import Tooltip from "../common/Tooltip";


const PostCard = ({title,slug,author,updateDate,describe,coverImage,content}: PostItemProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const readingTimeMinutes = calculateReadingTime(content) ?? 0;
    const defaultImage = '/alarm.jpg';
    const slideDownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <Link href={`/dashboard/doc/${slug}`}>
    <Card
      className='group relative flex h-[220px] w-full flex-col rounded-lg border shadow-sm dark:border-neutral-800'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className='relative rounded-xl duration-500'
        style={{
          height: '220px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={coverImage?.url || defaultImage}
          alt={title}
          fill={true}
          sizes='100vw, 100vh'
          className='h-full w-full transform object-cover object-left transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black opacity-80 transition-opacity duration-300'></div>
      </div>

      <div className='absolute flex h-full w-full flex-col justify-between space-y-4 p-4 pt-14'>

        <div className='flex flex-col justify-end'>
          <div className='flex flex-col space-y-3'>
            <h3 className=' text-lg font-medium text-neutral-100 group-hover:underline group-hover:underline-offset-4 '>
              {title}
            </h3>
            <div className='flex items-center gap-1 text-neutral-300'>
              <DateIcon size={14} />
              <span className='ml-0.5 text-xs'>{formatDate(updateDate)}</span>
            </div>
            
              <p className='text-sm leading-relaxed text-neutral-300'>
                {formatExcerpt(describe)}
              </p>
         
          </div>
          <Breakline className='!border-neutral-700' />
          <div className='flex justify-between gap-4 px-0.5 text-neutral-400'>
            <Tooltip title={'by '+ author.name}>
              <Image
                src={author.picture.url}
                alt='Ryan Aulia'
                width={25}
                height={25}
                rounded='rounded-full'
                className='rotate-3 border border-neutral-500'
              />
            </Tooltip>

            <motion.div
              variants={slideDownVariants}
              initial='visible'
              animate={isHovered ? 'hidden' : 'visible'}
              className={clsx(
                'flex justify-between gap-4 ',
                isHovered && 'hidden',
              )}
            >
              <div className='flex items-center gap-1'>
                {/* <ViewIcon size={14} />
                <span className='ml-0.5 text-xs font-medium'>
                  {total_views_count.toLocaleString()} VIEWS
                </span> */}
              </div>
              <div className='flex items-center gap-1'>
                <ClockIcon size={14} />
                <span className='ml-0.5 text-xs font-medium'>
                  {readingTimeMinutes.toLocaleString()} MINS READ
                </span>
              </div>
            </motion.div>
            <motion.div
              variants={slideDownVariants}
              initial='hidden'
              animate={isHovered ? 'visible' : 'hidden'}
              className={clsx(
                'flex items-center gap-1',
                !isHovered && 'hidden',
              )}
            >
              <span className='mr-0.5 text-xs font-medium'>READ MORE</span>
              <MoreIcon size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </Card>
  </Link>
  )
};

export default PostCard;
