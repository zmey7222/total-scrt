import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Social from '../pages/Social.vue';
import Media from '../pages/Media.vue';
import Snackbar from '../pages/Snackbar.vue';
import Chart from '../pages/Chart.vue';
import Mailbox from '../pages/Mailbox.vue';
import Calendar from '../pages/Calendar.vue';
import Login from '../pages/core/Login.vue';
import Error from '../pages/core/Error.vue';
import TimeLine from '../components/TimeLine.vue';
import ClientTable from '../components/clienttable.vue';
import ProjectTable from '../components/projecttable.vue';
import TypeOfTasks from '../components/typeOfTasks.vue';
import StatusOfProject from '../components/statusOfProject.vue';
import EditProject from '../components/editProject.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      }
    },
    {
      path: '/mailbox',
      name: 'Mailbox',
      component: Mailbox,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Mailbox' }
        ]
      }
    },
    {
      path: '/projecttable',
      name: 'ProjectTable',
      component: ProjectTable,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ProjectTable' }
        ]
      }
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Snackbar' }
        ]
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Calendar' }
        ]
      }
    },
    {
      path: '/social',
      name: 'Social',
      component: Social,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Social' }
        ]
      }
    },
    {
      path: '/timeline',
      name: 'TimeLine',
      component: TimeLine,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'TimeLine'}
        ]
      }
    },
    {
      path: '/clienttable',
      name: 'ClientTable',
      component: ClientTable,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'ClientTable'}
        ]
      }
    },
    {
      path: '/editproject',
      name: 'EditProject',
      component: EditProject,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'EditProject'}
        ]
      }
    },

    {
      path: '/typeoftasks',
      name: 'TypeOfTasks',
      component: TypeOfTasks,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'TypeOfTasks'}
        ]
      }
    },
    {
      path: '/statusofproject',
      name: 'StatusOfProject',
      component: StatusOfProject,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'StatusOfProject'}
        ]
      }
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Media' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Chart' }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});
