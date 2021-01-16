<template>
	<div class="row">
		<div class="text-center">
			<div class="user-name">{{ userName }}'s Future</div>
			<p v-if="!loading">{{ fortune }}</p>
			<p v-if="loading">Looking into the crystal ball</p>
		</div>
		<div>
			<button type="button"  @click="handleReset">Make my Fortune</button>
		</div>

	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'Fortune',
		props: [],
		methods: {
			handleReset() {
				this.$emit('reset')
			},
		},
		computed: {
			...mapGetters('FORTUNE', [
				'fortune',
				'userName',
				'loading'
			])
		},
	}
</script>

<style scoped>
	.user-name {
		font-weight: bold;
		font-size: 20px;
		text-transform: uppercase;
	}
	button {
		background-color: aqua;
		border: none;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		font-family: 'Inconsolata';
		margin-top:50px;
	}
	button:hover{
		opacity:.9;
	}
	.row{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:50px;
	}
</style>