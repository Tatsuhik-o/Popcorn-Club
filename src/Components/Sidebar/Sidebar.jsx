import "./Sidebar.css";
import PropTypes from "prop-types";

Sidebar.propTypes = {
  setActiveTab: PropTypes.func,
  activeTab: PropTypes.number,
  expand: PropTypes.bool,
};

function Sidebar({ setActiveTab, activeTab, expand }) {
  const icons = [
    <i className="fa-sharp fa-solid fa-house" key={0}></i>,
    <i className="fa-sharp fa-solid fa-film" key={1}></i>,
    <i className="fa-sharp fa-solid fa-tv" key={2}></i>,
    <i className="fa-solid fa-heart" key={3}></i>,
  ];
  const tabs = ["Home", "Movies", "Series", "Favourites"];
  const expandWidth = expand
    ? { width: "150px", marginRight: "10px" }
    : { width: "40px" };
  const tabStyles = expand ? { opacity: "1" } : { opacity: 0 };
  return (
    <div className="sidebar" style={expandWidth}>
      {icons.map((icon, index) => {
        return (
          <div
            className="unique_bar"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <div className={`icons ${activeTab === index && "active"}`}>
              {icon}
            </div>
            <div className="current_tab_name" style={tabStyles}>
              {tabs[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
