import React from 'react'
import * as S from './styles'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { SectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

type Props = {
  data: SectionAboutProjectProps
}

const SectionAboutProject = ({ data }: Props) => {
  const IMAGE_URL = getImageUrl(data.image.url)

  return (
    <S.Wrapper>
      <Container>
        <S.Container>
          <S.Image>
            <source srcSet={IMAGE_URL} type="image/webp" />
            <source srcSet={IMAGE_URL} type="image/png" />
            <img
              src={IMAGE_URL}
              loading="lazy"
              alt={data.image.alternativeText}
            />
          </S.Image>
          <div>
            <Heading>{data.title}</Heading>
            <S.Text>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${data.description}`
                }}
              />
            </S.Text>
          </div>
        </S.Container>
      </Container>
    </S.Wrapper>
  )
}

export default SectionAboutProject
