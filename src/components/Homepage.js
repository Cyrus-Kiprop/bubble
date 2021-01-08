import React from 'react';
import { Helmet } from 'react-helmet';

import Services from './services';
import HeroSection from './HeroSection';
import FunFacts from './fun-facts';
import Testimonials from './Testimonials';
import Footer from './footer';
import Contact from './contacts';
import RecentWorks from './recent-works/index';
import GitRepository from './git-repos/index';
import FeaturedPosts from './featured-posts/index';

const Homepage = () => (
  <main>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Cyrus Kiprop</title>
      <link rel="canonical" href="http://kiprop-kemboi.netlify.com/example" />
    </Helmet>
    <HeroSection />
    <Services />
    <RecentWorks />
    <GitRepository />
    <FeaturedPosts />
    <Testimonials />
    <FunFacts />
    <Contact />
    <Footer />
  </main>
);

export default Homepage;
