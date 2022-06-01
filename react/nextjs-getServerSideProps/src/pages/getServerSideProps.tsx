import { GetServerSideProps, NextPage } from "next";
import Navigation from "../components/Navigation";

interface Props {
  count: number;
}

let count = 0;

const GetServerSidePropsPage: NextPage<Props> = (props) => {
  const { count } = props;

  console.log("render page with count:", count);

  return (
    <div>
      <h1>Hello Main!</h1>
      <Navigation />
      <div>
        <span>count: {count}</span>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  count++;
  console.log("count:", count, "on getServerSideProps");
  return {
    props: {
      count: count,
    },
  };
};

export default GetServerSidePropsPage;
