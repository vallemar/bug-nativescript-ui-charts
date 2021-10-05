<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <StackLayout class="p-2">

      <FlexboxLayout class="p-4">
        <StackLayout class="rounded-lg " style="background-color: #102331">
          <UIChartsView id="chartView" width="100%" height="250" @loaded="chartViewLoaded"/>
        </StackLayout>
      </FlexboxLayout>


    </StackLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import {fromObject} from '@nativescript/core/data/observable';
import axios from "axios";
import {transformArchive} from "~/core/transform/archives";

let chartView: any;
let viewModel = fromObject({

  chartOptions: {
    chart: {
      backgroundColor: 'transparent',
      type: 'line'
    },
    title: {
      text: '',
    },

    subtitle: {
      text: '',
    },


    yAxis: {
      visible: false,
    },

    xAxis: {
      visible: false,

    },

    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,

        },
      },

    },
    series: [],
  }
});



export default Vue.extend({
  methods: {
    async chartViewLoaded(args: any) {
      axios.get("https://api.esios.ree.es/archives/70/download_json?locale=es").then((result) => {
        chartView = args.object;
        viewModel.set('loading', false);
        viewModel.set('chartOptions', Object.assign(viewModel.get('chartOptions'), {
          series: [{
            name: 'Installation',

            data: [295, 295, 294, 289, 286, 285, 293, 294, 324, 309, 306, 278, 272, 264, 257, 258, 262, 295, 321, 342, 348, 332, 319, 308],
            color: '#01A781',

          },]
        }));
        chartView.setOptions(viewModel.get('chartOptions'));
      });
    },
  }
});
</script>

<style scoped lang="scss">

Page {
  background-color: #121F27;
}
</style>
