import React from 'react';

import Services from './services';
import HeroSection from './HeroSection';
import FunFacts from './fun-facts';
import Testimonials from './Testimonials';
import Footer from './footer';
import Contact from './contacts';
import RecentWorks from './recent-works/index';
import GitRepository from './git-repos/index';
import FeaturedPosts from './featured-posts/index';

const Homepage = ({ children }) => (
  <main>
    <HeroSection />
    <Services />
    <RecentWorks />
    <GitRepository />
    <FeaturedPosts />
    <Testimonials />
    <FunFacts />
    <Contact />
    {/* <HorizontalSlider/> */}
    <Footer />
  </main>
);

export default Homepage;
