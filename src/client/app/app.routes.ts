import { Routes } from '@angular/router';

import {AboutRoutes} from './about/index';
import {TodosRoutes} from './todo/index';

export const routes: Routes = [
  ...AboutRoutes,
  ...TodosRoutes
];
