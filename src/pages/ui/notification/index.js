import React from 'react'
import './index.less'
import { Card, Button, notification } from 'antd'
export default class Notification extends React.Component {
    handleOpenNotice1 = (time) => {
        if (time === 'undefined') time = 4.5

        notification.open({
            message: 'title',
            description: 'This is the content of the notification',
            duration: time
        })
    }
    handleOpenNotice2 = (type) => {
        notification[type]({
            message: 'title',
            description: "This is the content of the notification"
        })
    }
    handleOpenNotice3 = () => {
        const key = 1
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                确定
            </Button>
        );
        notification.open({
            message: 'Notification Title',
            description:
                'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
            btn,
            key
        });
    }
    handleOpenNotice4 = (type) => {
        notification.info({
            message: `Notification ${type}`,
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement:type
        });
    }
    render() {
        return (
            <div>
                <Card title="基本用法" className="wrap">
                    <Button type="primary" onClick={() => this.handleOpenNotice1()}>4.5秒后关闭(默认)</Button>
                    <Button type="primary" onClick={() => this.handleOpenNotice1(1.5)}>1.5秒后关闭(默认)</Button>
                    <Button type="primary" onClick={() => this.handleOpenNotice1(0)}>不关闭</Button>
                </Card>
                <Card title="带有图标的通知提醒框" className="wrap">
                    <Button onClick={() => this.handleOpenNotice2('success')}>Success</Button>
                    <Button onClick={() => this.handleOpenNotice2('info')}>Info</Button>
                    <Button onClick={() => this.handleOpenNotice2('warning')}>Warning</Button>
                    <Button onClick={() => this.handleOpenNotice2('error')}>Error</Button>
                </Card>
                <Card title="自定义按钮" className="wrap">
                    <Button onClick={this.handleOpenNotice3}>open</Button>
                </Card>
                <Card title="弹出位置" className="wrap">
                    <Button type="primary" onClick={() => this.handleOpenNotice4('topLeft')}>topLeft</Button>
                    <Button type="primary" onClick={() => this.handleOpenNotice4('topRight')}>topRight</Button>
                    <Button type="primary" onClick={() => this.handleOpenNotice4('bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={() => this.handleOpenNotice4('bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}