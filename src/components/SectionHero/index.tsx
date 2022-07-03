import React from 'react'
import * as S from './styles'

import Container from 'components/Container'
import Logo from 'components/Logo'
import Button from 'components/Button'

import { HeaderProps, LogoProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'
import { gaEvent } from 'utils/ga'

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
