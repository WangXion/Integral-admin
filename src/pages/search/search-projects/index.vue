<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分细则" content="" hidden-breadcrumb />
		</div>
		<div>
			<Card :bordered="false" dis-hover class="ivu-mt">
				<i-quill v-model="value" :min-height="450" />
				<Divider />

				<Button type="primary" @click="handleSubmit('formInline')" style=" position: absolute;
 bottom: 5px;
 width: 145px;">提交</Button>
			</Card>
		</div>
	</div>
</template>
<script>
	import iQuill from '@/components/quill';

	export default {
		name: 'editor-quill',
		components: {
			iQuill
		},
		data() {
			return {
				value: `<h1>请输入内容</h1>`
			}
		},
		methods: {

		}
	}
</script>
