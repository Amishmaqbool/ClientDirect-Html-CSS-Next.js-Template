"use client";

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useState, useEffect } from 'react';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
  return (
    <div className="max-w-[720px] mb-10 prose-p:text-[16px] prose-p:leading-[24px] max-md:px-4 max-xl:px-10 max-lg:px-4 prose mx-auto mt-16 prose-li:-ml-2.5 prose-li:list-disc prose-ul:text-[#475467] prose-li:text-[#475467] prose-ul:text-[16px] prose-p:text-[#475467] prose-h2:text-[20px] prose-h2:leading-[30px] prose-h2:text-[#101828] prose-ul:leading-[24px] prose-li:marker:text-[24px] prose-a:no-underline prose-li:marker:text-[#475467] prose-li:my-0">
      <MDXRemote {...source} />
    </div>
  );
};

export default MDXContent;
