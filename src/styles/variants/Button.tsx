import { AlignJustify, Bell } from '@tamagui/lucide-icons';
import { Button as TButton, styled } from 'tamagui';

export const Button = styled(TButton, {
  w: '$5',
  h: '$5',

  variants: {
    buttonSelection: {
      buttonOption: {
        w: '48%',
        h: '$3.5',
        size: '$6',
        br: '$12',
        bg: 'rgba(255, 255,255, 0.1)',
        borderWidth: '$0.1px',
        borderColor: 'white',
        pressStyle: {
          bg: '#706f6f',
        },
      },

      buttonHelpProfile: {
        w: '100%',
        br: '$12',
        bg: 'rgba(255, 255,255, 0.1)',
      },
    },

    headerButtons: {
      buttonMenu: {
        icon: AlignJustify,
        size: '$8',
        backgroundColor: '#121926',
      },

      buttonNotify: {
        icon: Bell,
        size: '$8',
        backgroundColor: '#121926',
      },
    },

    buttonsNavigator: {
      buttonProfile: {
        h: '$11',
        w: '100%',
        bg: '#202939',
        br: '$8',
      },

      buttonForList: {
        h: '$11',
        w: '$18',
        bg: '#202939',
        padding: '$0',
        br: '$8',
        mr: '$2',
      },

      buttonMetrics: {
        h: '$11',
        w: '48%',
        br: '$8',
        bg: '#202939',
        m: '$1.5',
      },
    },
  } as const,
});
