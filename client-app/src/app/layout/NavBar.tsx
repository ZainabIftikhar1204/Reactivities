import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem as={NavLink} to="/" header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10%" }}
            />
            Reactivities
          </MenuItem>
          <MenuItem name="Activities" as={NavLink} to="/activities" />
          <MenuItem>
            <Button
              positive
              content="Create Activity"
              as={NavLink}
              to="/createActivity"
            />
          </MenuItem>
        </Container>
      </Menu>
    </>
  );
}
