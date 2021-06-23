import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../lib/api";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>つむぎスケッチ</title>
        </Head>
        <Container>
          <header className="bg-gray-700 font-index text-gray-300">
            <div className="px-8 py-14">
              <h1 className="text-center">
                <a
                  className="text-4xl"
                  href="https://tamago.baroqueengine.net/"
                >
                  つむぎスケッチ
                </a>
              </h1>
            </div>
          </header>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-2 max-w-4xl m-auto px-8 py-14">
            {allPosts.map((post, i) => (
              <Link key={i} href={post.slug}>
                <div>
                  <div className="text-gray-300">{post.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
}
