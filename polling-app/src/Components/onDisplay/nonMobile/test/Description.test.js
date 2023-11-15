import React from 'react';
import { render } from '@testing-library/react';
import Description from '../Description';

describe('Description', () => {
  it('displays the poll title and published date', () => {
    const mockData = {
      onDisplayPollData: { title: 'Test Poll', publishedDate: '2021-01-01', answer: { options: [] } },
      setOnDisplayPollData: jest.fn(),
      allPollData: [],
      setAllPollData: jest.fn(),
    };
    const { getByText } = render(<Description {...mockData} />);
    expect(getByText('Test Poll')).toBeInTheDocument();
    expect(getByText('2021-01-01')).toBeInTheDocument();
  });
});
