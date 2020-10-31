<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="banner" hidden-breadcrumb />
		</div>
		<!-- <Card :bordered="false" dis-hover class="ivu-mt">
            <Row type="flex" justify="center" align="middle" class="ivu-text-center">
                <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="ivu-mt ivu-mb">
                    <p>进行中的任务</p>
                    <p v-font="24">10 个任务</p>
                </Col>
                <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="ivu-mt ivu-mb">
                    <p>剩余任务</p>
                    <p v-font="24">3 个任务</p>
                </Col>
                <Col :xl="8" :lg="8" :md="8" :sm="24" :xs="24" class="ivu-mt ivu-mb">
                    <p>任务总耗时</p>
                    <p v-font="24">120 个小时</p>
                </Col>
            </Row>
        </Card> -->
		<Card title="" :bordered="false" dis-hover class="ivu-mt">
			<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />
			<div>
				<Button type="primary" @click="zeng= true" style="width: 130px;
    position: absolute;
    right: 5px;
    top: -65px;">添加</Button>
				<List :loading="loading" class="ivu-mt">
					<div v-height="300" v-if="loading"></div>
					<template>
						<Modal v-model="zeng" title="banner图片" @on-ok="asyncOKs">
							<Upload action="//jsonplaceholder.typicode.com/posts/">
								<Button icon="ios-cloud-upload-outline">选择文件上传</Button>
							</Upload>
							<Form :model="formTop1" label-position="top">
								<FormItem label="Img名字">
									<i-Input v-model="formTop1.input11"></i-Input>
								</FormItem>
								<FormItem label="ImgURl">
									<i-Input v-model="formTop1.input22"></i-Input>
								</FormItem>
							</Form>
						</Modal>
						<!-- <Button type="primary" style="margin-right: 5px;display:flex;justify-content:left; margin-bottom: 15px;" @click="zeng= true" >增加</Button> -->
					</template>
					<Table border :columns="columns1" :data="data1">

						<template slot-scope="{ row }" slot="name">
							<strong>{{ row.name }}</strong>
						</template>
						<template slot-scope="{ row, index }" slot="action">
							<Modal v-model="show" title="banner图片" @on-ok="asyncOK">
								<Upload action="//jsonplaceholder.typicode.com/posts/">
									<Button icon="ios-cloud-upload-outline">选择文件上传</Button>
								</Upload>
								<Form :model="formTop" label-position="top">
									<FormItem label="Img名字">
										<i-Input v-model="formTop.input1"></i-Input>
									</FormItem>
									<FormItem label="ImgURl">
										<i-Input v-model="formTop.input2"></i-Input>
									</FormItem>
								</Form>
							</Modal>
							<Button type="primary" size="small" style="margin-right: 5px" @click="show= true">编辑</Button>
							<Button type="error" size="small" @click="remove(index)">删除</Button>
						</template>
					</Table>

				</List>
				<div class="ivu-mt ivu-text-right">
					<Page :total="total" show-elevator :simple="isMobile" />
				</div>
			</div>
		</Card>

		<!-- <Modal v-model="showUpdate" title="任务编辑" :loading="submitting" @on-ok="handleSubmit">
            <Form :model="newData" :rules="rules" ref="form">
                <FormItem label="任务名称：" prop="project">
                    <Input v-model="newData.project" placeholder="请输入任务名称" />
                </FormItem>
                <FormItem label="开始时间：" prop="time">
                    <DatePicker v-model="newData.time" type="datetime" placeholder="请选择开始时间" v-width="'100%'" />
                </FormItem>
                <FormItem label="负责人：" prop="owner">
                    <Select v-model="newData.owner" placeholder="请选择负责人">
                        <Option value="Aresn">Aresn</Option>
                        <Option value="中小鱼">中小鱼</Option>
                        <Option value="Echo">Echo</Option>
                        <Option value="唐不苦">唐不苦</Option>
                        <Option value="甜筒">甜筒</Option>
                    </Select>
                </FormItem>
                <FormItem label="任务描述：" prop="desc">
                    <Input v-model="newData.desc" type="textarea" placeholder="请输入任务描述" />
                </FormItem>
            </Form>
        </Modal> -->
	</div>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    // import listData from './data';
    // const baseData = {
    //     img: '',
    //     Imgnane: '',
    //     ImgURL: '',
    //     desc: '',
    //     status: 'normal'
    // };

    export default {
        name: 'list-basic-list',
        data() {
            return {
                total:0,
                type: 'all',
                data: [],
                loading: false,
                showUpdate: false,
                submitting: true,
                updateIndex: -1,
                // newData: Object.assign({}, baseData),
                show: false,
                formTop: {
                    input1: "",
                    input2: ""
                },
                zeng: false,
                formTop1: {
                    input11: "",
                    input22: ""
                },
                columns1: [
                    {
                        title: "BannerId",
                        key: "BannerId"
                    },

                    {
                        title: "创建时间",
                        key: "createDate"
                    },
                    {
                        title: "banner",
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
                        title: "状态（0:未发布 1：已发布）",
                        key: "status"
                    },
                    {
                        title: "标题",
                        key: "title"
                    },
                    {
                        title: "地址",
                        key: "ImgURl"
                    },
                    {
                        title: "操作",
                        slot: "action",
                        width: 150,
                        align: "center"
                    }
                ],

                data1: [{
                    BannerId:1,
                    createDate:2020-12-12,
                    status:0,
                    title:"标题",
                    img: "https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large",
                    ImgURl: "https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large"
                }]
            }
        },
        computed: {
            ...mapState('admin/layout', [
                'isMobile'
            ])
        },
        mounted(){
            var _that=this
            _that.$axios({
                method:'post',
                url:'http://47.111.248.110:13002/cun-api/admin/listBanner',
                data:{
                    "curPage": 0,
                    "maxPage": 100,
                    "status": 0,
                    "token":'a7ab3012-5252-4a6-979a-e60748ef633',
                }
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response.data.data.bannerId)       //请求成功返回的数据
                this.total=response.data.data.pageSize//分页总数量
                // this.data1=
            }).catch((error) =>
                console.log(error)       //请求失败返回的数据
            )
        },

        methods: {
            remove(index) {
                this.$Modal.confirm({
                    title: '确定删除',
                    content: '选定的内容吗？',
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
            asyncOKs() {
                setTimeout(() => {
                    this.zeng = false;
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
