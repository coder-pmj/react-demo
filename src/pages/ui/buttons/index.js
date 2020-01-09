import React from 'react'
import './index.less'
import { Card, Button, Radio } from 'antd'

export default class Buttons extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            btnText: '关闭',
            size: 'small'
        }
    }
    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading,
            btnText: this.state.loading ? '开启' : '关闭'
        })
    }
    handleSize=(e)=>{
         this.setState({
             size:e.target.value
         })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card">
                    <Button type="primary">按钮</Button>
                    <Button>按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title="图形按钮" className="card">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loadinge}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>{this.state.btnText}</Button>
                </Card>
                <Card title="按钮组" className="card">
                    <Button.Group>
                        <Button style={{ margin: 0 }} type="primary" icon="left">后退</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card">
                    <Radio.Group value={this.state.size} onChange={this.handleSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>按钮</Button>
                    <Button size={this.state.size}>按钮</Button>
                    <Button type="dashed" size={this.state.size}>按钮</Button>
                    <Button type="danger" size={this.state.size}>按钮</Button>
                </Card>
            </div>
        )
    }
}