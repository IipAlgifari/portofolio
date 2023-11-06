const ExploreMore = (props) => {
    const { children } = props;
    return (
      <a {...props} className="explore-more">
        {children}
      </a>
    );
  };
  
  export default ExploreMore;