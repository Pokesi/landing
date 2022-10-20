import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"
import mq from "../../mediaQuery"
import { MainPageBannerContainer, DAOBannerContent } from "../DAOBanner"
import { Button } from "../Typography"
import D1 from '../../dall-e.png'
import D2 from '../../dall-e2.png'

const Title = styled("h2")`
  font-size: 28px;
  font-weight: 300;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;

  ${mq.medium`
    margin-top: 0;
    -padding: 120px 20px 0;
    font-size: 68px;
  `}
`

const Launch = styled(Button)`
  width: 20%;
  height: 10%;
  border-radius: 30px;
  opacity: 0.7;

  &:hover {
    box-shadow: 10px 10px blur;
  }
`

const A = styled("A")`
  text-decoration: none;
`

const HeroContainer = styled("div")`
  background-image: linear-gradient(90deg, #03045e 0%, #ECc052 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 16px;
  min-height: calc(100% - 5vh);
`

export default function Hero(props) {
  const { t } = useTranslation();

  const getText = () => {
    const texts = ["fully decentralised identities for the masses", "the cheapest web3 identities in crypto", "decentralised website naming"];
    return texts[Math.floor(Math.random() * texts.length)];
  }

  const text = getText();

  return (
    <HeroContainer>
      {/*<MainPageBannerContainer>
        <DAOBannerContent />
      </MainPageBannerContainer>*/}
      <Title><b>Rave Names is {text}</b></Title>
    </HeroContainer>
  )
}
