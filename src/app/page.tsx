import Catalog from "./@catalog/page";
import Hero from "./@hero/page";
import OurPosts from "./@our-posts/page";
import Recommendation from "./@recommendation/page";

export default function Home() {
  return (
    <div className="text-primary">
      <div className="ui-container">
        <Hero />
        <Catalog />
        <Recommendation />
        <OurPosts />
      </div>
    </div>
  );
}
