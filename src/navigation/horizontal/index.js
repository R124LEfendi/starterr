const navigation = () => [
  {
    title: 'Home',
    path: '/home',
    icon: 'tabler:smart-home',
  },
  {
    title: 'Currency',
    path: '/mata-uang',
    icon: 'tabler:bussiness-plan',
  },
  {
    title: 'Second Page',
    path: '/second-page',
    icon: 'tabler:mail',
  },
  {
    title: 'Invoice',
    path: '/invoice',
    icon: 'tabler:receipt-2',
  },
  {
    title: 'Proposal',
    path: '/proposal',
    icon: 'tabler:feedback',
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Access Control',
    icon: 'tabler:shield',
  }
]

export default navigation
