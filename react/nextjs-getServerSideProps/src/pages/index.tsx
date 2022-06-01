import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";

interface Post {
  id: number;
  title: string;
}

interface MainPageProps {
  name: string;
  posts: Post[];
}

let count = 0;

const MainPage: NextPage<MainPageProps> = (props) => {
  const { name, posts } = props;
  console.log("Logging from IndexPage Component", ++count);
  return (
    <div>
      <h1>Hello {name}!</h1>
      <Link href="/about">about</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Navigation />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<MainPageProps> = async () => {
  console.log("Logging from getServerSideProps", ++count);
  const posts: Post[] = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
  return {
    props: {
      name: "Next",
      posts: posts,
    },
  };
};

export default MainPage;
