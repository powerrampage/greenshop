import { CheapSale } from "@/components/shared";

export default function Recommendation() {
  return (
    <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1 max-md:gap-12">
      <CheapSale
        id={123}
        image="/images/cheap-sale-2.png"
        title="Summer cactus & succulents"
        description={
          "We are an online plant shop offering a wide range of cheap andtrendy plants"
        }
      />
      <CheapSale
        id={124}
        image="/images/cheap-sale-1.png"
        title="Styling Trends & much more"
        description={
          "We are an online plant shop offering a wide range of cheap and trendy plants"
        }
      />
    </div>
  );
}
