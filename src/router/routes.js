
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'funcionarios', component: () => import('pages/Funcionarios.vue') },
      { path: 'projetos', component: () => import('pages/Projetos.vue') },
      { path: 'home', component: () => import('pages/Home.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
