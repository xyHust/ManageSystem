import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import {Route, Link } from 'react-router-dom'

import { Card, Col, Row, Breadcrumb, Form, Input, Button, Icon, Table, Modal, Popconfirm, message } from 'antd';

const FormItem = Form.Item;

class RoleList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			getDataArr: [],
			visible: false
		}
	}
	confirm = (e) => {
	  console.log(e);
	  message.success('删除成功！');
	}

	cancel = (e) => {
	  console.log(e);
	  // message.error('删除失败！');
	}
	getColumns = () => {
		let obj = this;
		return [{
			title: '角色名称',
			dataIndex: 'name',
			width: 150
		}, {
			title: '英文名称',
			dataIndex: 'ename',
			width: 150
		}, {
			title: '数据范围',
			dataIndex: 'datarange',
			width: 300
		}, {
			title: '是否启用',
			dataIndex: 'isopen',
			width: 150
		}, {
			title: '备注信息',
			dataIndex: 'remark',
			width: 150
		}, {
		    title: '操作',
		    key: 'operation',
		    width: 300,
		    render(event){
		    	return(
			    	<div>
						<Button type="primary" onClick={obj.showModal.bind(obj,event)}><Icon type="search" />查看</Button>
						<Button type="primary" onClick={obj.showModal.bind(obj,event)}><Icon type="search" />更新</Button>
						<Button type="primary" onClick={obj.showModal.bind(obj,event)}><Icon type="search" />分配权限</Button>
			    		<Popconfirm placement="bottomRight" title="删除后不可恢复，确定删除吗？" onConfirm={obj.confirm} onCancel={obj.cancel} okText="确定" cancelText="放弃">
							<Button type="primary"><Icon type="close" />删除</Button>
						</Popconfirm>
			    	</div>
		    	)
			}
		}]
	}
	showModal = (event) => {
		console.log(event);
	    this.setState({ visible: true });
	}
	handleOk = (e) => {
	    this.setState({
	      	visible: false,
	    });
	}
	handleCancel = (e) => {
	    this.setState({
	      	visible: false,
	    });
	}
	/*componentWillMount(){ // 请求数据
		let self = this;
        fetch(__dirname+'query/sysLogList', {
            method: 'POST',
        }).then(function(res){
            return res.json().then(function(data){ // 获取服务器返回的json对象
                return data;
            });
        }).then(function(data){
            if(data.isLogin === true){ // 如果验证用户信息正确，就跳转到主页面
                self.setState({"getDataArr": data.list});
            }else{
                self.props.history.push("/"); // 未登录跳转登录
            }
        }).catch(function(e){
            console.error(e);
            self.props.history.push("/"); // 出错或者超时跳转登录
        });
	}*/
	render(){
		return(
			<div className="panel">
				<Row>
					<Col span={24}>
						<Card bordered={false}>
						    <h2>角色列表</h2>
	                        <Breadcrumb style={{ textAlign: 'right' }}>
	                            <Breadcrumb.Item>首页</Breadcrumb.Item>
	                            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>角色管理</Breadcrumb.Item>
	                            <Breadcrumb.Item>角色列表</Breadcrumb.Item>
	                        </Breadcrumb>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Card bordered={false}>
							<Button type="primary" className="ant-card-rightBtn"><Icon type="plus" />新建角色</Button>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Card bordered={false}>
						    <Table columns={this.getColumns()} size="small" dataSource={this.state.getDataArr} />
						</Card>
					</Col>
				</Row>
		        <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
		        	
		        </Modal>
			</div>
		)
	}
}
export default RoleList;