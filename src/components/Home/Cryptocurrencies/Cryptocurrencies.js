import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { H2, P as DefaultP } from "../../Typography"
import { importAll } from "../../../utils"
import wallet from "./wallet.svg"
import { Anchor, AnchorContainer } from "../../Anchor"

const HeroContainer = styled("div")`
  padding: 120px 20px 0px 20px;
  background: rgb(0,0,0,0.1);
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Wrapper = styled("div")`
  max-width: 800px;
`

const P = styled(DefaultP)`
  text-align: center;
`

const WalletAnimation = styled("div")`
  display: flex;
  margin-top: 20px;
  align-items: center;
  width: 500%;
  overflow: hidden;
  height: 120px;
  position: relative;
  left: -195%;
  &:before {
    display: block;
    content: "";
    height: 100%;
    width: 0px;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  &:after {
    display: block;
    content: "";
    height: 3px;
    width: 10px;
    background: white;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
  }

  .wallet {
    position: relative;
    z-index: 10;
  }
`
const Coins = styled(motion.div)`
  display: flex;
  position: absolute;
  left: 0;
  top: 10px;

  img {
    display: inline-block;
    height: 100px;
    margin-right: 20px;
  }
  width: 700%;
`

const rawCoins = importAll(
  require.context("./coins", false, /\.(png|jpe?g|svg)$/)
)

// credit: https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  for (let i=0; i < array.length; i++) {
    if (array[i] === array[i+1] || array[i] === array[i+2]) {
      // this will not work for larger arrays
      shuffle(array);
    }
  }
  return array;
}

const coins = shuffle([...rawCoins, ...rawCoins, ...rawCoins]);

export default function Cryptocurrencies(props) {
  const { scrollYProgress } = useViewportScroll()
  const { t } = useTranslation()
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])
  return (
    <HeroContainer id="home-title">
      <Wrapper>
        <AnchorContainer href={"#home-title"}>
          <H2>
            Use your name everywhere
          </H2>
        </AnchorContainer>
        <P>Set multichain addresses in your Rave Name, and never have to worry about copy-pasting addresses again</P>

        <WalletAnimation>
          <Coins style={{ x: x }}>
            {coins.map((coin, index) => {
              return <img src={coin.src.default} alt={coin.name} key={index} />
            })}
          </Coins>
        </WalletAnimation>
      </Wrapper>
    </HeroContainer>
  )
}
