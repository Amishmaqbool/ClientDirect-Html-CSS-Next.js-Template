import Image from "next/image";
import React from "react";
import ChatIcon from "../../assets/svgs/chat.svg";
import ChevronRight from "../../assets/svgs/chevron-right.svg";
import Avatar from "../../assets/images/avatar.jpg";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Snitcher Help Center",
  description:
    "Get answers to all the questions you have about Snitcher.",
  metadataBase: new URL("https://snitchers.vercel.app/faq"),
};

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
    <div className="faq-container pt-9" style={{ fontFamily: "system-ui" }}>
      <div className="max-w-[960px] mx-auto px-6">
        <Image
          src={ChatIcon}
          alt="Chat Icon"
          width={40}
          height={40}
        />
        <h1 className="pt-5 font-bold text-[32px] text-[#1a1a1a]">FAQ</h1>
        <p className="font-normal text-base text-[#1a1a1a]">
          Get answers to all the questions you have about Snitcher.
        </p>

        <div className="pt-5 flex gap-2 items-center">
          <Image
            src={Avatar}
            alt="Jerre"
            className="rounded-full"
            width={24}
            height={24}
          />
          <p className="flex items-center font-normal text-sm text-[#737373]">
            De Jerre <span className="px-2 text-2xl"> · </span> 11 articole
          </p>
        </div>

        <div className="mt-10 max-sm:pl-5 px-3 py-4 border rounded-lg border-[#E6E6E6]">
          {articles.map((article) => (
            <a key={article.slug} href={`/articles/${article.slug}`}>
              <div
                className="faq-item article-section group flex justify-between items-center rounded-md cursor-pointer transition-all duration-300 sm:p-3"
                key={article.slug}
              >
                <div className="max-sm:pt-3.5 max-w-[800px]">
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
                    style={{ marginLeft: "20px" }}
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
