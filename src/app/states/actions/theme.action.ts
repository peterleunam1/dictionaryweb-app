import { createActionGroup, props } from '@ngrx/store';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Toggle Theme': props<{ theme: string }>(),
  },
});
