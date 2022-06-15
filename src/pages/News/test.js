import { screen } from '@testing-library/react';
import News from '../News';

describe('News', () => {
    beforeEach(() => render(<News />))

    test("loads with no featured story", () => {
        const article = screen.queryByRole('article', { name: 'featured story'})
        expect(article).not.toBeInTheDocument();
    });

    test('loads with no jokes', () => {
        const jokesSection = screen.queryByRole('article', { name: 'jokes'});
        expect(jokesSection.textContent).toContain('Tell me some Jokes!')
    })

    test('shows an image of newspapers', () => {
        const image = screen.queryByRole('img', { alt: 'newspapers'});
        expect(image).toBeInTheDocument();
    })
})