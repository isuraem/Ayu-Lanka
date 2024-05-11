import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import './Home.css'

const featuredProducts = [
  { name: 'Natural Vitamin', description: 'Calming tea blend', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/162106925/display_1500/stock-photo-natural-vitamin-pills-alternative-medicine-d-162106925.jpg' },
  { name: 'Herbal Tea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Aloevera', description: 'Aloevera', imageUrl: 'https://bhma.info/wp-content/uploads/2020/02/pestle-mortar-460x307-1.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5b869938cc04f.jpg' },
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
