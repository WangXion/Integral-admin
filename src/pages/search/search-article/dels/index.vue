<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="审核详情页" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<DescriptionList title="基本信息" v-for="(item ,index) in delsdata" :key="index">
				<Form>
					<Form-item>
						<Description term="用户姓名：">
							<i-Input type="text" :value="item.name" disabled></i-Input>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="手机号：">
							<i-Input type="text" :value="item.call"></i-Input>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="用户编号：">
							<i-Input type="text" :value="item.biaohao" disabled></i-Input>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="积分申请选项结果：">
							<Select>
								<Option value="">通过</Option>
								<Option value="">未通过</Option>
							</Select>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="附件信息：">
							<Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
								<div style="padding: 20px 0">
									<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
									<p>点击或将文件拖拽到这里上传</p>
								</div>
							</Upload>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="积分申请介绍：">
							<i-Input type="text" :value="item.jieshao"></i-Input>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="审核状态：">
							<Select>
								<Option value="">已审核</Option>
								<Option value="">未审核</Option>
							</Select>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="提交时间：">
							<i-Input type="text" :value="item.time" disabled></i-Input>
						</Description>
					</Form-item>
					<Divider />
					<Form-item>
						<Description term="审核人信息：">
							<i-Input type="text" :value="item.xinxi"></i-Input>
						</Description>
					</Form-item>
					<Form-item>
						<Button type="primary" @click="handleSubmit('formInline')" style="position: absolute;
    left: 50%;">提交</Button>
					</Form-item>
				</Form>
			</DescriptionList>
			<Divider />
		</Card>
	</div>
</template>
<script>
	export default {
		name: 'profile-basic',
		data() {
			return {
				delsdata: [{
						name: 'qaq',
						call: '111111',
						biaohao: '1010',
						fujian: 'qaq',
						jieshao: 'qaq',
						time: '2020-12-12',
						xinxi: '滴滴滴',
					},

				],

			}
		},
		methods: {
			handleSubmit(name) {
				this.$refs[name].validate((valid) => {
					if (valid) {
						this.$Message.success('提交成功!');
					} else {
						this.$Message.error('表单验证失败!');
					}
				})
			}
		}
	}
</script>
