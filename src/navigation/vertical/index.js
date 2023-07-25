const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home',
    },
    {
      title: 'Mata Uang',
      path: '/mata-uang',
      icon: 'tabler:coin',
    },
    {
      title: 'Tahun Buku',
      path: '/tahun-buku',
      icon: 'tabler:book-2',
    },
    {
      title: 'Detail Bank',
      path: '/detail-bank',
      icon: 'tabler:building-bank',
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
      icon: 'tabler:mail',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield',
    }
  ]
}

export default navigation
