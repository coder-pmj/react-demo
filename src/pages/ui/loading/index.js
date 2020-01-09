import React from 'react'
import './index.less'
import { Card, Spin, Button, Icon } from 'antd'
export default class Loading extends React.Component {
    state = {
        flag: false,
        disabled: false,
        btnText: '更新数据',
        text: 'hello ,my name is ant design'
    }
    static timer = null
    handleClick = () => {
        this.setState({
            flag: true,
            disabled: true,
            btnText: '正在获取数据'
        })
        this.timer = setTimeout(() => {
            this.setState({
                flag: false,
                disabled: false,
                btnText: '更新数据',
                text: 'can you use Reactjs?'
            })
            clearTimeout(this.timer)
        }, 1000)
    }
    render() {
        return (
            <div>
                <Card title="基本用法" className="wrap">
                    <Spin />
                </Card>
                <Card title="spin尺寸大小" className="wrap">
                    <Spin size="small" />
                    <Spin size="default" className="spin" />
                    <Spin size="large" />
                </Card>
                <Card title="自定义图标" className="wrap">
                    <Icon type="loading" spin />
                </Card>
                <Card title="演示" className="wrap">
                    <Spin spinning={this.state.flag} tip="loading……" style={{ width: '500px' }}>
                        <div style={{ width: '500px', backgroundColor: 'whitesmoke', padding: '20px' }}>
                            {this.state.text}
                        </div>
                    </Spin>
                    <Button type="primary" onClick={this.handleClick} disabled={this.state.disabled}>{this.state.btnText}</Button>
                </Card>
            </div>
        )
    }
}