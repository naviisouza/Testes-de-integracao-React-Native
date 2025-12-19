// __tests__/InvestmentCard.test.tsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InvestmentCard from '../InvestmentCard';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');

describe('InvestmentCard', () => {
  it('displays the correct investment information', () => {
    const { getByText } = render(
      <InvestmentCard
        code="MXRF11"
        earnings="Rendimento: R$ 0,09"
        amount="R$ 11,52"
        date="DAQUI A 2 DIAS"
      />
    );

    // Corrigido para bater com o valor passado
    expect(getByText('MXRF11')).toBeTruthy();
  });

  it('displays alert when pressing "Mais detalhes"', () => {
    const { getByText } = render(
      <InvestmentCard
        code="MXRF11"
        earnings="Rendimento: R$ 0,09"
        amount="R$ 11,52"
        date="DAQUI A 2 DIAS"
      />
    );

    const botaoMaisDetalhes = getByText("Mais detalhes");

    fireEvent.press(botaoMaisDetalhes);

    expect(Alert.alert).toHaveBeenCalledTimes(1);
    expect(Alert.alert).toHaveBeenCalledWith("Hello World", "Cliquei no botão");
  });
});
