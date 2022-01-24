import { Container } from '@chakra-ui/react';
import React from 'react';
import About from './About';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';
import LatestBlog from './LatestBlog';
import LatestRelease from './LatestRelease';
import LatestVideo from './LatestVideo';
import NewsLetter from './NewsLetter';
import TeamMember from './TeamMember';
import UpcomingShow from './UpcomingShow';
import WhatClientSay from './WhatClientSay';
import WhereIWork from './WhereIWork';

function ComponentContainer() {
  return (
    <>
        <Head />
        <Container maxW='container.xl' >
            <Header />
            <LatestRelease />
            <About />
            <UpcomingShow/>
            <LatestVideo />
            <WhereIWork />
            <TeamMember />
            <LatestBlog />
            <WhatClientSay />
            <NewsLetter />
            <Footer />
        </Container>
      
    </>
  )
}

export default ComponentContainer;
