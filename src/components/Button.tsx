import { Search, AlignJustify, Bell, PieChart, CircleUserRound } from '@tamagui/lucide-icons';
import { Button as TButton, styled } from 'tamagui';

const icons = {
  CircleUserRound,
  PieChart,
};

type Props = {
  icons?: keyof typeof icons; // Usa o tipo para garantir que apenas ícones válidos sejam passados
};

export const Button = styled(TButton, {
  w: '$5',
  h: '$5',

  pressStyle: {
    backgroundColor: '#121926',
    borderWidth: 0,
  },

  variants: {
    background: {
      normal: {
        bg: 'teste',
      },
      outline: {
        borderWidth: '$1',
        borderColor: '$red10',
      },
    },

    buttonType: {
      buttonMenu: {
        icon: AlignJustify,
        size: '$8',
      },

      buttonSearch: {
        icon: Bell,
        size: '$8',
      },

      buttonOption: {
        w: '48%',
        h: '$3.5',
        borderWidth: '$0.2',
        borderColor: 'white',
        size: '$6',
        br: '$12',
        icon: PieChart,
      },
    },
  } as const,

  defaultVariants: {
    background: 'normal',
  },
}) as React.FC<Props & (typeof TButton)['defaultProps']>;
