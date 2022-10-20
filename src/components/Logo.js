import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/ensLogo.svg"
import logoText from "../assets/ensLogoText.svg"
import { P } from "./Typography"

const LogoContainer = styled("div")`
  height: 48px;
  display: flex;

  img {
    display: block;
  }

  .logo {
    width: 75px;
    height: 75px;
    margin-right: 10px;
  }

  .ens-logo-text {
    width: 57px;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={'https://rave.domains/RaveBase.png'} alt="Rave Logo" className="logo" />
    </LogoContainer>
  )
}
