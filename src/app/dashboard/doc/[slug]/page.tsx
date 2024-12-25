import MDXComponent from '@/components/common/MDXComponent';
import BackButton from '@/components/common/BackButton';
import PageHeading from '@/components/common/PageHeading';
import { fetchContentByName } from '@/lib/contentfulApi';


interface DocPageProps {
  params: { slug: string };
}

const DocDetailPage = async ({ params: { slug } }: DocPageProps) => {
console.log(slug)
  const post = await fetchContentByName(slug);


  return (
    <div>
      <BackButton url='/dashboard/doc' />
      <PageHeading title={post.title} description={post.describe} />
      <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
        <MDXComponent>{post.content}</MDXComponent>
      </div>
    </div>
  )
};

export default DocDetailPage;
