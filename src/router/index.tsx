import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { GlobalProvider } from 'providers';
import { PrivateLayout } from 'layouts';
import { Dashboard } from 'pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GlobalProvider />}>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Route>
  )
);
