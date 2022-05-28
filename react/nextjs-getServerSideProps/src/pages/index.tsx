import Link from "next/link";

const MainPage = () => {
  return (
    <div>
      <h1>Hello Main!</h1>
      <Link href="/about">/about</Link>
    </div>
  );
};

export default MainPage;
