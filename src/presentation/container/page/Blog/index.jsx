import Default from "presentation/component/template/Default";

// component

import SectionBanner from "presentation/component/organism/SectionBanner";
import SectionFeature from "presentation/component/organism/SectionFeature";
import SectionBlog from "presentation/component/organism/SectionBlog";


const Blog = () => {
  return (
    <Default>
      <SectionBanner logo="asset/images/logo/logo-furniture.svg" img="asset/images/banner/section-banner.jpg" title="Blog" navprev="Home" nav="Blog" />
      <SectionBlog/>
      <SectionFeature />
    </Default>
  );
};

export default Blog;
