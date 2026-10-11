import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../ProductCard';

describe('ProductCard Component', () => {
    const mockProduct = {
        id: 1,
        itemname: 'Wireless Headphones',
        price: 99.99,
        image: 'https://placehold.co/600x400',
        description: 'Noise-cancelling headphones'
    };

    test('Should render without crashing', () => {
        render(
            <BrowserRouter>
                <ProductCard product={mockProduct} onAddToCart={() => {}}/>
            </BrowserRouter>
        )    
    });

    test('Should display product information from props and contain add to cart button', () => {
        render(
            <BrowserRouter>
                <ProductCard product={mockProduct} onAddToCart={() => {}} />
            </BrowserRouter>
        );

        expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
        expect(screen.getByText('$99.99')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });

    test('Should call onAddToCart() with mockProduct when button is clicked', async () => {
        const handleAddToCart = vi.fn();
        const user = userEvent.setup();

        render(
            <BrowserRouter>
                <ProductCard product={mockProduct} onAddToCart={handleAddToCart} />
            </BrowserRouter>
        );

        const button = screen.getByRole('button', { name: /add to cart/i });
        await user.click(button);

        expect(handleAddToCart).toHaveBeenCalledTimes(1);
        expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
    });
});