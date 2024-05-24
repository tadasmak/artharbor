import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth"

import HomeView from '../views/HomeView.vue'
import ArtView from '../views/ArtView.vue'
import ArtworkPage from '../views/ArtworkPage.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import NewsArticlePage from '../views/NewsArticlePage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ArtistPage from '../views/ArtistPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Art Harbor',
      },
      component: HomeView
    },
    {
      path: '/art',
      name: 'art',
      meta: {
        title: 'Explore Art',
      },
      component: ArtView,
    },
    {
      path: '/art/:id',
      name: 'artwork',
      meta: {
        title: 'Art piece',
      },
      component: ArtworkPage
    },
    {
      path: '/news',
      name: 'news',
      meta: {
        title: 'News',
      },
      component: NewsView,
    },
    {
      path: '/news/:id',
      name: 'article',
      meta: {
        title: 'News article',
      },
      component: NewsArticlePage
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About us',
      },
      component: AboutView
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        title: 'My Profile',
        requiresAuth: true
      },
      component: ProfilePage
    },
    {
      path: '/artist/:id',
      name: 'artist',
      meta: {
        title: "Artist's profile"
      },
      component: ArtistPage
    }
  ]
})

let user = null;

const DEFAULT_TITLE = 'Art Harbor';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;

  const user = getAuth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && user == null) {
    // Redirect to the login page if the route requires authentication and the user is not authenticated
    next('/');
  } else {
    // Continue with the navigation
    next();
  }   
});

export default router
