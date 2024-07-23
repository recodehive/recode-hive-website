// pages/docs/[...slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { NextraThemeLayout } from 'nextra-theme-docs';

const docsDirectory = path.join(process.cwd(), 'docs');

export default function DocPage({ source, frontMatter }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return <MDXRemote {...source} />;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(docsDirectory);

  const paths = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    return {
      params: {
        slug: [slug]
      }
    };
  });

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug.join('/');
  const filePath = path.join(docsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
