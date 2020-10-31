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
							<Modal v-model="show" title="修改" @on-ok="asyncOK">
								<Form :model="newData" label-position="top">
									<FormItem label="产品编号" prop="bianhao">
										<i-Input v-model="newData.bianhao"></i-Input>
									</FormItem>
									<FormItem label="产品缩略图" prop="img">
										<Upload action="//jsonplaceholder.typicode.com/posts/">
											<Button icon="ios-cloud-upload-outline">选择文件上传</Button>
										</Upload>
									</FormItem>
									<FormItem label="产品名字" prop="cpnane">
										<i-Input v-model="newData.cpnane"></i-Input>
									</FormItem>
									<FormItem label="产品标签" prop="cpbq">
										<i-Input v-model="newData.cpbq"></i-Input>
									</FormItem>
									<FormItem label="所需积分" prop="sxjf">
										<i-Input v-model="newData.sxjf"></i-Input>
									</FormItem>
									<FormItem label="已兑换次数" prop="dhcs">
										<i-Input v-model="newData.dhcs"></i-Input>
									</FormItem>
									<FormItem label="添加时间" prop="createtime">
										<i-Input v-model="newData.createtime"></i-Input>
									</FormItem>

								</Form>
							</Modal>
							<Button type="primary" size="small" style="margin-right: 5px" @click="show= true">编辑</Button>
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
		key: "bianhao",
		img: '',
		cpnane: '',
		sxjf: '',
		dhcs: '',
		createtime: '',
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
						title: "产品编号",
						key: "bianhao"
					},
					{
						title: "产品缩略图",
						key: "img",
						render: (h, params) => {
							return h("img", {
								attrs: {
									src: params.row.img
								},
								style: {
									width: "100px"
								}
							});
						}
					},

					{
						title: "产品名字",
						key: "cpnane"
					},
					{
						title: "产品标签",
						key: "cpbq"
					},
					{
						title: "所需积分",
						key: "sxjf"
					},
					{
						title: "已兑换次数",
						key: "dhcs"
					},
					{
						title: "添加时间",
						key: "createtime"
					},
					{
						title: "操作",
						slot: "action",
						width: 150,
						align: "center"
					}
				],

				data1: [{
						bianhao: '11',
						img: 'https://goss1.cfp.cn/creative/vcg/800/new/VCG211167562512.jpg?x-oss-process=image/format,jpg/interlace,1',
						cpnane: 'Array',
						cpbq: '益智',
						sxjf: '10',
						dhcs: '2',
						createtime: '2020-1-1'
					},
					{
						bianhao: '11',
						img: 'https://goss1.cfp.cn/creative/vcg/800/new/VCG211167562512.jpg?x-oss-process=image/format,jpg/interlace,1',
						cpnane: 'Array',
						cpbq: '益智',
						sxjf: '10',
						dhcs: '2',
						createtime: '2020-1-1'
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
