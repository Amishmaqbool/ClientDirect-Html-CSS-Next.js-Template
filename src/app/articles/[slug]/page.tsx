// app/articles/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Use MDXRemote for server-side components

const articlesDirectory = path.resolve('src/contents/articles');

// Function to get an article by slug
const getArticleBySlug = async (slug: string) => {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  // Serialize the MDX content
  const mdxSource = await serialize(content);

  return { mdxSource, data };
};

// Article page component
const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const { mdxSource, data } = await getArticleBySlug(params.slug);

  return (
    <div className="article-container">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Render the MDX content */}
      <MDXRemote source={mdxSource} />
    </div>
  );
};

export default ArticlePage;

// Generates static params for each article
export const generateStaticParams = async () => {
  const files = fs.readdirSync(articlesDirectory);

  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
  }));
};
