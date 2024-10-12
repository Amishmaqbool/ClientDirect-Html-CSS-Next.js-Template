import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import MDXContent from '@/components/MDXContent'; 

const articlesDirectory = path.resolve('src/contents/articles');

const getArticleBySlug = (slug: string) => {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return matter(fileContent); 
};

type ArticlePageProps = {
  params: { slug: string };
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { content, data } = getArticleBySlug(params.slug);

  const mdxSource = await serialize(content);

  return (
    <div className="article-container">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <MDXContent source={mdxSource} />
    </div>
  );
};

export default ArticlePage;

export const generateStaticParams = async () => {
  const files = fs.readdirSync(articlesDirectory);
  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
};
