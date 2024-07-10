import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../../components/ProductList';
import './Home.css'

const featuredProducts = [
  { name: 'Natural Vitamin', description: 'Calming tea blend', imageUrl: 'https://www.shutterstock.com/shutterstock/photos/162106925/display_1500/stock-photo-natural-vitamin-pills-alternative-medicine-d-162106925.jpg' },
  { name: 'Herbal Tea', description: 'Immune booster', imageUrl: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg' },
  { name: 'Aloevera', description: 'Aloevera', imageUrl: 'https://bhma.info/wp-content/uploads/2020/02/pestle-mortar-460x307-1.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5b869938cc04f.jpg' },
];

const bestSellingProducts = [
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://herbalcosmeticsconsultants.com/wp-content/uploads/2017/06/herbal-product.png' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/041/912/904/small_2x/ai-generated-herbal-and-medical-plants-are-arranged-on-a-wooden-table-photo.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://st.depositphotos.com/1755706/2584/i/450/depositphotos_25846873-stock-photo-herbal-medicine.jpg' },
  { name: 'Echinacea', description: 'Immune booster', imageUrl: 'https://www.asbestos.com/wp-content/uploads/herbal-medicine-1.png' },
];

const carouselImages = [
  { src: 'https://medlineplus.gov/images/HerbalMedicine_share.jpg', alt: 'Slide 1', caption: 'Discover Our Best Sellers' },
  { src: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/8/shutterstock_656977798.jpg', alt: 'Slide 2', caption: 'New Arrivals' },
  { src: 'https://image.shutterstock.com/image-photo/glass-cup-hot-aromatic-tea-260nw-1146290894.jpg', alt: 'Slide 3', caption: 'Seasonal Specials' }
];

function HomePage() {
  return (
    <div>
      <Carousel>
        {carouselImages.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 h-200"
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
