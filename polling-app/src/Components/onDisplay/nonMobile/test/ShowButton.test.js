import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowButton from '../ShowButton';

describe('ShowButton', () => {
  it('renders buttons based on options provided', () => {
    const mockData = {
      onDisplayPollData: {
        answer: {
          options: [
            { id: 1, label: 'Option 1', count: 1 },
            { id: 2, label: 'Option 2', count: 2 }
          ]
        }
      },
      setOnDisplayPollData: jest.fn(),
      allPollData: [],
      setAllPollData: jest.fn(),
    };
    const { getAllByRole } = render(<ShowButton {...mockData} />);
    expect(getAllByRole('button').length).toBe(2);
  });

  it('calls handleVote on button click', () => {
    const mockHandleVote = jest.fn();
    const mockData = {
        onDisplayPollData: {
        answer: {
          options: [
            { id: 1, label: 'Option 1', count: 1 },
            { id: 2, label: 'Option 2', count: 3 }
          ]
        }
      },
      setOnDisplayPollData: jest.fn(),
      allPollData: [],
      setAllPollData: jest.fn(),
    };

    const { getByTestId } = render(<ShowButton {...mockData} handleVote={mockHandleVote} />);
    fireEvent.click(getByTestId('option-button-1'));
    expect(mockData.setOnDisplayPollData).toHaveBeenCalledWith(
        expect.objectContaining({
          answer: expect.objectContaining({
            options: expect.arrayContaining([
              expect.objectContaining({ id: 1, count: 2 }) // Assuming the count should now be 2
            ])
          })
        })
      );
  });
});
