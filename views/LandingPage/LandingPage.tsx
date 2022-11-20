import React from 'react'
import styled from 'styled-components'
import { LandingPageTitle } from '../../components/molecules/LandingPageTtitle/LandingPageTitle'

const LandingPageWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	background-image: url('../../assets/images/landing-page-background.png');
	background-size: cover;
	align-items: center;
	justify-content: center;
	color: white;
`

export const LandingPage = () => {
	return (
		<LandingPageWrapper>
			<LandingPageTitle></LandingPageTitle>
		</LandingPageWrapper>
	)
}
