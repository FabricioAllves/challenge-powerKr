import { Search, AlignJustify, Bell } from '@tamagui/lucide-icons';
import { Button as TButton, styled } from 'tamagui';

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
    },
  } as const,

  defaultVariants: {
    background: 'normal',
  },
});
