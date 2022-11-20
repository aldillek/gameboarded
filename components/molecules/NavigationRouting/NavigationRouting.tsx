import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
import useModal from '../../../hooks/useModal'
import { LoginForm } from '../../organisms/LoginForm/LoginForm'
import { Modal } from '../../organisms/Modal/Modal'
import { RegisterForm } from '../../organisms/RegisterForm/RegisterForm'

const NavigationRoutingWrapper = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	gap: ${(props) => props.theme.gap.extraLarge};
	color: ${(props) => props.theme.colors.white};
`

const NavigationRoutingItem = styled.li`
	font-size: ${({ theme }) => theme.fontSize.medium};
	display: block;
	position: relative;
	:after {
		content: '';
		position: absolute;
		width: 80%;
		display: none;
		bottom: -4px;
		height: 2px;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${({ theme }) => theme.colors.lightBrown};
	}

	:hover {
		:after {
			display: block;
		}
	}
`

const NavigationRoutingLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.white};
`

export const NavigationRouting = () => {
	const [isAuth, setAuthState] = useState(true)

	const {
		handleCloseModal: loginCloseModal,
		handleOpenModal: loginOpenModal,
		isOpen: isLoginModalOpen,
	} = useModal(false)
	const {
		handleCloseModal: registerCloseModal,
		handleOpenModal: registerOpenModal,
		isOpen: isRegisterModalOpen,
	} = useModal(false)

	const AuthMenu = (
		<>
			<NavigationRoutingItem onClick={() => setAuthState(false)}>
				Set to unauth
			</NavigationRoutingItem>
			<NavigationRoutingItem>
				<NavigationRoutingLink href="/explore">explore</NavigationRoutingLink>
			</NavigationRoutingItem>
			<NavigationRoutingItem>
				<NavigationRoutingLink href="/forum">forum</NavigationRoutingLink>
			</NavigationRoutingItem>
			<NavigationRoutingItem>
				<NavigationRoutingLink href="test">logout</NavigationRoutingLink>
			</NavigationRoutingItem>
		</>
	)

	const UnauthMenu = (
		<>
			<NavigationRoutingItem onClick={() => setAuthState(true)}>
				Set to auth
			</NavigationRoutingItem>
			<NavigationRoutingItem>
				<NavigationRoutingLink href="/explore">explore</NavigationRoutingLink>
			</NavigationRoutingItem>
			<NavigationRoutingItem onClick={loginOpenModal}>
				sign in
			</NavigationRoutingItem>
			<NavigationRoutingItem onClick={registerOpenModal}>
				sign up
			</NavigationRoutingItem>
		</>
	)

	return (
		<NavigationRoutingWrapper>
			{isAuth ? AuthMenu : UnauthMenu}
			<Modal isOpen={isLoginModalOpen} handleClose={loginCloseModal}>
				<LoginForm></LoginForm>
			</Modal>
			<Modal isOpen={isRegisterModalOpen} handleClose={registerCloseModal}>
				<RegisterForm></RegisterForm>
			</Modal>
		</NavigationRoutingWrapper>
	)
}
