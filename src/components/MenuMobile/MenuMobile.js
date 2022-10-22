import React, { useState } from "react"
import { Link } from "gatsby"

import { useDisableBodyScroll } from "hooks/useDisableBodyScroll"
import * as Styled from "./MenuMobile.styled"

function MenuMobile(props) {
  const [open, setOpen] = useState(false)

  useDisableBodyScroll(open)

  return (
    <Styled.Container>
      <Styled.Hamburger onClick={() => setOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Styled.Hamburger>

      <Styled.Menu open={open}>
        <Styled.ButtonClose onClick={() => setOpen(false)}></Styled.ButtonClose>
        <Styled.MenuList>
          <Styled.MenuItem>
            <Link activeClassName="active" to="/">
              Trang chủ
            </Link>
          </Styled.MenuItem>
          {/* <Styled.MenuItem>
            <Link activeClassName="active" to="/khoa-hoc-offline">
              Khoá học Offline
            </Link>
          </Styled.MenuItem> */}
          <Styled.MenuItem>
            <Link activeClassName="active" to="/khoa-hoc-online">
              Khoá học Online
            </Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link activeClassName="active" to="/artwork">
              Artwork
            </Link>
          </Styled.MenuItem>
        </Styled.MenuList>
      </Styled.Menu>
    </Styled.Container>
  )
}

export default MenuMobile
