<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分公示" hidden-breadcrumb />
		</div>

		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<Input search size="large" enter-button="搜索" placeholder="输入用户名" style="max-width: 431px;" />
			<!-- <table-form @on-submit="getData" @on-reset="getData" /> -->
			<table-list ref="table" />
		</Card>
	</div>
</template>
<script>
	// import tableForm from './table-form';
	import tableList from './table-list';

	export default {
		name: 'list-table-list',
		// components: { tableForm, tableList },
		components: {
			tableList
		},
		data() {
			return {

			}
		},
		methods: {
			getData() {
				this.$refs.table.getData();
			}
		},
		mounted() {
			this.getData();
		}
	}
</script>
