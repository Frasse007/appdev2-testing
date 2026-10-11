import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from '../CartItem';

describe('CartItem Component', () => {
    const mockItem = {
        cartItemId: 123,
        itemname: 'Smart Watch',
        price: 249.99
    };

    test('Should render without crashing', () => {
        render(
        <CartItem item={mockItem} onRemove={() => {}} />
        );
    });

    test('Should display product information from props and contain remove button', () => {
        render(
        <CartItem item={mockItem} onRemove={() => {}} />
        );

        expect(screen.getByText('Smart Watch')).toBeInTheDocument();
        expect(screen.getByText('$249.99')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
    });

    test('Should call onRemove() with cartItemId when remove button is clicked', async () => {
        const handleRemove = vi.fn();
        const user = userEvent.setup();

        render(
        <CartItem item={mockItem} onRemove={handleRemove} />
        );

        const removeButton = screen.getByRole('button', { name: /remove/i });
        await user.click(removeButton);

        expect(handleRemove).toHaveBeenCalledTimes(1);
        expect(handleRemove).toHaveBeenCalledWith(123);
    });
});