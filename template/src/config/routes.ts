import { materialIcons } from '@dbetka/vue-material-icons'
import { Routes } from 'models/router'
import PError from 'pages/error.vue'
import PWelcome from 'pages/welcome.vue'
import { RouteComponent } from 'vue-router'
import { rewriteRoutesForRouterRecursively } from 'src/router/utils'
import { Icons } from '@dbetka/vue-material-icons/dist/src/__jscache__/icons-names'

const iconsNames = materialIcons.names as Icons

export const ROUTES = {
  error: {
    path: '/:pathMatch(.*)*',
    name: 'error',
    label: 'Error 404',
    shortLabel: 'Error 404',
    icon: iconsNames.bug_report,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: false,
    },
    component: PError,
  },
  welcome: {
    path: '/',
    name: 'welcome',
    label: '',
    shortLabel: '',
    icon: iconsNames.sensor_door,
    meta: {
      onlyBeforeLogin: true,
      requiredAuth: false,
    },
    component: PWelcome,
  },
  panel: {
    path: '/panel',
    name: 'panel',
    label: 'Client panel',
    shortLabel: 'Panel',
    icon: iconsNames.people_alt,
    meta: {
      onlyBeforeLogin: false,
      requiredAuth: true,
    },
    component: (): RouteComponent => import('pages/about.vue'),
    child: {
      myself: {
        path: '/panel/assets',
        name: 'panel-assets',
        label: 'Assets list',
        shortLabel: 'Assets',
        icon: iconsNames.sailing,
        meta: {
          onlyBeforeLogin: false,
          requiredAuth: true,
        },
        component: (): RouteComponent => import('pages/about/myself.vue'),
      },
      team: {
        path: '/panel/map-view',
        name: 'panel-map-view',
        label: 'Map View',
        shortLabel: 'View',
        icon: iconsNames.map,
        meta: {
          onlyBeforeLogin: false,
          requiredAuth: true,
        },
        component: (): RouteComponent => import('pages/about/team.vue'),
      },
    },
  },
}

const routesList: Routes = Object.values(ROUTES)
export const routesForRouter = rewriteRoutesForRouterRecursively(routesList)
