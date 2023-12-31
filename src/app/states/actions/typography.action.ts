import { createActionGroup, props } from '@ngrx/store';
import { TypographyName } from 'src/app/models/constants/theme.model';

export const TypographyActions = createActionGroup({
  source: 'Typography',
  events: {
    'Set Typography': props<{ typography: TypographyName }>(),
  },
});
