import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Server Component for MDX
import { serialize } from 'next-mdx-remote/serialize';

const articlesDirectory = path.resolve('src/contents/articles');

// Helper function to get the full path to the MDX file by slug
const getArticleBySlug = (slug: string) => {
    const filePath = path.join(articlesDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return matter(fileContent); 
};

type ArticlePageProps = {
    params: { slug: string };
};

// React Server Component to render the article page
const ArticlePage = async ({ params }: ArticlePageProps) => {
    const { content, data } = getArticleBySlug(params.slug);
    
    // Serialize the MDX content for rendering
    const mdxSource = await serialize(content);
    
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

// Function to generate all the slugs for dynamic routing
export const generateStaticParams = async () => {
    const files = fs.readdirSync(articlesDirectory);
    return files.map((file) => ({
        slug: file.replace('.mdx', ''),
    }));
};
