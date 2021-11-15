import { Route, RouteForRouter, Routes } from 'models/router'
import { RouteRecordRaw } from 'vue-router'

function convertRouteForRouter (route: Route): RouteForRouter {
  return {
    path: route.path,
    name: route.name,
    meta: route.meta,
    component: route.component,
  }
}

export function rewriteRoutesForRouterRecursively (routes: Routes): Array<RouteRecordRaw> {
  return routes
    .map(route => {
      const childrenList: Routes = route.child ? Object.values(route.child) : []
      return {
        ...convertRouteForRouter(route),
        children: childrenList.length > 0 ? rewriteRoutesForRouterRecursively(childrenList) : undefined,
      }
    })
}
