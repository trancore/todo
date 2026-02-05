import { render } from '@testing-library/react';

import Form from '~/components/container/Form/Form';

const mockSubmit = jest.fn();
const mockChildren = jest.fn(() => <div data-testid="test"></div>);

describe('~/components/container/From/Form.tsx', () => {
  afterEach(() => {
    mockSubmit.mockReset();
  });

  it('childrenを表示する。', () => {
    const { getByTestId } = render(
      <Form submit={mockSubmit}>{mockChildren()}</Form>,
    );
    const children = getByTestId('test');

    expect(children).toBeVisible();
  });
});
