import React from "react";

import Default from "presentation/component/template/Default";

// component
import HeroBanner from "presentation/component/organism/HeroBanner";
import SectionBrowse from "presentation/component/organism/SectionBrowse";
import SectionProduct from "presentation/component/organism/SectionProduct";
import SectionInspirations from "presentation/component/organism/SectionInspiration";
import SectionGallery from "presentation/component/organism/SectionGallery";
import SectionFeature from "presentation/component/organism/SectionFeature";
import Filter from "presentation/component/molecule/Filter";

const Home = () => {
  return (
    <Default>
      <HeroBanner />
      <SectionBrowse title="Browse The Range" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      <SectionProduct title="Our Products" />
      <SectionInspirations title="50+ Beautiful rooms inspiration" description="Our designer already made a lot of beautiful prototipe of rooms that inspire you" />
      <SectionGallery/>
      <SectionFeature/>
      <Filter judul="INI JUDUL" desc="INI DESC"/>
    </Default>
  );
};

export default Home;
