import { useRouter } from 'next/router';
import Button from '../../components/Button';
import Card from '../../components/Card';
import NewSection from './NewSection';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details for {productId}</h1>
      <Card>
        <p className="mb-4">Here you can display the details of the product with ID: {productId}</p>
        <Button aria-label="Add to Cart" onClick={() => console.log('Added to cart!')}>
          Add to Cart
        </Button>
      </Card>
      <NewSection />
    </div>
  );
};

export default ProductPage;