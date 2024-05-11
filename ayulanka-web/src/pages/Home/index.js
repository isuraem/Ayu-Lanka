import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import './Home.css'

const featuredProducts = [
  { name: 'Natural Vitamin', description: 'Calming tea blend', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/162106925/display_1500/stock-photo-natural-vitamin-pills-alternative-medicine-d-162106925.jpg' },
  { name: 'Herbal Tea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Aloevera', description: 'Aloevera', imageUrl: 'https://images.app.goo.gl/6MdDHNTvdN772Zuv8' },
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
