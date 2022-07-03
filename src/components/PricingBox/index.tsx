import React from 'react'
import * as S from './styles'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  priceInstallment,
  numberInstallments,
  benefits,
  button
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <small>{numberInstallments}x de</small> R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList>
      <S.BenefitsItem dangerouslySetInnerHTML={{ __html: benefits }} />
    </S.BenefitsList>

    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
      <div>
        <S.ButtonFullPrice>R${totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$289</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
