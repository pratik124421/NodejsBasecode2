import express, { Router } from 'express';
import { EnvironmentConfig } from '../config/EnvironmentConfig';
import userRoute from './user.route';
import authRoute from './auth.route';
import AdminRouter from './admin.route';
import UserDetailRouter from './user_detail.route';
import ProductRouter from './product.route';

const router = Router();

interface RouteeInterface {
  path: string;
  route: Router;
}

const defaultRoutes: RouteeInterface[] = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/users',
        route: userRoute,
    },
    {
      path: '/userdetail',
      route: UserDetailRouter,
    },
    {
      path:'/product',
      route:ProductRouter
    }
];

// const devRoutes: RouteeInterface[] = [
  // IRoute available only in development mode
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (EnvironmentConfig.getInstance().Environment === 'Dev') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

export default router;
