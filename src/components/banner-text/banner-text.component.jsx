import React from "react"
import { BannerTextContainer, BannerTextContent } from "./banner-text.styles"

const BannerText = ({ text }) => (
  <BannerTextContainer>
    <BannerTextContent>{text}</BannerTextContent>
  </BannerTextContainer>
)

export default BannerText