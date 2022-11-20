import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

const LogoWrapper = styled(Link)`
	width: 120px;
	height: inherit;
	display: grid;
	position: relative;
	place-items: center;
	img {
		background-color: white;
		height: 64px;
	}
`

export const Logo = () => {
	return (
		<LogoWrapper href="/">
			<Image fill src="/logo.svg" alt="Logo" />
		</LogoWrapper>
	)
}
