import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from '../views/Landing.vue'
//import AdminPanel from '../views/AdminPanel.vue'

/* navs */
import AboutUs from '../views/admin_panel/admin_panel_views/AboutUs.vue'
import Advertisement from '../views/admin_panel/admin_panel_views/Advertisement.vue'
import Agent from '../views/admin_panel/admin_panel_views/Agent.vue'
import Bookings from '../views/admin_panel/admin_panel_views/Bookings.vue'
import Enquires from '../views/admin_panel/admin_panel_views/Enquires.vue'
import HelpDesk from '../views/admin_panel/admin_panel_views/HelpDesk.vue'
import Dashboard from '../views/admin_panel/admin_panel_views/Dashboard.vue'
import Notifications from '../views/admin_panel/admin_panel_views/Notifications.vue'
import Properties from '../views/admin_panel/admin_panel_views/Properties.vue'
import TermsAndConditions from '../views/admin_panel/admin_panel_views/TermsAndConditions.vue'
import TermsOfService from '../views/admin_panel/admin_panel_views/TermsOfService.vue'
import User from '../views/admin_panel/admin_panel_views/User.vue'
import UserService from '../views/admin_panel/admin_panel_views/UserService.vue'

import UserDetails from '../views/admin_panel/admin_panel_views/UserDetails.vue'
import AgentDetails from '../views/admin_panel/admin_panel_views/AgentDetails.vue'
import BookingDetails from '../views/admin_panel/admin_panel_views/BookingDetails.vue'
import PropertyDetails from '../views/admin_panel/admin_panel_views/PropertyDetails.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/agent',
    name: 'Agent',
    component: Agent
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties
  },
  
  {
    path: '/bookings',
    name: 'Bookings',
    component: Bookings
  },
  {
    path: '/enquires',
    name: 'Enquires',
    component: Enquires
  },
  {
    path: '/user-service',
    name: 'UserService',
    component: UserService
  },
  {
    path: '/advertisement',
    name: 'Advertisement',
    component: Advertisement
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  },
  {
    path: '/help-desk',
    name: 'HelpDesk',
    component: HelpDesk
  },
  {
    path: '/terms_of_service',
    name: 'TermsOfService',
    component: TermsOfService
  },
  {
    path: '/terms_and_conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },

  //============////
  {
    path: '/user-details',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/agent-details',
    name: 'AgentDetails',
    component: AgentDetails
  },
  {
    path: '/bookings-details',
    name: 'BookingsDetails',
    component: BookingDetails
  },
  {
    path: '/property-details',
    name: 'PropertyDetails',
    component: PropertyDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
