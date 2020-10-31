<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分产品兑换记录" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt">
			<table-form @on-submit="getData" @on-reset="getData" />
			<table-list ref="table" />
		</Card>
	</div>
</template>
<script>
	import tableForm from './table-form';
	import tableList from './table-list';

	export default {
		name: 'list-table-list',
		components: {
			tableForm,
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
