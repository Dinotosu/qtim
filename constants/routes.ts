export type RouteType = {
  route: string
  name: string
}

export const routes: {[key: string]: RouteType} = {
  works: {
    route: '/works',
    name: 'Works'
  },
  about: {
    route: '/about',
    name: 'About'
  }
}