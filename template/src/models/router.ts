import { RouteComponent } from 'vue-router'

export declare type RouteMeta = {
  onlyBeforeLogin: boolean,
  requiredAuth: boolean,
}

export declare type Route = {
  path: string
  name: string
  label: string
  shortLabel: string
  icon: string | null
  meta: RouteMeta
  component: RouteComponent,
  child?: Record<string, Route>
}

export declare type RouteForRouter = {
  path: string
  name: string
  meta: RouteMeta,
  component: RouteComponent,
  children?: Record<string, RouteForRouter>,
}

export declare type Routes = Array<Route>
