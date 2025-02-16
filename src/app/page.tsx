import Catalog from "./@catalog/page";
import Hero from "./@hero/page";

export default function Home() {
  return (
    <div className="text-primary">
      <div className="ui-container">
        <Hero />
        <Catalog />
      </div>
    </div>
  );
}
