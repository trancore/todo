import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Icon from '~/components/container/Icon/Icon';

const mockClickIcon = jest.fn();

describe('~/component/container/Icon/Icon.tsx', () => {
  const user = userEvent.setup();

  const mockProps = {
    presentational: {
      name: 'Check' as const,
      size: 16 as const,
      color: undefined,
    },
    clickIcon: mockClickIcon,
  };

  beforeEach(() => {
    mockClickIcon.mockReset();
    cleanup();
  });

  describe('アイコン表示', () => {
    it.each([
      'Check',
      'Close',
      'Error',
      'Menu',
      'None',
      'PersonOff',
      'Plus',
      'SquareEdit',
      'TrashCan',
      'Uncheck',
      'UserCircle',
    ] as const)('%sアイコンを表示する。', async (input) => {
      const iconName = input;
      const { container } = render(
        <Icon
          presentational={{
            name: iconName,
            size: mockProps.presentational.size,
            color: mockProps.presentational.color,
          }}
          clickIcon={mockProps.clickIcon}
        />,
      );
      const iconElement = container.querySelector(`#${iconName}`);

      expect(iconElement).not.toBeNull();
    });
  });

  describe('サイズ表示', () => {
    it.each([16, 24, 32, 48, 64, 128] as const)(
      'サイズ%iで表示する。',
      async (iconSize) => {
        const { container } = render(
          <Icon
            presentational={{
              name: mockProps.presentational.name,
              size: iconSize,
              color: mockProps.presentational.color,
            }}
            clickIcon={mockProps.clickIcon}
          />,
        );
        const iconElement = container.querySelector(
          `#${mockProps.presentational.name}`,
        );

        expect(iconElement).not.toBeNull();
      },
    );
  });

  describe('カラー表示', () => {
    // stroke属性を持つアイコンがないため、一旦コメントアウトする。
    // it('stroke属性を持つアイコンでカラーで表示する。', async () => {
    //   const iconName = '' as const;
    //   const color = '#000000';
    //   const { container } = render(
    //     <Icon
    //       presentational={{
    //         name: iconName,
    //         size: mockProps.presentational.size,
    //         color: color,
    //       }}
    //       clickIcon={mockProps.clickIcon}
    //     />,
    //   );
    //   const iconElement = container.querySelector(`#${iconName}`);

    //   expect(iconElement).toHaveAttribute('stroke');
    //   expect(iconElement).not.toHaveAttribute('fill');
    // });

    it('stroke属性を持たないアイコンでカラーで表示する。', async () => {
      const color = '#000000';
      const { container } = render(
        <Icon
          presentational={{
            name: mockProps.presentational.name,
            size: mockProps.presentational.size,
            color: color,
          }}
          clickIcon={mockProps.clickIcon}
        />,
      );
      const iconElement = container.querySelector(
        `#${mockProps.presentational.name}`,
      );

      expect(iconElement).not.toHaveAttribute('stroke');
      expect(iconElement).toHaveAttribute('fill', color);
    });
  });

  describe('ボタン押下', () => {
    it('アイコンボタンを押下すると、propsで渡したclickIconを発火する。', async () => {
      const { container } = render(
        <Icon
          presentational={{
            name: mockProps.presentational.name,
            size: mockProps.presentational.size,
            color: mockProps.presentational.color,
          }}
          clickIcon={mockProps.clickIcon}
        />,
      );
      const styledIconElement = container.querySelector(
        `#styled-${mockProps.presentational.name}-icon`,
      );
      const iconElement = container.querySelector(
        `#${mockProps.presentational.name}`,
      );

      expect(iconElement).not.toBeNull();

      await user.click(iconElement!);
      await waitFor(() => {
        expect(styledIconElement).toHaveStyle({ cursor: 'pointer' });
        expect(mockClickIcon).toHaveBeenCalled();
      });
    });

    it('アイコンボタン押下しても、発火しない。', async () => {
      const { container } = render(
        <Icon
          presentational={{
            name: mockProps.presentational.name,
            size: mockProps.presentational.size,
            color: mockProps.presentational.color,
          }}
          clickIcon={undefined}
        />,
      );
      const styledIconElement = container.querySelector(
        `#styled-${mockProps.presentational.name}-icon`,
      );
      const iconElement = container.querySelector(
        `#${mockProps.presentational.name}`,
      );

      expect(iconElement).not.toBeNull();

      await user.click(iconElement!);
      await waitFor(() => {
        expect(styledIconElement).toHaveStyle({ cursor: 'default' });
        expect(mockClickIcon).toHaveBeenCalledTimes(0);
      });
    });
  });
});
