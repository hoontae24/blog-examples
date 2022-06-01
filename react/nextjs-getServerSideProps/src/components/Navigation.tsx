import Link from "next/link";
import { FC } from "react";

const Navigation: FC = (props) => {
  return (
    <ul>
      <li>
        <Link href="/">/home</Link>
      </li>
      <li>
        <Link href="/getInitialProps">/getInitialProps</Link>
      </li>
      <li>
        <Link href="/getServerSideProps">/getServerSideProps</Link>
      </li>
    </ul>
  );
};

export default Navigation;
