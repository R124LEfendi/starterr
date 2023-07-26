const navigation = () => {
  return [
    {
      sectionTitle: 'Main',
    },
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home',
    },
    {
      sectionTitle: 'Sales',
    },
    {
      title: 'Costumer',
      path: '/costumer',
      icon: 'tabler:users-group',
    }, {
      title: 'Item sales',
      path: '/item-sales',
      icon: 'tabler:clipboard-list',
    }, {
      title: 'Proposal',
      path: '/proposal',
      icon: 'tabler:file-text',
    },
    {
      title: 'Invoice',
      icon: 'tabler:file-dollar',
      children: [
        {
          title: 'List',
          path: '/apps/invoice/list'
        },
        {
          title: 'Preview',
          path: '/apps/invoice/preview'
        },
        {
          title: 'Edit',
          path: '/apps/invoice/edit'
        },
        {
          title: 'Add',
          path: '/apps/invoice/add'
        }
      ]
    },
    {
      sectionTitle: 'Purchases',
    },
    {
      sectionTitle: 'Data',
    },
    {
      sectionTitle: 'Settings',
    },
    {
      title: 'Konfigurasi',
      path: '/configuration',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Nama Perusahaan',
          path: '/configuration/company-name',
          icon: 'tabler:smart-home',
        },
        {
          title: 'Mata Uang',
          path: '/configuration/mata-uang',
          icon: 'tabler:coin',
        },
        {
          title: 'Tahun Buku',
          path: '/configuration/tahun-buku',
          icon: 'tabler:book-2',
        },
        {
          title: 'Detail Bank',
          path: '/configuration/detail-bank',
          icon: 'tabler:building-bank',
        },
        {
          title: 'Template',
          path: '/configuration/template-menu',
          icon: 'tabler:mail',
        },
        {
          title: 'Proposal',
          path: '/configuration/proposal',
          icon: 'tabler:file-description',
        },
        {
          title: 'Invoice',
          path: '/configuration/invoice',
          icon: 'tabler:receipt-2',
        },
        {
          title: 'Receipt',
          path: '/configuration/receipt',
          icon: 'tabler:file-description',
        },

        {
          title: 'Jenis pajak',
          path: '/configuration/jenis-pajak',
          icon: 'tabler:receipt-2',
        },
      ]

    },

  ]
}

export default navigation
