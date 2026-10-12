import { render, waitFor } from '@testing-library/react';
import App from '../App';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

// Allows setting of values to an otherwise read-only property
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  configurable: true,
});

describe('App localStorage Integration', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  test('Should load cart from localStorage on component mount', () => {
    const savedCart = JSON.stringify([
      { cartItemId: 1, itemname: 'Wireless Headphones', price: 99.99 }
    ]);
    localStorageMock.getItem.mockReturnValue(savedCart);

    render(
    <App/>
    );

    expect(localStorageMock.getItem).toHaveBeenCalledWith('shopping_cart');
  });

  test('Should save cart to localStorage when cart changes', async () => {
    localStorageMock.getItem.mockReturnValue('[]');

    render(
    <App/>
    );

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('shopping_cart', '[]');
    });
  });
  
  test('Should persist cart across component remounts/browser opening and closing', async () => {
    localStorageMock.getItem.mockReturnValue('[]');
    const { unmount } = render(<App />);
    const testCart = [{ cartItemId: 1, itemname: 'Wireless Headphones', price: 99.99 }];

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('shopping_cart', '[]');
    });

    unmount();

    localStorageMock.getItem.mockReturnValue(JSON.stringify(testCart));

    render(
    <App/>
    );

    expect(localStorageMock.getItem).toHaveBeenCalledWith('shopping_cart');
  });

  test('Should handle corrupted localStorage data without crashing', () => {
    localStorageMock.getItem.mockReturnValue('{not valid json');
    expect(() => render(<App />)).not.toThrow();
    });
});