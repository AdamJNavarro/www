import { Badge } from '@mantine/core';

export type ProductPlatform = 'android' | 'ios' | 'macos' | 'web';

interface PlatformBadgeProps {
  name: ProductPlatform;
}

function getPlatformColor(platform: ProductPlatform): string {
  if (platform === 'android') return 'green';
  if (platform === 'ios') return 'blue';
  if (platform === 'macos') return 'white';
  if (platform === 'web') return 'grape';
  return 'black';
}

export function PlatformBadge({ name }: PlatformBadgeProps) {
  return (
    <Badge color={getPlatformColor(name)} variant="outline">
      {name}
    </Badge>
  );
}
