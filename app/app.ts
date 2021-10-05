import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true
import { install } from '@nativescript-community/ui-chart';
import {UIChartsView} from "@nativescript/ui-charts/ui-charts.android";
install();

Vue.registerElement('LineChart', () => require('@nativescript-community/ui-chart/charts').LineChart);
Vue.registerElement('UIChartsView', () => require('@nativescript/ui-charts/ui-charts').UIChartsView);




new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
