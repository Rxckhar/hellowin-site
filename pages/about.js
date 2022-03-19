import Menu from "../components/menu";

export default function About() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
           <Menu> </Menu>
        </div>
        <div className="site__content">
          <div className="content__about">
              Эбаут
          </div>
        </div>
      </div>
    </div>
  )
}
