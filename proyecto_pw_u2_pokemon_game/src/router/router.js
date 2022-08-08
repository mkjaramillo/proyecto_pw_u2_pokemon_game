import {createRouter,createWebHashHistory} from 'vue-router'

//import AboutPage from '../modulos/pokemon/pages/AboutPage'
//import ListPage from '../modulos/pokemon/pages/ListPage'
//import PokemonPage from '../modulos/pokemon/pages/PokemonPage'
//import NoPageFound from '../modulos/pokemon/pages/NoPageFound'
/*
const routes=[
    {path:'/',component:AboutPage},
    {path:'/list',component:ListPage},
    {path:'/id',component:PokemonPage},
    {path:'/:pathMatch(.*)*',component:NoPageFound},
]*/
//lazy load
const routes=[
  {path:'/',component:()=> import(/*webpackChunkName:"AboutPage"*/ '../modulos/pokemon/pages/AboutPage')},
  {path:'/list',component:()=> import(/*webpackChunkName:"ListPage"*/ '../modulos/pokemon/pages/ListPage')},
  {path:'/id',component:()=> import(/*webpackChunkName:"PokemonPage"*/ '../modulos/pokemon/pages/PokemonPage')},
  {path:'/:pathMatch(.*)*',component:()=> import(/*webpackChunkName:"NoPageFounde"*/ '../modulos/pokemon/pages/NoPageFound')},
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history:createWebHashHistory(),
    routes, // short for `routes: routes`
  })
export default router

