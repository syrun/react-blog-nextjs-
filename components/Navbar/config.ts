type navType = {
  name: string
  key: string
  path: string
}

export const navs: navType[] = [
  {
    name: '首页',
    key: '/',
    path: '/',
  },
  {
    name: '咨询',
    key: 'consult',
    path: '/consult',
  },
  {
    name: '标签',
    key: 'tags',
    path: '/tags',
  }
]