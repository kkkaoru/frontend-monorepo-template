import { concatText } from '@kkkaoru/pusher-com-utils';
import { useMemo } from 'react';

export function useHome() {
  const exampleText = useMemo<string>(() => concatText('FOO', 'BAR'), []);
  const exampleButtonText = 'Click me!';
  return {
    exampleText,
    exampleButtonText,
  } as const;
}
