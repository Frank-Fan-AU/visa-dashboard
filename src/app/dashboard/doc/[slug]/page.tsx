import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // 使用next-mdx-remote来处理mdx文件

interface DocPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const docDir = path.join(process.cwd(), 'src', 'docContent');
  const filenames = fs.readdirSync(docDir);
  
  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, '')
  }));
}

const DocDetailPage = ({ params: { slug } }: DocPageProps) => {
  const docDir = path.join(process.cwd(), 'src', 'docContent');
  const filePath = path.join(docDir, `${slug}.mdx`);
  console.log('filePath', filePath)
  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    return <div>Document not found</div>;
  }
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  return (
    <div>
      {/* { path.join(process.cwd(),'src','docPosts')} */}
      <h1>{data.title || slug}</h1>
      <MDXRemote source={content} />
    </div>
  )
};

export default DocDetailPage;
