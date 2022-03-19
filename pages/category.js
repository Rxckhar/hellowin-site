import Menu from "../components/menu";

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
           <Menu> </Menu>
        </div>
        <div className="site__content">
          <div className="content__category">
              Favorite Scare Category
          </div>
        </div>
      </div>
    </div>
  )
}
