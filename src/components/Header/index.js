import React from 'react'
import './index.less'
import { Row, Col } from 'antd'
import Util from '../../util/util'
import { connect } from 'react-redux'

function mapStateToProps(state){
    return{
        menuName:state.menuName
    }
}
class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: "",//用户名
            sysTime: "2019/12/04  09:35:56"//系统时间
        }
        this.refLocation = React.createRef()
        this.timer = null
    }
    componentDidMount() {
       
        //设置用户名
        this.setState({
            userName: '河畔一角'
        })
        //时间定时器
        this.timer = setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime: sysTime
            })
        }, 1000)
        //获取地理位置
        setTimeout(()=>{
            Util.setLocation(this.refLocation)
        },1000)
    }
    componentWillUnmount() {
        //清除定时器
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎您,{this.state.userName}</span>
                        <a href="/login" >退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        {this.props.menuName}
                    </Col>
                    <Col span={20} className="location">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="location-deatil" ref={this.refLocation}>正在获取当前位置</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header)