<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分明细"> </PageHeader>
		</div>
		<template>
			<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
				<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />
				<div>
					<div class="i-layout-page-header">
						<PageHeader hidden-breadcrumb />
					</div>
					<template>
						<Table border :columns="columns1" :data="data1">
							<template slot-scope="{ row }" slot="name">
								<strong>{{ row.name }}</strong>
							</template>
							<!-- <template slot-scope="{ row, index }" slot="action">
                                    <router-link :to="{name:'dels'}"  @click="show(index)">查看</router-link>
                                
                                </template> -->
						</Table>
						<div class="ivu-mt ivu-text-right">
							<Page :total="100" show-elevator :simple="isMobile" />
						</div>
					</template>
				</div>
			</Card>
		</template>
	</div>
</template>
<script>
	import listData from './data';
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				columns1: [{
						title: '用户编号',
						key: 'biaohao',
					},
					{
						title: '用户姓名',
						key: 'username',
					},
					{
						title: '手机号',
						key: 'call',
					},
					{
						title: '时间',
						key: 'time',
					},
					{
						title: '信息描述',
						key: 'xinxi',
					},
					{
						title: '信息性质',
						key: 'xingzhi',
					},
					{
						title: '信息来源',
						key: 'xingzhi',
					},
					{
						title: '加减分',
						key: 'jiajian',
					},
					{
						title: '得分',
						key: 'defen',
					},
					{
						title: '采集人',
						key: 'caiji',
					},
					{
						title: '审核人',
						key: 'shenheren',
					},
					{
						title: '审核时间',
						key: 'shtime',
					},
					// {
					//     title: '操作',
					//     slot: 'action',
					//     width: 150,
					//     align: 'center'
					// }
				],

				data1: [{
						biaohao: '01',
						username: '冲浪',
						call: '133333999',
						time: '2020-12-12',
						xinxi: '这是一段信息描述',
						xingzhi: '这是一段信息性质',
						xingzhi: '这是一段信息信息来源',
						jiajian: '加减分',
						defen: '20',
						caiji: '这是采集人',
						shenheren: '这是审核人',
						shtime: '这是审核时间',

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
