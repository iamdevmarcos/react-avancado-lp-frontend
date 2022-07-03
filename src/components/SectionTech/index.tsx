import React from 'react'
import * as S from './styles'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => {
          const imageUrl = getImageUrl(icon.url)

          return (
            <S.Icon key={title}>
              <S.Icons
                src={imageUrl}
                alt={icon.alternativeText}
                loading="lazy"
              />
              <S.IconsName>{title}</S.IconsName>
            </S.Icon>
          )
        })}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
