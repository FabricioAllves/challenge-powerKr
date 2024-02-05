import { Avatar, AvatarProps } from 'tamagui';

type DataPropsAvatar = AvatarProps & {
  size: '$8' | '$11';
};

export const AvatarProfile = ({ size, ...rest }: DataPropsAvatar) => {
  return (
    <Avatar size={size} circular {...rest}>
      <Avatar.Image src="https://github.com/FabricioAllves.png" />

      <Avatar.Fallback backgroundColor="$gray5" />
    </Avatar>
  );
};
