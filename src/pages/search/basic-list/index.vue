<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分申述列表" hidden-breadcrumb />
		</div>
		<Card title="" :bordered="false" dis-hover class="ivu-mt">
			<Input search size="large" enter-button="搜索" placeholder="输入用户名" style="max-width: 431px;" />
			<div>
				<List :loading="loading" class="ivu-mt">
					<div v-height="300" v-if="loading"></div>
					<template>
						<!-- <Button type="primary" style="margin-right: 5px;display:flex;justify-content:left; margin-bottom: 15px;" @click="zeng= true" >增加</Button> -->
					</template>
					<Table border :columns="columns1" :data="data1">
						<template slot-scope="{ row }" slot="name">
							<strong>{{ row.name }}</strong>
						</template>
						<template slot-scope="{ row, index }" slot="action">
							<Modal v-model="show" title="审核结果" @on-ok="asyncOK">

								<Form :model="formTop" label-position="top">
									<FormItem label="审核结果回复">
										<i-Input v-model="formTop.input1"></i-Input>
									</FormItem>
									<FormItem label="审核时间">
										<i-Input v-model="formTop.input2" disabled></i-Input>
									</FormItem>
								</Form>
							</Modal>
							<Button type="primary" size="small" style="margin-right: 5px" @click="show= true">审核</Button>
							<Button type="error" size="small" @click="remove(index)">删除</Button>
						</template>
					</Table>

				</List>
				<div class="ivu-mt ivu-text-right">
					<Page :total="100" show-elevator :simple="isMobile" />
				</div>
			</div>
		</Card>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	// import listData from './data';
	const baseData = {
		userID: '',
		usernane: '',
		call: '',
		cun: '',
		neir: '',
		sstime: '',
		status: 'normal'
	};

	export default {
		name: 'list-basic-list',
		data() {
			return {
				type: 'all',
				data: [],
				loading: false,
				showUpdate: false,
				submitting: true,
				updateIndex: -1,
				newData: Object.assign({}, baseData),
				show: false,
				formTop: {
					input1: "",
					input2: "2020-12-12"
				},
				columns1: [{
						title: "用户id",
						key: "userID"
					},
					{
						title: "姓名",
						key: "usernane"
					},
					{
						title: "手机号",
						key: "call"
					},
					{
						title: "所在村",
						key: "cun"
					},
					{
						title: "申述内容",
						key: "neir"
					},
					{
						title: "申述提交时间",
						key: "sstime"
					},
					{
						title: "操作",
						slot: "action",
						width: 150,
						align: "center"
					}
				],

				data1: [{
						userID: '011',
						usernane: 'Array',
						call: '133333',
						cun: '村落',
						neir: '申诉内容',
						sstime: '2020-1-1'
					},
					{
						userID: '011',
						usernane: 'Array',
						call: '133333',
						cun: '村落',
						neir: '申诉内容',
						sstime: '2020-1-1'
					},
				]
			}
		},
		computed: {
			...mapState('admin/layout', [
				'isMobile'
			])
		},
		methods: {
			remove(index) {
				this.$Modal.confirm({
					title: '删除任务',
					content: '确定删除吗？',
					onOk: () => {
						this.data1.splice(index, 1);
						this.$Message.success('删除成功');
					},
				})
			},
			asyncOK() {
				setTimeout(() => {
					this.show = false;
					this.$refs.form.validate((valid) => {
						if (valid) {
							setTimeout(() => {
								if (this.updateIndex >= 0) {
									this.data[this.updateIndex] = Object.assign({}, this.newData);
								} else {
									this.data.push(this.newData);
								}
								this.$Message.success('编辑成功!');
								this.showUpdate = false;
								this.submitting = false;
								this.$nextTick(() => {
									this.submitting = true;
								});
							}, 1000);
						} else {
							this.submitting = false;
							this.$nextTick(() => {
								this.submitting = true;
							});
						}
					});
				}, 2000);
			},
			// handleAdd () {
			//     this.newData = Object.assign({}, baseData);
			//     this.updateIndex = -1;
			//     this.showUpdate = true;
			//     this.$refs.form.resetFields();
			// },
			//     handleUpdate (index) {
			//         this.newData = Object.assign({}, this.data[index]);
			//         this.updateIndex = index;
			//         this.showUpdate = true;
			//     },
			//     handleClickMore (name, index) {
			//         if (name === 'update') {
			//             this.handleUpdate(index);
			//         } else if (name === 'delete') {
			//             this.$Modal.confirm({
			//                 title: '删除任务',
			//                 content: '确定删除该任务吗？',
			//                 onOk: () => {
			//                     this.data.splice(index, 1);
			//                     this.$Message.success('删除成功');
			//                 }
			//             });
			//         }
			//     },
			//     handleSubmit () {
			//         this.$refs.form.validate((valid) => {
			//             if (valid) {
			//                 setTimeout(() => {
			//                     if (this.updateIndex >= 0) {
			//                         this.data[this.updateIndex] = Object.assign({}, this.newData);
			//                     } else {
			//                         this.data.push(this.newData);
			//                     }
			//                     this.$Message.success('编辑成功!');
			//                     this.showUpdate = false;
			//                     this.submitting = false;
			//                     this.$nextTick(() => {
			//                         this.submitting = true;
			//                     });
			//                 }, 1000);
			//             } else {
			//                 this.submitting = false;
			//                 this.$nextTick(() => {
			//                     this.submitting = true;
			//                 });
			//             }
			//         });
			//     },
			//     getData () {
			//         this.loading = true;
			//         setTimeout(() => {
			//             this.data = listData;
			//             this.loading = false;
			//         }, 1000);
			//     }
			// },
			// mounted () {
			//     this.getData();

		}
	}
</script>
<style lang="less">
	.list-basic-list {
		&-content {
			font-size: 0;
		}

		&-content-item {
			display: inline-block;
			margin-left: 32px;
			color: #808695;
			font-size: 14px;
			vertical-align: middle;
		}
	}
</style>
