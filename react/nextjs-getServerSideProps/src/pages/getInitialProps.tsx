import { NextPage } from "next";
import Navigation from "../components/Navigation";

interface Props {
  count: number;
}

let count = 0;

const GetInitialPropsPage: NextPage<Props> = (props) => {
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

GetInitialPropsPage.getInitialProps = (ctx) => {
  count++;
  console.log("count:", count, "on getInitialProps");
  return {
    count: count,
  };
};

export default GetInitialPropsPage;
