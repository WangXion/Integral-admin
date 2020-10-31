<template>
	<div class="form-detail">
		<PageHeader title="未认证用户" hidden-breadcrumb />

		<!-- <div class="i-layout-page-header">
            <PageHeader title="表单详情" content="表单除了提交数据，有时也用于显示只读信息。" hidden-breadcrumb />
        </div>
        <Card title="基本信息" :bordered="false" dis-hover class="ivu-mt">
            <Form :label-width="labelWidth" :label-position="labelPosition">
                <Row :gutter="24">
                    <Col v-bind="grid">
                        <FormItem label="姓名：">
                            {{ data.name }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="性别：">
                            {{ data.gender === 'male' ? '男' : '女' }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="城市：">
                            {{ data.city }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="生日：">
                            {{ data.birthday }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="邮箱：">
                            {{ data.mail }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid">
                        <FormItem label="地址：">
                            {{ data.address }}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Card>
        <Card title="其它信息" :bordered="false" dis-hover class="ivu-mt">
            <Form :label-width="labelWidth" :label-position="labelPosition">
                <Row :gutter="24">
                    <Col v-bind="grid2">
                        <FormItem label="姓名：">
                            {{ data.name }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="性别：">
                            {{ data.gender === 'male' ? '男' : '女' }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="城市：">
                            {{ data.city }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="生日：">
                            {{ data.birthday }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="邮箱：">
                            {{ data.mail }}
                        </FormItem>
                    </Col>
                    <Col v-bind="grid2">
                        <FormItem label="地址：">
                            {{ data.address }}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Card> -->
		<Card title="" :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />
			<Table :columns="columns" :data="tableData">
				<template slot-scope="{ row }" slot="name">
					<!-- <Avatar :src="row.avatar" size="small" /> -->
					<span class="ivu-ml-8">{{ row.name }}</span>
				</template>
			</Table>
		</Card>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';

	export default {
		name: 'form-detail',
		data() {
			return {
				// grid: {
				//     xl: 8,
				//     lg: 8,
				//     md: 12,
				//     sm: 24,
				//     xs: 24
				// },
				// grid2: {
				//     xl: 12,
				//     lg: 12,
				//     md: 12,
				//     sm: 24,
				//     xs: 24
				// },
				// data: {
				//     name: 'Aresn',
				//     gender: 'male',
				//     city: '北京市',
				//     birthday: '1991-05-14',
				//     mail: 'aresn@iview.design',
				//     address: '北京市朝阳区'
				// },
				columns: [

					{
						title: '微信头像',
						slot: 'img',
						render: (h, params) => {
							return h("img", {
								attrs: {
									src: params.row.img
								},
								style: {
									width: "100px"
								}
							});
						},
						minWidth: 120,
					},
					{
						title: '姓名',
						key: 'name',
						minWidth: 120
					},
					{
						title: '注册时间',
						key: 'createtime',
						minWidth: 120
					},
					{
						title: '认证状态（）',
						key: 'city',
						minWidth: 120
					},
					{
						title: '认证时间',
						key: 'quetime',
						minWidth: 180
					}
				],
				tableData: [{
						"img": "https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large",
						name: 'Aresn',
						createtime: '2020-2-2',
						city: '未认证',
						quetime: '2020-1-1',
						avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
					},
					{
						"img": "https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large",
						name: 'Aresn',
						createtime: '2020-2-2',
						city: '未认证',
						quetime: '2020-1-1',
						avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
					},
					{
						"img": "https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large",
						name: 'Aresn',
						createtime: '2020-2-2',
						city: '未认证',
						quetime: '2020-1-1',
						avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
					},
				]
			}
		},
		computed: {
			...mapState('admin/layout', [
				'isMobile'
			]),
			labelWidth() {
				return this.isMobile ? undefined : 140;
			},
			labelPosition() {
				return this.isMobile ? 'top' : 'right';
			}
		}
	}
</script>
<style lang="less">
	.form-detail {
		.ivu-form-item {
			margin-bottom: 12px;
		}
	}

	/deep/.i-table-no-border .ivu-table th {
		background-color: #F8F8F9;
		//  color: red;
	}
</style>
