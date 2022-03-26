import Menu from "../components/menu";

export default function Category() {
  return (
    <div className="site">
      <div className="site_wrapper">
        <div className="site_menu">
          <Menu></Menu>
        </div>
        <div className="site_content">
          <div className="content_category">
          <div className="category">Favorite Scare Category</div>
           <div className="cats">
            <div className="Ghosts">
              <div className="ghosts_img"></div>
              <div className="ghosts_about"><p>Ghosts</p> Choose the ghosts, the scariest there are.</div>
              </div>
            <div className="Pumpkins">
              <div className="pump_img"></div>
              <div className="pump_about">
                <p>Pumpkins</p> You look at the scariest pumpkins there is.
              </div>
            </div>
            <div className="Witch_Hat">
            <div className="witch_img"></div>
              <div className="witch_about">
                <p>Witch Hat</p> Pick the most stylish withc hats out there.
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
