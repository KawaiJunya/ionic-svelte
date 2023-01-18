import "./app.css"
import Router from './Router.svelte'

import { register } from "./lib/core/custom-element"

import Splash from "./lib/pages/Splash.svelte"
import Tabs from   './lib/pages/Tabs.svelte'
register("page-splash", Splash)
register("page-tabs",   Tabs)

const router = new Router({
  target: document.body
})

export default router
