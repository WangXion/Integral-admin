<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="认证详情页" hidden-breadcrumb />
		</div>
		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">
			<DescriptionList title="基本信息">
				<Description term="用户编号：">01</Description>
				<Description term="头像："><img src="https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large" alt=""
					 srcset="" style="width:80px"></Description>
				<Description term="昵称：">和平大使</Description>
				<Description term="所属村：">中关村</Description>
				<Description term="所属组：">和平组</Description>
				<Description term="个人编号：">007</Description>
				<Description term="姓名：">Aresn</Description>
				<Description term="性别：">男</Description>
				<Description term="出生年月：">1991-05-14</Description>
				<Description term="政治面貌：">党员</Description>
				<Description term="文化程度：">本科</Description>
				<Description term="工作单位：">北京市朝阳区</Description>
				<Description term="备注：">无</Description>
				<Description term="身份证：">36935536552</Description>
				<Description term="手机号：">13333333</Description>
				<Description term="注册时间：">1991-05-14</Description>
				<Description term="状态（是否匹配实名）：">已实名</Description>
				<Description term="累积积分：">99999</Description>
				<Description term="当前剩余积分：">99</Description>
			</DescriptionList>
			<Divider />
			<Divider />
			<DescriptionList title="表格信息" />
			<Table :columns="columns" :data="tableData">
				<template slot-scope="{ row }" slot="name">
					<Avatar :src="row.avatar" size="small" />
					<span class="ivu-ml-8">{{ row.name }}</span>
				</template>
				<template slot-scope="{ row }" slot="gender">
					<template v-if="row.gender === 'male'">男</template>
					<template v-if="row.gender === 'female'">女</template>
				</template>
			</Table>
		</Card>
	</div>
</template>
<script>
    export default {
        // name: 'profile-basic',
        data() {
            return {
                columns: [{
                              title: '用户编号',
                              key: 'biaohao',
                              minWidth: 140
                          },
                          {
                              title: '头像',
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
                              title: '昵称',
                              key: 'nicheng',
                              minWidth: 140
                          },
                          {
                              title: '所属村',
                              key: 'cun',
                              minWidth: 140
                          },
                          {
                              title: '性别',
                              key: 'gender',
                              minWidth: 140
                          },
                          {
                              title: '所属组',
                              key: 'zu',
                              minWidth: 140
                          },
                          {
                              title: '个人编号',
                              key: 'gb',
                              minWidth: 180
                          },
                          {
                              title: '姓名',
                              key: 'name',
                              minWidth: 140
                          },
                          {
                              title: '出生年月',
                              key: 'chu',
                              minWidth: 140
                          },
                          {
                              title: '政治面貌',
                              key: 'zheng',
                              minWidth: 140
                          },
                          {
                              title: '文化程度',
                              key: 'wenhua',
                              minWidth: 140
                          },
                          {
                              title: '工作单位',
                              key: 'gongzuo',
                              minWidth: 140
                          },
                          {
                              title: '备注',
                              key: 'bei',
                              minWidth: 140
                          },
                          {
                              title: '身份证',
                              key: 'shen',
                              minWidth: 140
                          },
                          {
                              title: '手机号',
                              key: 'call',
                              minWidth: 140
                          },
                          {
                              title: '注册时间',
                              key: 'time',
                              minWidth: 140
                          },
                          {
                              title: '状态',
                              key: 'zhuang',
                              minWidth: 140
                          },
                          {
                              title: '累积积分',
                              key: 'leiji',
                              minWidth: 140
                          },
                          {
                              title: '当前剩余积分',
                              key: 'shengyu',
                              minWidth: 140
                          },

                ],
                tableData: [{
                    biaohao: '02',
                    img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large',
                    nicheng: 'aaa',
                    cun: '中关村',
                    gender: '男',
                    zu: '和拼租',
                    gb: '001',
                    name: 'QAQ',
                    chu: '1999-02',
                    zheng: '党员',
                    wenhua: '本科',
                    gongzuo: '北京市朝阳区',
                    bei: '无',
                    shen: '669892592',
                    call: '1368822555',
                    time: '2020-11-12',
                    leiji: '9999',
                    shengyu: '99',
                },

                ]
            }
        }
    }
</script>
