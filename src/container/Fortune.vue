<template>
	<div class="row">
		<template v-if="!hasUsername">
			<name-input @click="handleFind"/>
		</template>
		<template v-if="hasUsername">
			<FortuneDetails @reset="handleReset" />
		</template>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import sum from 'lodash/sum'
	import random from 'lodash/random'
	import NameInput from '@/components/NameInput'
	import FortuneDetails from '@/components/FortuneDetails'

	export default {
		name: 'FortuneContainer',
		components: {
			NameInput,
			FortuneDetails
		},
		computed: {
			...mapGetters('FORTUNE', [
				'userName',
				'hasUsername',
			])
		},
		methods: {
			handleFind(name = '') {
				this.$store.commit('FORTUNE/setName', name)

				if (name.trim()) {
					const fortuneId = this.calculateFortuneId(name)
					this.$store.dispatch('FORTUNE/requestFortune', fortuneId)
				}
			},

			handleReset() {
				this.$store.commit('FORTUNE/clearName')
			},

			calculateFortuneId(name) {
				const codes = [...name.trim()].map(char => char.charCodeAt(0))
				const total = sum(codes)
				const calcu = ((total * 2) / codes.length) - codes.length

				return Math.ceil((calcu - random(1, 50)) / codes.length + random(1, 150))
			}
		}
	}
</script>

