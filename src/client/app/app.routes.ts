import { Routes } from '@angular/router';

import {AboutRoutes} from './about/index';
import {HomeRoutes} from './home/index';
import {TodosRoutes} from './todo/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...TodosRoutes
];
