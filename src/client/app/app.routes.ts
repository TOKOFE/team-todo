import { Routes } from '@angular/router';

import {AboutRoutes} from './about/index';
import {TodosRoutes} from './todo/index';
import {HomeRoutes} from './home/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...TodosRoutes
];
