import { PostCard } from "./post-card";

const posts = [
  {
    id: 100,
    image: "/images/posts/01.jpg",
    date: "September 12",
    title: "Cactus & Succulent Care Tips",
    description:
      "Cacti are succulents are easy care plants for any home or patio.",
  },
  {
    id: 101,
    image: "/images/posts/02.jpg",
    date: "September 13",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
  },
  {
    id: 102,
    image: "/images/posts/03.jpg",
    date: "September 15",
    title: "Cacti & Succulent Care Tips",
    description:
      "Cacti and succulents thrive in containers and because most are.",
  },
  {
    id: 103,
    image: "/images/posts/04.jpg",
    date: "September 15",
    title: "Best Houseplants Room by Room",
    description: "The benefits of houseplants are endless. In addition to.",
  },
];

export default function OurPosts() {
  return (
    <section className="mt-32 mb-24">
      <h3 className="font-bold text-3xl text-dark text-center mb-[0.5em]">
        Our Blog Posts
      </h3>
      <p className="text-tertiary text-sm mb-8 text-center">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-11 max-xl:gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              image={post.image}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          );
        })}
      </div>
    </section>
  );
}
