import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import * as Styled from "./MenuMobile.styled"

function MenuMobile(props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add("noscroll")
    } else {
      document.body.classList.remove("noscroll")
    }
    return () => {
      document.body.classList.remove("noscroll")
    }
  }, [open])

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
          <Styled.MenuItem>
            <Link activeClassName="active" to="/khoa-hoc">
              Khoá học
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
