'use client';

import { motion } from 'framer-motion';
import { getAllPosts } from "@/lib/contentfulApi";
import { PostItemProps } from "@/type/Post";
import { useEffect, useState } from "react";
import PostCard from '@/components/doc/PostCard';

const DocPage = () =>{
 // 从 Contentful 获取博客文章
 const [postData, setPostData] = useState<PostItemProps[]>([]);
 const fetchBlogData = async () => {
    const postDataRes = await getAllPosts(false);
    setPostData(postDataRes);
   }
   useEffect(() => {
    fetchBlogData();
  }, []);
    return(
        <>

     <div className='space-y-10'>
        <div className='grid grid-cols-1 gap-6 px-8 pt-4 sm:grid-cols-2 md:grid-cols-3'>

          {postData.map((item: PostItemProps, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <PostCard {...item} />
                </motion.div>
              ))}
        </div>
      </div>
    </>
    )
}

export default DocPage