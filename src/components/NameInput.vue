<template>
	<div class="row">
		<input type="text" class="form-control" placeholder="Tell me your name..." v-model="name">
		<button type="button"  @click="handleClick">Make my Fortune</button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'name-input',
		props: [],
		data: () => ({
			name: ''
		}),
		methods: {
			handleClick() {
				this.$emit('click', this.name)
			},

			handleReset() {
				this.name = ''
				this.$emit('reset')
			}
		},
		computed: {
			...mapGetters('FORTUNE', [
				'hasUsername'
			])
		},
	}
</script>

<style scoped>
	input[type=text] {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	border: none;
	border-bottom: 2px solid #ffffff;
	background-color:transparent;
	color:#ffffff;
	margin-bottom:50px;
	font-family: 'Inconsolata';
	}
	input:focus{
    outline: none;
	}
	::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	color: #ffffff;
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
