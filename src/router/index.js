import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import Ebook from '../views/Ebook.vue'
import News from '../views/News.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import TentangKami from '../views/pages/Tentangkami.vue'
import VisiMisi from '../views/pages/Visimisi.vue'
import TermsCondition from '../views/pages/Termscondition.vue'
import PrivacyPolicy from '../views/pages/Privacypolicy.vue'
import Lpk from '../views/pages/Lpk.vue'
import Magang from '../views/pages/Magang.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    components: {default:Home, header:Navbar, footer:Footer}
  },
  {
    path: '/video',
    name: 'video',
    components: {default:Video, header:Navbar, footer:Footer}
  },
  {
    path: '/ebook',
    name: 'ebook',
    components: {default:Ebook, header:Navbar, footer:Footer}
  },
  {
    path: '/news',
    name: 'news',
    components: {default:News, header:Navbar, footer:Footer}
  },
  {
    path: '/tentangkami',
    name: 'tentangkami',
    components: {default:TentangKami, header:Navbar, footer:Footer}
  },
  {
    path: '/visimisi',
    name: 'visimisi',
    components: {default:VisiMisi, header:Navbar, footer:Footer}
  },
  {
    path: '/termscondition',
    name: 'termscondition',
    components: {default:TermsCondition, header:Navbar, footer:Footer}
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    components: {default:PrivacyPolicy, header:Navbar, footer:Footer}
  },
  {
    path: '/lpk',
    name: 'lpk',
    components: {default:Lpk, header:Navbar, footer:Footer}
  },
  {
    path: '/magang',
    name: 'magang',
    components: {default:Magang, header:Navbar, footer:Footer}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router

