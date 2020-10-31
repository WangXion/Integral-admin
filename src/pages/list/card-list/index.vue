<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="新闻列表" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />
			<template>
				<Table border :columns="columns1" :data="data1">
					<template slot-scope="{ row }" slot="name">
						<strong>{{ row.name }}</strong>
					</template>
					<template slot-scope="{ row, index }" slot="action">
						<router-link :to="{name:'news'}" @click="show(index)">查看</router-link>

					</template>
				</Table>
			</template>
		</Card>
	</div>
</template>
<script>
	// import listData from './data';

	export default {
		data() {
			return {
				columns1: [{
						title: '新闻图片',
						key: 'img',
						render: (h, params) => {
							return h('img', {
								attrs: {
									src: params.row.img
								},
								style: {
									width: '100px'
								}
							})
						}

					},
					{
						title: '标题',
						key: 'biaoti',
					},
					{
						title: '发布者',
						key: 'fabuzhe',
					},
					{
						title: '发布时间',
						key: 'fatime',
					},
					{
						title: '阅读数',
						key: 'yuedu',
					},
					{
						title: '操作',
						slot: 'action',
						width: 150,
						align: 'center'
					}
				],

				data1: [{
						img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large',
						biaoti: '打豆豆',
						fabuzhe: '天蚕土豆',
						fatime: '2020-12-12',
						yuedu: '2020',
					},
					{
						img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large',
						biaoti: '打豆豆',
						fabuzhe: '天蚕土豆',
						fatime: '2020-12-12',
						yuedu: '2020',
					},

				]
			}
		},
		methods: {
			// show (index) {
			//     this.$Modal.info({
			//         title: '详细信息',
			//         content: `昵称：${this.data1[index].name}<br>注册时间：${this.data1[index].createtime}<br>认证状态：${this.data1[index].staut}`
			//     })
			// },
			// remove (index) {
			//     this.data1.splice(index, 1);
			// }
		}
	}
</script>
<style lang="less">
	.list-card-list {
		&-desc {
			height: 85px;
			overflow: hidden;
		}
	}

	.ivu-table-wrapper-with-border {
		margin-top: 20px;
	}
</style>
