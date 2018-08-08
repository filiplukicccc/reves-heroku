import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from 'semantic-ui-react';
import logo from '../images/REVES_GROUP.png';
import logoHol from '../images/REVES_HOLDING.png';
import logoTech from '../images/REVES_TECHNOLOGIES.png';
import HamburgerMenu from 'react-hamburger-menu';
import '../index.css';

class NavbarHome extends Component {
	state = {
		activeItem: 'home',
		visible: false,
		class: '',
	}


	toggleVisibility = () => this.setState({ visible: !this.state.visible })

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	handleClick() {
		this.setState({
			open: !this.state.open
		});
		this.toggleVisibility();
	}
	componentWillMount() {
		this.border();
	}
	border = () => {
		this.setState({
			class: 'link'
		})
	}

	render() {
		let log = window.location.href === 'http://localhost:3000/reves_technologies' ? logoTech : window.location.href === 'http://localhost:3000/reves_holding' ? logoHol : logo;
		const { activeItem } = this.state;
		const { visible } = this.state;
		console.log('this.state :', this.state);
		return (
			<div>
				<div className='navbarDiv'>
					<div className='navbarLogoDiv' style={{ paddingTop: '20px' }}><img src={log} />
						<div className='burger'>
							<HamburgerMenu
								isOpen={this.state.open}
								menuClicked={this.handleClick.bind(this)}
								width={24}
								height={21}
								strokeWidth={2}
								rotate={0}
								color='#003571'
								borderRadius={0}
								animationDuration={0.5}
							/>
						</div>
					</div>
					<div className='menuStandard' style={{ marginLeft: 'auto', paddingRight: '50px' }}>
						<Menu className='menuItem' stackable pointing secondary size='large' style={{ borderBottom: 'none' }}>
							<a href='/#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></a>
							<a href='/#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></a>
							<a href='/#managment'><Menu.Item className={this.state.class} name='Managment' active={activeItem === 'Managment'} onClick={this.border}>Managment</Menu.Item></a>
							<Link to='/reves_technologies' style={{ color: this.state.color }}><Menu.Item style={{ borderBottom: this.state.border, color: this.state.color }} name='Reves_technologies' active={activeItem === 'Reves_technologies'} onClick={this.border}>Reves Technologies</Menu.Item></Link>
							<Link to='/reves_holding'><Menu.Item name='Reves_holding' active={activeItem === 'Reves_holding'} onClick={this.handleItemClick}>Reves Holding</Menu.Item></Link>
							<Link to='/reves_holdings_africa'><Menu.Item name='Reves_holdings_africa' active={activeItem === 'Reves_holdings_africa'} onClick={this.handleItemClick}>Reves Holding Africa</Menu.Item></Link>
							<a href='/#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></a>
						</Menu>
					</div>
					<Transition visible={visible} animation='slide down' duration={650}>
						<div className='menuRes'>
							<Menu className='menuItem' stackable pointing secondary size='large' style={{ borderBottom: 'none' }}>
								<a href='/#home'><Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>Home</Menu.Item></a>
								<a href='/#about'><Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick}>About</Menu.Item></a>
								<a href='/#managment'><Menu.Item className={this.state.class} name='Managment' active={activeItem === 'Managment'} onClick={this.border}>Managment</Menu.Item></a>
								<Link to='/reves_technologies' style={{ color: this.state.color }}><Menu.Item style={{ borderBottom: this.state.border, color: this.state.color }} name='Reves_technologies' active={activeItem === 'Reves_technologies'} onClick={this.border}>Reves Technologies</Menu.Item></Link>
								<Link to='/reves_holding'><Menu.Item name='Reves_holding' active={activeItem === 'Reves_holding'} onClick={this.handleItemClick}>Reves Holding</Menu.Item></Link>
								<Link to='/reves_holdings_africa'><Menu.Item name='Reves_holdings_africa' active={activeItem === 'Reves_holdings_africa'} onClick={this.handleItemClick}>Reves Holding Africa</Menu.Item></Link>
								<a href='/#contact'><Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>Contact</Menu.Item></a>
							</Menu>
						</div>
					</Transition>
				</div>
			</div>
		)
	}
}

export default NavbarHome;