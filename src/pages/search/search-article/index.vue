<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="积分待审核"> </PageHeader>

		</div>
		<template>
			<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
				<div>
					<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />

					<Table border :columns="columns1" :data="data1">
						<template slot-scope="{ row }" slot="name">
							<strong>{{ row.name }}</strong>
						</template>
						<template slot-scope="{ row, index }" slot="action">
							<router-link :to="{name:'dels'}" @click="show(index)">查看</router-link>
						</template>
					</Table>
					<div class="ivu-mt ivu-text-right" style="">
						<Page :total="100" show-elevator :simple="isMobile" />
					</div>
				</div>
			</Card>
		</template>

	</div>
</template>
<script>
	//分页
    import listData from './data';
    import {
        mapState
    } from 'vuex';
    export default {
        data() {
            return {
                columns1: [{
                               title: '用户姓名',
                               key: 'username',
                           },
                           {
                               title: '手机号',
                               key: 'call',
                           },
                           {
                               title: '用户编号',
                               key: 'biaohao',
                           },
                           {
                               title: '积分申请选项结果',
                               key: 'jieguo',
                           },
                           {
                               title: '积分申请介绍',
                               key: 'jieshao',
                           },
                           {
                               title: '操作',
                               slot: 'action',
                               width: 150,
                               align: 'center'
                           }
                ],

                data1: [{
                            username: '划船',
                            call: '133333',
                            biaohao: '01',
                            jieguo: '通过',
                            jieshao: '无',
                        },
                        {
                            username: '划船',
                            call: '133333',
                            biaohao: '01',
                            jieguo: '通过',
                            jieshao: '无',
                        }, {
                            username: '划船',
                            call: '133333',
                            biaohao: '01',
                            jieguo: '通过',
                            jieshao: '无',
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
       
        },
        mounted(){
            // this.$post('/cun-api/admin/checkIntegral',{
            //     data:({    //这里是发送给后台的数据
            //         "integralId": 1,
            //         "status": 0,
            //         "token":'a7ab3012-5252-4a6-979a-e60748ef633',
            //     })
            // })
            //     .then(res => {
            //         console.log('数据是:', res);
            //     })
            //     .catch((e) => {
            //         console.log('获取数据失败');
            // });
        },
        created(){
            this.$axios({
                method:'post',
                url:'http://47.111.248.110:13002/cun-api/admin/checkIntegral',
                data:({    //这里是发送给后台的数据
                    "integralId": 1,
                    "status": 0,
                    "token":'a7ab3012-5252-4a6-979a-e60748ef633',
                })
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据
            }).catch((error) =>
                console.log(error)       //请求失败返回的数据
            )
        }

    }
</script>
