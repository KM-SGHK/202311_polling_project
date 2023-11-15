import React from 'react';
import { render } from '@testing-library/react';
import PollOnDisplay from '../PollOnDisplay';

describe('PollOnDisplay', () => {
  it('renders without crashing', () => {
    const mockData = {
      onDisplayPollData: { title: 'Test Poll', publishedDate: '2021-01-01', answer: { options: [] } },
      allPollData: [],
      setAllPollData: jest.fn(),
      setOnDisplayPollData: jest.fn(),
    };
    const { getByText } = render(<PollOnDisplay {...mockData} />);
    expect(getByText('Test Poll')).toBeInTheDocument();
  });
});
