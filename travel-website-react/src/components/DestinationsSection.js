import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination">
        <img src="/images/kahmir1.jpg" alt="Destination Kashmir" style={{ maxWidth: '300px', height: 'auto' }}/>
        <p>Kashmir, nestled in the northern Indian subcontinent, captivates with its natural splendor and cultural diversity. Often dubbed "Paradise on Earth," the region boasts lush valleys, snow-capped peaks, and serene lakes. Kashmir's rich heritage, encompassing various religious and ethnic communities, adds to its allure. Tourists flock to experience its scenic beauty, indulge in adventurous activities, and savor its delectable cuisine. However, the region also grapples with political tensions, impacting its tourism potential. Despite challenges, Kashmir remains a cherished destination for travelers seeking both tranquility and adventure.
</p>
      </div>
      <div className="destination">
        <img src="/images/kerala.jpg" alt="Destination 1" style={{ maxWidth: '300px', height: 'auto' }}/>
        <p>Kerala, often referred to as "God's Own Country," is a captivating state in the southwestern region of India. Renowned for its lush greenery, tranquil backwaters, pristine beaches, and rich cultural heritage, Kerala offers a unique blend of natural beauty and cultural charm. From the serene backwater cruises in Alleppey and the mist-covered hills of Munnar to the vibrant Kathakali performances and delicious cuisine, Kerala entices visitors with its diverse attractions. Whether exploring the tea plantations of Wayanad or indulging in rejuvenating Ayurvedic therapies, Kerala promises a memorable experience steeped in natural splendor and cultural richness.</p>
      </div>
      <div className="destination">
        <img src="/images/tajmahal.jpg" alt="Destination 1" style={{ maxWidth: '300px', height: 'auto' }}/>
        <p>The Taj Mahal, an iconic symbol of love and architectural masterpiece, stands proudly on the banks of the Yamuna River in Agra, India. Commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this UNESCO World Heritage Site is renowned for its exquisite beauty and grandeur. Crafted from pristine white marble, the Taj Mahal mesmerizes with its intricate carvings, majestic domes, and meticulously landscaped gardens. Millions of visitors flock to admire its timeless elegance and marvel at the craftsmanship that embodies eternal love and devotion.</p>
      </div>
    </section>
  );
}

export default DestinationsSection;
