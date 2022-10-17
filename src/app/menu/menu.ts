import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'changeDetection',
    title: 'Change detection',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'dribbble',
    url: 'change-detection'
  },
  {
    id: 'trackby',
    title: 'Track by',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'activity',
    url: 'track-by'
  }
]
