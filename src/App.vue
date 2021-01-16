<template>
	<div id="app">
		<div class="main-content">
			<FortuneContainer />
		</div>
	</div>
</template>


<script>
	import FortuneContainer from '@/container/Fortune.vue'
	export default {
		name: 'app',
		components: {
			FortuneContainer
		}
	}
</script>

<style scoped>
	.main-content {
		width:900px;
	}
</style>