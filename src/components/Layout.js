import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.ico"
import twitter from "../assets/twitter.png"

export default function Layout({ children, data, location }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "The first web3 username system on Fantom",
          },
          {
            name: "keywords",
            content:
              "Rave, Names, Rave Names, ENS, blockchain, names, domains, fantom, .ftm name, fantom domains, .ftm, ftm domains",
          },
          {
            name: "googlebot",
            content:
              "index, follow",
          },
          {
            name: "robots",
            content:
              "index, follow",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:title",
            content: "Rave Names",
          },
          {
            name: "twitter:site",
            content: "@rave_names",
          },
          {
            property: "og:description",
            content: "The first web3 username system on Fantom",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image",
            content: `https://rave.domains/ogimage.png`,
          },
          {
            property: "og:image:alt",
            content: `Rave Names`,
          },
          {
            property: "og:image:width",
            content: `1031px`,
          },
          {
            property: "og:image:height",
            content: `487px`,
          },
          {
            property: "og:site_name",
            content: `Rave Names`,
          },
          {
            property: "og:title",
            content: `Rave Names`,
          },
          {
            property: "og:url",
            content: `https://rave.domains`,
          },
        ]}
        title={"Rave Names"}
        link={[
          { rel: "shortcut icon", type: "image/x-icon", href: `https://app.rave.domains/RaveBase.png` },
        ]}
      />
      <Global
        styles={css`
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: ${location?.pathname === '/governance' ? '100%' : 'initial'};
          }
          body {
            font-family: Inter;
          }
          #gatsby-focus-wrapper {
            height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}
