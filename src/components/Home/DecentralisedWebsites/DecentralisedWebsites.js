import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { H2, P, Button } from "../../Typography"

import website1 from "./website1.svg"
import website2 from "./website2.png"
import website3 from "./website3.png"
import blur1 from "./blur1.jpg"
import blur2 from "./blur2.jpg"
import { Anchor, AnchorContainer } from "../../Anchor"

const Container = styled("div")`
  background: rgb(0,0,0,0.1);
  padding: 120px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  h2,
  p {
    text-align: center;
    max-width: 750px;
  }
`

const ImageAnimation = styled("div")`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`

const ImageTransition = styled("div")`
  position: relative;
  margin: 0 0px;

  img {
    width: 250px;
    margin-left: -30px;
  }

  img:nth-child(1) {
    left: 10px;
    top: 10px;
    position: relative;
  }

  img:nth-child(2) {
    left: 0;
    top: 0;
    position: absolute;
  }
`

export default function DecentralisedWebsites(props) {
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  })

  return (
    <Container id="home-decentralised-websites">
      <AnchorContainer href={"#home-decentralised-websites"}>
        <H2>
          Host a website on your Rave Name
          <Anchor />
        </H2>
      </AnchorContainer>

      <P>Using IPFS and Rave, you can host a website and use your Name as a domain for it.</P>
      <ImageAnimation ref={ref}>
        <ImageTransition>
          <img src={website1} alt={t("website")} />
        </ImageTransition>
      </ImageAnimation>
      <Button href="https://app.rave.domains/">
        Open app
      </Button>
    </Container>
  )
}
