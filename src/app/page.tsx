import { caller } from "@/trpc/server";

const Page = async() => {
  const data = await caller.hello({text : "Kunal"})
  return <div>
    {JSON.stringify(data)}
  </div>;
};

export default Page;
