import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SmallAngle from "../../../assets/svgs/small-angle.svg";
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

const articlesDirectory = path.join(process.cwd(), 'src', 'app', 'content', 'articles');

const getArticles = async () => {
  const files = await fs.readdir(articlesDirectory);
  const articles = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(articlesDirectory, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title,
        description: data.description,
        slug: file.replace(".mdx", ""),
      };
    })
  );
  return articles;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const formattedTitle = slug
    .replace(/-/g, ' ')  
    .replace(/\b\w/g, (char) => char.toUpperCase());  

  return {
    title: `${formattedTitle} | ClientiDirect Centru de Ajutor`,
    description: `Găsiți toate informațiile despre ${formattedTitle} în Centrul de Ajutor ClientiDirect. Obțineți răspunsuri la întrebările dvs. despre acest subiect.`,
    metadataBase: new URL(`https://clientidirect.com/faq/${slug}`),
  };
}

export async function generateStaticParams() {
  const articlesPath = path.join(process.cwd(), 'src', 'app', 'content', 'articles');
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
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContent);
    const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
    const articles = await getArticles();

    return (
      <div className="pt-9 article-container max-w-[650px] mx-auto px-6" style={{ fontFamily: "system-ui" }}>
        <nav className="flex gap-2 items-center text-sm mb-4">
          <Link href="/faq"><span className='hover:text-black text-gray-400 cursor-pointer'>FAQ</span></Link>
          <Image src={SmallAngle} alt="Small Angle" />
          <span className="text-gray-400">{formattedSlug}</span>
        </nav>

        <div className="prose-h2:mb-0 max-w-[720px] mb-10 prose-p:text-[16px] prose-h3:text-[16px] prose-h3:font-semibold prose-p:leading-[24px] prose-h5:text-sm max-md:px-4 max-xl:px-10 max-lg:px-4 prose mx-auto max-md:mt-12 mt-12 prose-li:-ml-2.5 prose-ul:text-[#475467] prose-li:text-[#475467] prose-ul:text-[16px] prose-p:text-[#475467] prose-h2:text-[32px] prose-h2:leading-[40px] prose-h2:text-[#1a1a1a] prose-ul:leading-[24px] prose-li:marker:text-base prose-a:underline prose-a:text-blue-600 prose-a:font-normal prose-li:marker:text-[#475467] prose-li:list-[lower-alpha] prose-li:my-0">
          <MDXRemote source={content} />
        </div>

        <h3 className="font-bold text-[22px] text-[#1a1a1a]">Related Articles</h3>

        <div className="mt-5 px-3 py-4 border rounded-lg border-[#E6E6E6]">
          {articles.slice(0, 5).map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`}>
              <div
                className="faq-item article-section group flex justify-between items-center rounded-md cursor-pointer transition-all duration-300 p-3"
                key={article.slug}
              >
                <div className="max-w-[510px]">
                  <h2 className="font-normal text-base text-[#1a1a1a] group-hover:text-[#2B61DE] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="pt-2 font-normal text-base text-[#737373] transition-colors duration-300">
                    {article.description}
                  </p>
                </div>
                <div className="transition-colors duration-300">
                  <Image
                    className="transition-colors duration-300"
                    src={SmallAngle}
                    alt="Chevron Right"
                    style={{ marginLeft: '20px' }}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

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
