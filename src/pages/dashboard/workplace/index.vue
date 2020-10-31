<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="权限管理" hidden-breadcrumb />
			<Button type="primary" @click="zeng= true" style="width:130px    width: 130px;
    position: absolute;
    right: 84px;
    top: 125px;">添加权限</Button>
			<Modal v-model="zeng" title="新增权限" @on-ok="asyncOKs">
				<Form :model="formTop1" label-position="top">
					<FormItem label="*角色姓名">
						<i-Input v-model="formTop1.input11"></i-Input>
					</FormItem>
					<FormItem label="备注">
						<i-Input v-model="formTop1.input22"></i-Input>
					</FormItem>
					<FormItem label="授权">
						<template>
							<Tree :data="data2" show-checkbox></Tree>
						</template>
					</FormItem>

				</Form>
			</Modal>
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
				zeng: false,
				formTop1: {
					input11: "",
					input22: ""
				},
				data2: [{
					title: '全部配置',
					expand: true,
					children: [{
							title: '系统配置',
							expand: true,
							children: [{
									title: '站点配置'
								},
								{
									title: '更改配置'
								},
								{
									title: '修改密码'
								},
								{
									title: '更新密码'
								},
								{
									title: '更改配置'
								},
							]
						},
						{
							title: '菜单管理',
							expand: true,
							children: [{
									title: '数据分析'
								},
								{
									title: '系统管理'
								},
								{
									title: '任务管理'
								},
								{
									title: '客户CRM'
								},
								{
									title: '黑名单'
								},
								{
									title: '短息管理'
								},
								{
									title: '重启服务'
								},

							]
						},
					]
				}]
			}

		},
		methods: {
			getData() {
				this.$refs.table.getData();
			},
			asyncOKs() {
				setTimeout(() => {
					this.zeng = false;
				}, 2000);
			},
		},
		mounted() {
			this.getData();
		}
	}
</script>
