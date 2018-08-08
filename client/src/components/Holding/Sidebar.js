// import React, { Component } from 'react';
// import { Icon, Menu, Sidebar } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


// class SidebarHol extends Component {
// 	state = { visible: false }

// 	handleButtonClick = () => this.setState({ visible: !this.state.visible })

// 	handleSidebarHide = () => this.setState({ visible: false })
// 	render() {
// 		const { visible } = this.state;
// 		return (
// 			<div>
// 				<Icon name='arrow alternate circle right outline' size='huge' style={{ color: '#14aeef' }} onClick={this.handleButtonClick}></Icon>
// 				{/* <Sidebar.Pushable as={Segment}> */}
// 				<Sidebar
// 					as={Menu}
// 					animation='overlay'
// 					icon='labeled'
// 					inverted
// 					onHide={this.handleSidebarHide}
// 					vertical
// 					visible={visible}
// 					width='thin'
// 					style={{ background: '#f1f1f1' }}
// 				>
// 					<Link to='/reves_holding/home'>
// 						<Menu.Item as='a' style={{color:'rgba(14,39,81,1)'}}>
// 							<Icon name='home' />
// 							Home
// 					</Menu.Item>
// 					</Link>
// 					<Link to='/reves_holding/about'>
// 						<Menu.Item as='a' style={{color:'rgba(14,39,81,1)'}}>
// 							<Icon name='info circle' />
// 							About
//             </Menu.Item>
// 					</Link>
// 					<Link to='/reves_holding/team'>
// 						<Menu.Item as='a' style={{color:'rgba(14,39,81,1)'}}>
// 							<Icon name='users' />
// 							Team
//             </Menu.Item>
// 					</Link>
// 					<Link to='/reves_holding/contact'>
// 						<Menu.Item as='a' style={{color:'rgba(14,39,81,1)'}}>
// 							<Icon name='envelope' />
// 							Contact
//             </Menu.Item>
// 					</Link>
// 				</Sidebar>

// 				{/* <Sidebar.Pusher>
// 						<Segment basic>
// 							<Header as='h3'>Application Content</Header>
// 							<Image src={pic} />
// 						</Segment>
// 					</Sidebar.Pusher> */}
// 				{/* </Sidebar.Pushable> */}
// 			</div>
// 		)
// 	}
// }

// export default SidebarHol;
