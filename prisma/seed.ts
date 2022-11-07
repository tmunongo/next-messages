import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const intro = await prisma.post.create({
    data: {
      name: "TOAA",
      body: "Welcome to my little web app. Check out my other work https://www.tawandamunongo.tech",
    },
  });
  const intro1 = await prisma.post.create({
    data: {
      name: "TOAA",
      body: "Where my portfolio live https://github.com/tmunongo",
    },
  });

  console.log({ intro, intro1 });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
