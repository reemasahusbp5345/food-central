const BestSellerMenu = (MenuList) => {
  return (props) => {
    return (
      <div>
        <div className="text-orange-700 text-sm font-bold absolute ml-14 pt-3">BestSeller</div>
        <MenuList {...props}/>
      </div>
    );
  };
};

export default BestSellerMenu;
