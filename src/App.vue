<!-- @format -->

<template>
	<div id="app">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
