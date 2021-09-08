import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import MDXComponents from '../components/MDXComponents';

const root = process.cwd();

export const getFiles = async (type) => {
  return fs.readdirSync(path.join(root, 'data', type));
};

export const getFileBySlug = async (type, slug) => {
  const source = slug
    ? fs.readdirSync(path.join(root, 'data', type, `${slug}.mdx`, 'utf8'))
    : fs.readdirSync(path.join(root, 'data', type, `${type}.mdx`, 'utf8'));

  const { data, context } = matter(source);
  const mdxSource = await serialize(context, {
    components: MDXComponents,
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: context.split(/\s+/gu).length,
      readingTime: readingTime(context),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (type) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ];
  }, []);
};
