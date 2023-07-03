import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('Disappearing elements', () => {
  test('Element removed from the DOM', () => {
    // Render the component
    const { container, getByTestId } = render(<MyComponent />);

    // Perform the action or trigger the event that should cause the element to disappear
    fireEvent.click(getByTestId('disappear-button'));

    // Assert that the element is no longer present in the DOM
    expect(container.querySelector('.disappearing-element')).toBeNull();
  });

  test('Element becomes hidden', () => {
    // Render the component
    const { container, getByTestId } = render(<MyComponent />);

    // Perform the action or trigger the event that should hide the element
    fireEvent.click(getByTestId('hide-button'));

    // Assert that the element is still present in the DOM
    expect(container.querySelector('.disappearing-element')).toBeInTheDocument();

    // Assert that the element has the appropriate CSS class that signifies it's hidden
    expect(container.querySelector('.disappearing-element')).toHaveClass('hidden');
  });

  test('Transition animation', async () => {
    // Render the component
    const { container, getByTestId } = render(<MyComponent />);

    // Perform the action or trigger the event that should initiate the disappearance
    fireEvent.click(getByTestId('disappear-button'));

    // Assert that the element starts the transition animation
    expect(container.querySelector('.disappearing-element')).toHaveClass('transitioning');

    // Wait for the animation to complete
    await waitForElementToBeRemoved(() => container.querySelector('.disappearing-element'));

    // Assert that the element is no longer visible or removed from the DOM
    expect(container.querySelector('.disappearing-element')).toBeNull();
  });

  test('Parent element visibility', () => {
    // Render the component
    const { container, getByTestId } = render(<MyComponent />);

    // Perform the action or trigger the event that should cause the child element to disappear
    fireEvent.click(getByTestId('child-disappear-button'));

    // Assert that the parent element is no longer visible or removed from the DOM
    expect(container.querySelector('.parent-element')).toBeNull();
  });
});