import React from 'react'
import './index.less'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { switchMenu } from '../../redux/action'
class NavLeft extends React.Component {
    constructor() {
        super()
        this.state = {
            menuTreeNode: [],
            currentKey: null
        }
    }
    getTitle = (arr, key) => {
        if (arr[0].children) {
            return arr[0].children.filter(v => {
                return v.key === key
            })[0].title
        } else {
            return arr[0].title
        }
    }
    componentDidMount() {
        let currentKey = window.location.hash.replace(/^#|\?.*&/, '')
        if(currentKey==='/'){
            currentKey='/admin/home'
        }
        //为了在页面刷新也能够获取标题
        const { dispatch } = this.props;
        let selected = MenuConfig.filter(item => {
            if (item.children) {
                return item.children.some(v => v.key === currentKey)
            }
            else {
                return item.key === currentKey
            }
        })
        if (selected.length) {
            dispatch(switchMenu(this.getTitle(selected, currentKey)))
        }
        // console.log(this.getTitle(selected,currentKey))

        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode,
            currentKey
        })
    }
    handleClick = ({ item, key }) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        this.setState({
            currentKey: key
        })
    }
    //渲染导航栏方法
    renderMenu = (data) => {
        return data.map(item => {
            if (item.children) {
                return (
                    <Menu.SubMenu title={item.title} key={item.key}>
                        {
                            this.renderMenu(item.children)
                        }
                    </Menu.SubMenu>
                )

            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>

        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <h1>My MS</h1>
                </div>
                <Menu theme="dark" selectedKeys={this.state.currentKey} onClick={this.handleClick}>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}
export default connect()(NavLeft)