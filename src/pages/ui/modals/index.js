import React from 'react'
import './index.less'
import { Card, Button, Modal, message } from 'antd'
export default class Modals extends React.Component {
    state = {
        show1: false,
        show2: false,
        show3: false
    }
    handleOpen = (type) => {
        /* if (type === 'success' || type === 'info' || type === 'confirm' || type === 'warning') {
            Modal[type]()
            return
        } */
        if (type === 'confirm'){
            Modal.confirm({
                title:'确认',
                content:'你确定你会了嘛?',
                onOk(){},
                onCancel(){}
            })
            return
        }
        if (type === 'info'){
            Modal.info({
                title:'提示',
                content:'你好呀',
                onOk(){},
                onCancel(){}
            })
            return
        }
        if (type === 'success'){
            Modal.success({
                title:'提示',
                content:'isOk'
            })
            return
        }
        if (type === 'warning'){
            Modal.warning({
                title:'警告',
                content:'你确定?'
            })
        }
        this.setState({
            [type]: true
        })
    }
    isOk = (type) => {
        message.info('isOk', 1)
        this.setState(() => {
            return {
                [type]: false
            }
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="wrap">
                    <Button type="primary" onClick={() => this.handleOpen('show1')}>Open</Button>
                    <Button onClick={() => this.handleOpen('show2')}>自定义页脚</Button>
                    <Button onClick={() => this.handleOpen('show3')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="wrap">
                    <Button type="primary" onClick={() => this.handleOpen('confirm')}>Confirm</Button>
                    <Button onClick={() => this.handleOpen('info')}>Info</Button>
                    <Button onClick={() => this.handleOpen('success')}>Success</Button>
                    <Button type="danger" onClick={() => this.handleOpen('warning')}>Warning</Button>
                </Card>


                <Modal title="React" visible={this.state.show1} onCancel={() => {
                    this.setState({
                        show1: false
                    })
                }} onOk={() => { this.isOk('show1') }}>
                    <p>这是一个modal</p>
                </Modal>

                <Modal title="React" visible={this.state.show2} okText="好的" cancelText="算了" onCancel={() => {
                    this.setState({
                        show2: false
                    })
                }} onOk={() => { this.isOk('show2') }}>
                    <p>这是一个自定义modal</p>
                </Modal>

                <Modal title="React" visible={this.state.show3} centered={true} onCancel={() => {
                    this.setState({
                        show3: false
                    })
                }} onOk={() => { this.isOk('show3') }}>
                    <p>这是一个垂直居中的modal</p>
                </Modal>
            </div>
        )
    }
}