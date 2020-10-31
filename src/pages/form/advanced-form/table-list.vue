<template>
	<div class="i-table-no-border">
		<Table ref="table" :columns="columns" :data="createData" :loading="loading">

			<template slot-scope="{ row }" slot="name">
				<span>{{ row.name }}</span>
			</template>
			<template slot-scope="{ row,index }" slot="action">
				<router-link :to="{name:'xianq'}" @click="show(index)">查看</router-link>
			</template>
		</Table>
	</div>
</template>
<script>
    import random from '@/libs/random_str';

    export default {
        data() {
            return {
                columns: [{
                              title: '用户编号',
                              key: 'biaohao',
                              minWidth: 100
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
                              minWidth: 100,
                          },
                          {
                              title: '所属村',
                              key: 'desc2',
                              minWidth: 100
                          },
                          {
                              title: '所属组',
                              key: 'desc3',
                              minWidth: 100
                          },
                          {
                              title: '个人编号',
                              key: 'desc4',
                              minWidth: 100
                          },
                          {
                              title: '姓名',
                              key: 'desc5',
                              minWidth: 80
                          },
                          {
                              title: '文化程度',
                              key: 'desc6',
                              minWidth: 100
                          },
                          {
                              title: '工作单位',
                              key: 'desc7',
                              minWidth: 100
                          },
                          {
                              title: '手机号',
                              key: 'desc8',
                              minWidth: 100
                          },
                          {
                              title: '注册时间',
                              key: 'desc9',
                              minWidth: 100
                          },
                          {
                              title: '操作',
                              slot: 'action',
                              align: 'center',
                              minWidth: 140
                          }
                ],
                loading: false,
                list: [],
                selectedData: [],
                current: 1,
                size: 10,
                sortType: 'normal', // 当前排序类型，可选值为：normal（默认） || asc（升序）|| desc（降序）,
                sortColumns: '',
                filterType: undefined,
                showCreate: false,
                createData: [{
                                 biaohao: '01',
                                 img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large',
                                 desc1: '1',
                                 desc2: '1',
                                 desc3: '1',
                                 desc4: '1',
                                 desc5: '1',
                                 desc6: '1',
                                 desc7: '1',
                                 desc8: '1',
                                 desc9: '1',
                             },
                             {
                                 biaohao: '02',
                                 img: 'https://dev-file.iviewui.com/YSlcnG8cnT6zMRGskMn4F5E0sghiFB9w/large',
                                 desc1: '2',
                                 desc2: '2',
                                 desc3: '2',
                                 desc4: '22',
                                 desc5: '2',
                                 desc6: '2',
                                 desc7: '2',
                                 desc8: '2',
                                 desc9: '1',
                             },
                ]
            }
        },
    }
</script>
