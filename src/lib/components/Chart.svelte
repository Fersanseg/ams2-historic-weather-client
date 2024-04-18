<script lang=ts>
  import Chart from 'chart.js/auto'
  import type {  ChartConfiguration, ChartItem, } from 'chart.js';

	export let config: ChartConfiguration
	
	const handleChart = (element: ChartItem, config: ChartConfiguration) => {
		let theChart = new Chart(element, config)
		
		return {
			update(config: ChartConfiguration) {
				theChart.destroy()
				theChart = new Chart(element, config)
			},
			destroy() {
				theChart.destroy()
			}
		}
	}
</script>

<canvas use:handleChart={config} />