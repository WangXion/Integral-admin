<template>
	<Form ref="form" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
		<Row :gutter="24" type="flex" justify="end">
			<Col v-bind="grid">
			<FormItem label="用户名/电话" prop="name" label-for="name">
				<Input v-model="data.name" placeholder="请输入" element-id="name" />
			</FormItem>
			</Col>
			<Col v-bind="grid">
			<FormItem label="选择操作类型" prop="status" label-for="name">
				<Select v-model="data.status" placeholder="选择操作类型" element-id="status">
					<Option :value="0">查询客户信息</Option>
					<Option :value="1">查询客户信息</Option>
				</Select>
			</FormItem>
			</Col>
			<Col v-bind="grid">
			<FormItem label="时间段选择" prop="time" label-for="time">
				<DatePicker type="date" multiple placeholder="请选择你需要的的时间段" style="width: 300px"></DatePicker>
			</FormItem>
			</Col>

			<Col v-bind="grid" class="ivu-text-right">
			<FormItem>
				<Button type="primary" @click="handleSubmit">查询</Button>
				<Button class="ivu-ml-8" @click="handleReset">重置</Button>
				<!-- <a v-font="14" class="ivu-ml-8" @click="collapse = !collapse">
                        <template v-if="!collapse">
                            展开 <Icon type="ios-arrow-down" />
                        </template>
                        <template v-else>
                            收起 <Icon type="ios-arrow-up" />
                        </template>
                    </a> -->
			</FormItem>
			</Col>
		</Row>
	</Form>
</template>
<script>
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				grid: {
					xl: 8,
					lg: 8,
					md: 12,
					sm: 24,
					xs: 24
				},
				collapse: false,
				data: {
					name: '',
					status: '',
					count: null,
					date: '',
					time: '',
					cy: '',
					status2: '',
					status3: ''
				},
				rules: {

				}
			}
		},
		computed: {
			...mapState('admin/layout', [
				'isMobile'
			]),
			labelWidth() {
				return this.isMobile ? undefined : 100;
			},
			labelPosition() {
				return this.isMobile ? 'top' : 'right';
			}
		},
		methods: {
			handleSubmit() {
				this.$emit('on-submit', this.data);
			},
			handleReset() {
				this.$refs.form.resetFields();
				this.$emit('on-reset');
			}
		}
	}
</script>
