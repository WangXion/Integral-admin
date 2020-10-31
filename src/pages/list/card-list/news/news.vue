<template>
	<div>

		<div class="i-layout-page-header">
			<PageHeader title="新闻详情页" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<!-- <DescriptionList title="基本信息">
                <Description term="姓名：">Aresn</Description>
            </DescriptionList> -->

			<h1>主要信息</h1>
			<Divider />
			<DescriptionList title="" :col="2" v-for="(item ,index) in tableData" :key="index">

				<Description term="标题：" class="biao" style="padding-left: 38px;
    padding-right: 16px;
    width: 100%; margin: 10px 0;">
					<i-Input :value="item.biaoti" style="width: 200px;"></i-Input>
				</Description>
				<Description term="发 布 者：" style=" width: 33%; margin: 10px 0;">
					<i-Input :value="item.fabuzhe" style="width: 200px;"></i-Input>
				</Description>

				<Description term="发布时间：" style=" width: 33%; margin: 10px 0;">
					<i-Input disabled :value="item.fatime" style="width: 200px;"></i-Input>
				</Description>

				<Description term="阅  读  数：" style=" width: 33%;margin: 10px 0;">

					<i-Input disabled :value="item.yudushu" style="width: 200px;"></i-Input>
				</Description>

				<Description term="略缩图：" class="tu">
					<Upload action="//jsonplaceholder.typicode.com/posts/">
						<Button icon="ios-cloud-upload-outline">选择文件上传</Button>
					</Upload>
					<img :src="item.Img" alt="" style="width:100px">
				</Description>


			</DescriptionList>
			<DescriptionList />
			<template>
				<Divider />
				<h1>正文</h1>
				<div>
					<Card :bordered="false" dis-hover class="ivu-mt">
						<i-quill v-model="value" :min-height="400" />
						<Divider />

						<Button type="primary" @click="handleSubmit('formInline')" style=" position: absolute;
 bottom: -1px;
 width: 145px;">提交</Button>
					</Card>
				</div>
			</template>
		</Card>
	</div>
</template>
<script>
	import iQuill from '@/components/quill';
	export default {
		name: 'profile-basic',
		name: 'editor-quill',
		components: {
			iQuill
		},
		data() {
			return {
				value: `<h1>请编写你的内容</h1>`,
				tableData: [{
						Img: 'http://browser9.qhimg.com/bdr/__85/t01bbd94b90e850d1d3.jpg',
						biaoti: '这是一段标题',
						fabuzhe: 'qaq',
						fatime: '2020-12-12',
						yudushu: '2000',
					}

				],
			}
		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	input {
		width: 30rem;
		border-radius: 5px;
		outline: none;
		padding: 4px 6px;
		border: 2px solid gray;

	}

	/peed/.ivu-description-term {
		margin-left: 20px;
	}

	/peed/.biao {
		padding-left: 20px;
	}

	.tu {
		margin-left: 8px;
	}
</style>
