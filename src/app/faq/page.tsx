import Image from "next/image";
import React from "react";
import ChatIcon from "../../assets/svgs/chat.svg";
import ChevronRight from "../../assets/svgs/chevron-right.svg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.resolve("src/app/content/articles");

const getArticles = () => {
  const files = fs.readdirSync(articlesDirectory);
  const articles = files.map((file) => {
    const filePath = path.join(articlesDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      title: data.title,
      description: data.description,
      slug: file.replace(".mdx", ""),
    };
  });
  return articles;
};
const articles = getArticles();
const FAQ: React.FC = () => {
  return (
    <div className="faq-container" style={{ fontFamily: "system-ui" }}>
      <div className="max-w-[960px] mx-auto px-6">
        <Image
          className="pt-8"
          src={ChatIcon}
          alt="Chat Icon"
          width={40}
          height={40}
        />
        <h1 className="pt-5 font-bold text-[32px] text-[#1a1a1a]">FAQ</h1>
        <p className="font-normal text-base text-[#1a1a1a]">
          Get answers to all the questions you have about Snitcher.
        </p>
        <div className="mt-10 px-3 py-4 border rounded-lg border-[#E6E6E6]">
          {articles.map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`}>
              <div
                className="faq-item group flex justify-between items-center rounded-md cursor-pointer transition-all duration-300 p-3"
                key={article.slug}
              >
                <div className="max-w-[800px]">
                  <h2 className="font-normal text-base text-[#1a1a1a] group-hover:text-[#2B61DE] transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="pt-2 font-normal text-base text-[#737373] transition-colors duration-300">
                    {article.description}
                  </p>
                </div>
                <div className="p-3 group-hover:bg-custom-hover transition-colors duration-300">
                  <Image
                    className="transition-colors duration-300"
                    src={ChevronRight}
                    alt="Chevron Right"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
