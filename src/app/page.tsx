import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex text-3xl items-center justify-center min-h-screen">
      <p>Hello World</p>
      <Button variant={"outline"}>Click Me</Button>
    </div>
  );
};

export default Home;
