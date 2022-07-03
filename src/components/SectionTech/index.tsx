import React from 'react'
import * as S from './styles'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionTechProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  data: SectionTechProps
}

const SectionTech = ({ data }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{data.title}</Heading>
      <S.IconsContainer>
        {data.techIcons.map(({ icon }, key) => {
          const imageUrl = getImageUrl(icon.url)

          return (
            <S.Icon key={key}>
              <S.Icons
                src={imageUrl}
                alt={icon.alternativeText}
                loading="lazy"
              />
              <S.IconsName>{icon.alternativeText}</S.IconsName>
            </S.Icon>
          )
        })}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
