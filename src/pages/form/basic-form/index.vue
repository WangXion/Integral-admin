<template>
	<div>
		<div class="i-layout-page-header">
			<PageHeader title="村民管理" hidden-breadcrumb />
			<Button for="id" type="primary" style="    margin: 20px 0px;
    position: absolute;
    right: 56px;
    top: 103px;
}"
			 icon="ios-cloud-upload-outline" @click="$refs.file.click()">用户导入数据</Button>
		</div>

		<!-- <form method="post" enctype="multipart/form-data" name="form1" >
   <input id="inputFile"  type="file" ref="file" style="display:none" accept=".xls,.xlsx" @change="getFile($event)">
  </form> -->

		<Card :bordered="false" dis-hover class="ivu-mt i-table-no-border">

			<Input search size="large" enter-button="搜索" placeholder="输入用户名/手机号" style="max-width: 431px;" />
			<Table :columns="columns" :data="tableData" class="tab" style="    margin-top: 21px;
">
				<template slot-scope="{ row }" slot="name">
					<Avatar :src="row.avatar" size="small" />
					<span class="ivu-ml-8">{{ row.name }}</span>
				</template>
				<!-- <template slot-scope="{ row }" slot="gender">
                    <template v-if="row.gender === 'male'">男</template>
                    <template v-if="row.gender === 'female'">女</template>
                </template> -->
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
						minWidth: 140,
						background: " #C1C1C1"
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
						background: " #C1C1C1"
					},

					{
						title: '昵称',
						key: 'nicheng',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '所属村',
						key: 'cun',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '性别',
						key: 'gender',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '所属组',
						key: 'zu',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '个人编号',
						key: 'gb',
						minWidth: 180,
						background: " #C1C1C1"
					},
					{
						title: '姓名',
						key: 'name',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '出生年月',
						key: 'chu',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '政治面貌',
						key: 'zheng',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '文化程度',
						key: 'wenhua',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '工作单位',
						key: 'gongzuo',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '备注',
						key: 'bei',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '身份证',
						key: 'shen',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '手机号',
						key: 'call',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '注册时间',
						key: 'time',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '状态',
						key: 'zhuang',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '累积积分',
						key: 'leiji',
						minWidth: 140,
						background: " #C1C1C1"
					},
					{
						title: '当前剩余积分',
						key: 'shengyu',
						minWidth: 140,
						background: " #C1C1C1"
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
						zhuang: '已实名',
						leiji: '9999',
						shengyu: '99',
					},

				]
			}
		},
		//批量导入用户方法
		getFile(event) {
			this.isprocess = true;
			this.file = event.target.files[0];
			var url = axios.defaults.baseURL;
			event.preventDefault();
			let formData = new FormData();
			formData.append('file', this.file);
			var vm = this;
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			axios.post(vm.apiUrl + '/upload', formData, config).then(function(res) {
				vm.$Notice.open({
					title: '导入成功',
					duration: 2

				});
				vm.isprocess = false;
				vm.queryUsers();
				if (res.status === 2000) {
					/*这里做处理*/
				}
			})


			//  [HttpPost]
			//     [Route("upload")]
			//     public string upload()
			//     {
			//         string path = System.Web.HttpContext.Current.Server.MapPath(".");

			//         if (!Directory.Exists(path))
			//         {
			//             Directory.CreateDirectory(path);
			//         }
			//         HttpRequest request = System.Web.HttpContext.Current.Request;
			//         HttpFileCollection FileCollect = request.Files;
			//         if (FileCollect.Count > 0)          //如果集合的数量大于0
			//         {
			//             foreach (string str in FileCollect)
			//             {
			//                 HttpPostedFile FileSave = FileCollect[str];  //用key获取单个文件对象HttpPostedFile
			//                // string fileName = DateTime.Now.ToString("yyyyMMddhhmmss");
			//                 string savePath = path +"/"+ FileSave.FileName;     //通过此对象获取文件名

			//                 FileSave.SaveAs(savePath);//上传     
			//                 InputExcel(savePath);//导入数据库
			//             }
			//         }


			//         return "true";
			//     }
		}
	}
</script>
<style lang="less" scoped>
	/deep/.i-table-no-border .ivu-table th {
		background-color: #F8F8F9;
		//  color: red;
	}
</style>
