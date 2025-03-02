import Hero from "./_sections/hero/page";
import Catalog from "./_sections/catalog/page";
import Recommendation from "./_sections/recommendation/page";
import OurPosts from "./_sections/our-posts/page";

export default function Page() {
  return (
    <main>
      <div className="ui-container">
        <Hero />
        <Catalog />
        <Recommendation />
        <OurPosts />
      </div>
    </main>
  );
}
