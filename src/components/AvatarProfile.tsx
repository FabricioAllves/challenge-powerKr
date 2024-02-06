import { Avatar, AvatarProps } from 'tamagui';

import user from '../assets/user.png';

type DataPropsAvatar = AvatarProps & {
  size: '$8' | '$11';
};

export const AvatarProfile = ({ size, ...rest }: DataPropsAvatar) => {
  return (
    <Avatar size={size} circular {...rest}>
      <Avatar.Image src={user} />

      <Avatar.Fallback backgroundColor="$gray5" />
    </Avatar>
  );
};
