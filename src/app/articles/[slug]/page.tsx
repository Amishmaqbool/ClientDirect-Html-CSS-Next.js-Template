import { MDXRemote } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
interface Props {
  params: {
    slug: string;
  };
}
export async function generateStaticParams() {
  const articlesPath = path.join(process.cwd(), 'src', 'app', 'content', 'articles');
  console.log('Reading files from path:', articlesPath);

  try {
    const filenames = await fs.readdir(articlesPath);
    return filenames.map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
  } catch (error) {
    console.error('Error reading directory:', error);
    throw new Error(`Could not read the articles directory: ${articlesPath}`);
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src', 'app', 'content', 'articles', `${slug}.mdx`);
  console.log('Reading file from path:', filePath);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    return (
      <div className="article-container max-w-[650px] mx-auto px-6" style={{ fontFamily: 'system-ui' }}>
        <div className="max-w-[720px] mb-10 prose-p:text-[16px] prose-h3:text-[16px] prose-h3:font-semibold prose-p:leading-[24px] prose-h5:text-sm max-md:px-4 max-xl:px-10 max-lg:px-4 prose mx-auto max-md:mt-12 mt-16 prose-li:-ml-2.5 prose-ul:text-[#475467] prose-li:text-[#475467] prose-ul:text-[16px] prose-p:text-[#475467] prose-h2:text-[32px] prose-h2:leading-[40px] prose-h2:text-[#1a1a1a] prose-ul:leading-[24px] prose-li:marker:text-base prose-a:underline prose-a:text-blue-600 prose-a:font-normal prose-li:marker:text-[#475467] prose-li:list-[lower-alpha] prose-li:my-0">
          <MDXRemote source={content} />
        </div>
        <h3 className="font-bold text-[22px] text-[#1a1a1a]">Related Articles</h3>
        <div className="p-3 -mb-4 -ml-4 -mr-4 mt-6 rounded-card sm:-mb-2 sm:-ml-1 sm:-mr-1 sm:mt-8 rounded-lg bg-[#f2f2f2]">
          <div className="pt-2.5 pb-1 text-center">Did this answer your question?</div>
          <div className="flex justify-center">
            <button className="bg-none p-0 w-[50px] h-full inline-block text-center text-[32px] cursor-pointer transition-transform duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] delay-[20ms] origin-[50%_60%] hover:transform hover:scale-125">
              <span title="Disappointed">😞</span>
            </button>
            <button className="bg-none p-0 w-[50px] h-full inline-block text-center text-[32px] cursor-pointer transition-transform duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] delay-[20ms] origin-[50%_60%] hover:transform hover:scale-125">
              <span title="Neutral">😐</span>
            </button>
            <button className="bg-none p-0 w-[50px] h-full inline-block text-center text-[32px] cursor-pointer transition-transform duration-[160ms] ease-[cubic-bezier(0.65,0.61,0.18,1.8)] delay-[20ms] origin-[50%_60%] hover:transform hover:scale-125">
              <span title="Smiley">😃</span>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error reading file:', error);
    return <div>Error loading article content. Please try again later.</div>;
  }
}
