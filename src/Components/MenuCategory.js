import MenuList from "./MenuList";
import BestSellerMenu from "./BestSellerMenu";

const MenuCategory = ({ category, showMenuList, setShowMenuList }) => {
  const ShowBestSellerMenu = BestSellerMenu(MenuList);
  const handleSetShowMenuList = () => {
    setShowMenuList();
  };
  return (
    <div>
      {category?.itemCards?.length && (
        <div className="bg-slate-50 m-2 p-2 shadow-lg cursor-pointer">
          <div className="flex justify-between ">
            <div className="font-bold text-lg">
              {category?.title} ({category?.itemCards?.length})
            </div>
            <div onClick={handleSetShowMenuList}>🔽</div>
          </div>
          {showMenuList && (
            <div>
              {category?.itemCards?.map((menuList) =>
                menuList?.card?.info?.isBestseller ? (
                  <ShowBestSellerMenu
                    menu={menuList}
                    key={menuList?.card?.info?.id}
                  />
                ) : (
                  <MenuList menu={menuList} key={menuList?.card?.info?.id} />
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
