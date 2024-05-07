import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import './Home.css'

const featuredProducts = [
  { name: 'Herbal Tea', description: 'Calming tea blend', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  // More featured products
];

const bestSellingProducts = [
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  // More best selling products
];

const carouselImages = [
  { src: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', alt: 'Slide 1', caption: 'Discover Our Best Sellers' },
  { src: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', alt: 'Slide 2', caption: 'New Arrivals' },
  { src: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', alt: 'Slide 3', caption: 'Seasonal Specials' }
  // Add more images as needed
];

function HomePage() {
  return (
    <div>
      <Carousel>
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={img.src}
              alt={img.alt}
            />
            <Carousel.Caption>
              <h3>{img.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <ProductList products={featuredProducts} title="Featured Products" isCarousel={true} />
      <ProductList products={bestSellingProducts} title="Best Selling Products" isCarousel={false} />
    </div>
  );
}

export default HomePage;
