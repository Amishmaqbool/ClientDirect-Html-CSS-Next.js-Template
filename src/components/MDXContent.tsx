"use client"; 

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const MDXContent: React.FC<MDXContentProps> = ({ source }) => {
  return (
    <div className="mdx-content">
      <MDXRemote {...source} />
    </div>
  );
};

export default MDXContent;
