// src/components/FAQ.tsx
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory where your MDX files are located
const articlesDirectory = path.resolve('src/contents/articles');

// Function to read and parse MDX files
const getArticles = () => {
    const files = fs.readdirSync(articlesDirectory);
    const articles = files.map(file => {
        const filePath = path.join(articlesDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent); // Extract frontmatter
        return {
            title: data.title,
            description: data.description,
            slug: file.replace('.mdx', '') // Use the file name as the slug
        };
    });
    return articles;
};

// Fetch articles
const articles = getArticles();

const FAQ: React.FC = () => {
    return (
        <div className="faq-container">
            <h1>FAQ Articles</h1>
            {articles.map(article => (
                <div className="faq-item" key={article.slug}>
                    <h2>
                        <a href={`/articles/${article.slug}`}>{article.title}</a>
                    </h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
