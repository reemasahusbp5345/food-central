const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-green-800 text-white font-bold p-2 m-3 rounded-lg">Veg</div>
        <RestaurantCard {...props}/>
      </>
    );
  };
};

export default withVegLabel;
