import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function Navbar({ openForm }: Props) {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem header>
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ marginRight: "10%" }}
            />
            Reactivities
          </MenuItem>
          <MenuItem name="Activities" />
          <MenuItem name="Activities">
            <Button positive content="Create Activity" onClick={openForm} />
          </MenuItem>
        </Container>
      </Menu>
    </>
  );
}
