import * as React from "react";
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import {
  Avatar,
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Popup } from "@progress/kendo-react-popup";
import "./Navbar.css";
let kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const anchor = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <AppBar>
        <AppBarSection className="title">
          <Link to="/">
            <h1 className="title">IIIT N</h1>
          </Link>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />


        <AppBarSection className="appbar-items">
          <ul className="appbar">
            {/* <li><span>ADMIN</span></li> */}
            <Link to="/registration">
              <li>
                <span>REGISTRATION</span>
              </li>
            </Link>
            <Link to="/feedback">
              <li>
                <span>FEEDBACK</span>
              </li>
            </Link>
            <Link to="/admin">
              <li>
                <span>Admin</span>
              </li>
            </Link>
          </ul>
        </AppBarSection>


        <AppBarSpacer />

        <AppBarSection className="appbar-items">
          <ul className="appbar">
            {/* <li><span>ADMIN</span></li> */}
            <Link to="/login">
              <li>
                <span>LOGIN / SIGN UP</span>
              </li>
            </Link>
          </ul>
        </AppBarSection>

        {/* <AppBarSection className="user-actions">
            <button className="k-button k-button-clear">
              <BadgeContainer>
                <span className="k-icon k-i-bell" />
                <Badge shape="dot" themeColor="info" size="small" position="inside" />
              </BadgeContainer>
            </button>
            <span className="k-appbar-separator" />
          </AppBarSection> */}
        {/* <AppBarSection>
          <button
            className="k-button k-button-clear overflow-button"
            ref={anchor}
            onClick={handleClick}
          >
            <span className="k-icon k-i-menu" />
          </button>
          <Popup
            anchor={anchor.current}
            show={show}
            style={{
              marginLeft: -10,
            }}
          >
            <div className="content">
              <ul>
                <li>
                  <span>What's New</span>
                </li>
                <li>
                  <span>About</span>
                </li>
                <li>
                  <span>Contacts</span>
                </li>
                <li>
                  <span>My Profile</span>
                </li>
                <li>
                  <span>Notifications</span>
                </li>
              </ul>
            </div>
          </Popup>
          <Avatar shape="circle" type="image">
            <img src={kendokaAvatar} />
          </Avatar>
        </AppBarSection> */}
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
