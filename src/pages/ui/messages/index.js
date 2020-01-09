import React from 'react'
import './index.less'
import { Card, Button, message } from 'antd'
export default class Messages extends React.Component {
    handleOpen = (type) => {
        if (!type) {
            message.info('This is a normal message');
        } else {
            message[type](`this is a ${type} message`)
        }
    }
    handleOpen2 = () => {
        const key = 'updatable';
        message.loading({ content: 'Loading...', key });
        setTimeout(() => {
            message.success({ content: 'Loaded!', key, duration: 2 });
        }, 1000);
    }
    render() {
        return (
            <div>
                <Card title="普通提示" className="wrap">
                    <Button type="primary" onClick={() => this.handleOpen()}>Open</Button>
                </Card>
                <Card title="提示类型" className="wrap">
                    <Button onClick={() => this.handleOpen('success')}>Success</Button>
                    <Button onClick={() => this.handleOpen('error')}>Error</Button>
                    <Button onClick={() => this.handleOpen('warning')}>Warning</Button>
                </Card>
                <Card title="更新消息内容" className="wrap">
                    <Button onClick={this.handleOpen2}>click</Button>
                </Card>
            </div>
        )
    }
}