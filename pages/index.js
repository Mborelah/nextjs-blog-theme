import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="mb-12 text-3xl text-center lg:text-5xl">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="transition bg-white border border-b-0 border-gray-800 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-none focus:ring-4">

                {post.data.date && (
                  <p className="mb-3 font-bold uppercase opacity-60">
                    {post.data.date}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                {post.data.description && (
                  <p className="mt-3 text-lg opacity-60">
                    {post.data.description}
                  </p>
                )}
                <ArrowIcon className="mt-4" />

              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunshine Orphanage</title>
  <style>
    /* CSS styles go here */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    header {
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      text-align: center;
    }
    nav {
      background-color: #333;
      overflow: hidden;
    }
    nav a {
      float: left;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    nav a:hover {
      background-color: #ddd;
      color: black;
    }
    .container {
      padding: 20px;
    }
    footer {
      background-color: #333;
      color: white;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>Sunshine Orphanage</h1>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Our Children</a>
    <a href="#">Get Involved</a>
    <a href="#">Contact</a>
  </nav>
  <div class="container">
    <h2>Welcome to Sunshine Orphanage</h2>
    <p>We are a non-profit organization dedicated to providing a safe and nurturing environment for orphaned and abandoned children. Our mission is to give these children the love, care, and support they need to thrive and reach their full potential.</p>
    <h2>Our Impact</h2>
    <p>Since our founding in 2010, we have provided a loving home to over 500 children. Our dedicated staff and volunteers work tirelessly to ensure that each child receives the attention, education, and opportunities they deserve.</p>
    <h2>Get Involved</h2>
    <p>There are many ways you can support our mission and make a difference in the lives of the children at Sunshine Orphanage. You can donate, volunteer, or even become a foster parent. Visit our "Get Involved" page to learn more.</p>
  </div>
  <footer>
    <p>&copy; 2023 Sunshine Orphanage. All rights reserved.</p>
  </footer>
  <script>
    // JavaScript code goes here
  </script>
</body>
</html>