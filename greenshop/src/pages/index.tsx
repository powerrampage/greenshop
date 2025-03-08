import React from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import NewSection from './shop/NewSection';

const HomePage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to GreenShop</h1>
            <p className="mb-4">Your one-stop shop for all things green!</p>
            <Button aria-label="Shop Now" className="mb-4">Shop Now</Button>
            <Card>
                <h2 className="text-xl font-semibold">Featured Products</h2>
                <p>Check out our latest and greatest products!</p>
            </Card>
            <NewSection />
        </div>
    );
};

export default HomePage;