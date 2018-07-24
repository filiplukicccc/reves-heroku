// import React, { Component } from 'react';
// import { Icon, Menu, Sidebar } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';


// class SidebarTech extends Component {
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
// 					onClick={this.handleSidebarHide}
// 					vertical
// 					visible={visible}
// 					width='thin'
// 					style={{ background: '#003571' }}
// 				>
// 					<a href='#home'>
// 						<Menu.Item as='a'>
// 							<Icon name='home' />
// 							Home
// 					</Menu.Item>
// 					</a>
// 					<a href='#about'>
// 						<Menu.Item as='a'>
// 							<Icon name='info circle' />
// 							About
//             </Menu.Item>
// 					</a>
// 					<a href='#team'>
// 						<Menu.Item as='a'>
// 							<Icon name='users' />
// 							Team
//             </Menu.Item>
// 					</a>
// 					<a href='#contact'>
// 						<Menu.Item as='a'>
// 							<Icon name='envelope' />
// 							Contact
//             </Menu.Item>
// 					</a>
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

// export default SidebarTech;
