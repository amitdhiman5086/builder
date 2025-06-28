import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.post.findMany();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {JSON.stringify(users, null, 2)}
      <Button>User</Button>
    </div>
  );
}
