import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';

const Card = styled.article`
	max-width: 500px;
	height: 100%;
	background-color: ${(props) => props.theme.bg};
	border-radius: 10px;
	padding: 40px;

	display: flex;
	gap: 20px;

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 90vw;
		margin: 5vw auto;
		padding: 20px 10px;
	}
`;

const UserAvatar = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 600px) {
		margin-top: 20px;
	}
`;

const UserInfo = styled.div`
	width: 340px;
	padding-left: 10px;
	color: ${(props) => props.theme.textSmall};

	.title {
		display: flex;
		justify-content: space-between;
		gap: 50px;

		.name {
			margin-bottom: 30px;
			h2 {
				font-size: 36px;
				font-weight: 600;
				margin-bottom: 20px;
				color: ${(props) => props.theme.text};
			}
		}

		span {
			font-style: italic;
		}

		.date {
			font-size: 14px;
		}
	}

	.bio {
		background: ${(props) => props.theme.text};
		color: ${(props) => props.theme.body};
		font-size: 20px;
		text-align: center;
		padding: 10px;
	}

	@media screen and (max-width: 600px) {
		max-width: 90vw;
		margin: 5vw 0;
		padding-left: 0;

		.title {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0;
			margin-bottom: 30px;

			.name {
				margin-bottom: 30px;
				text-align: center;
			}
		}
	}
`;

const NumLists = styled.ul`
	background: ${(props) => props.theme.box};
	color: ${(props) => props.theme.text};
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	padding: 30px;
	margin: 30px 0;

	li {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 14px;

		strong {
			font-size: 20px;
			font-weight: 700;
		}
	}

	@media screen and (max-width: 600px) {
		margin: 5vw auto;
		padding: 20px;
	}
`;

const AddressLists = styled.ul`
	color: ${(props) => props.theme.text};
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	li {
		width: calc(50% - 20px);
		margin: 10px;
		word-break: break-all;

		display: flex;
		justify-content: flex-start;
		align-items: center;
		svg {
			margin-right: 10px;
		}

		&.link {
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const Info = ({ info }) => {
	return (
		<Card>
			<UserAvatar>
				<img src={info.avatar_url} alt='userAvatar' />
			</UserAvatar>

			<UserInfo>
				<div className='title'>
					<div className='name'>
						<h2>{info.login}</h2>
						<span>{info.name}</span>
					</div>

					<span className='date'>
						Joined {info.created_at ? info.created_at.split('T')[0] : ''}
					</span>
				</div>

				<p className='bio'>{info.bio ? info.bio : 'This profile has no bio'}</p>

				<NumLists>
					<li>
						Repos
						<strong>{info.public_repos}</strong>
					</li>
					<li>
						Followers <strong>{info.followers}</strong>
					</li>
					<li>
						Following <strong>{info.following}</strong>
					</li>
				</NumLists>

				<AddressLists>
					<li>
						<FaMapMarkerAlt />
						{info.location ? info.location : 'None'}
					</li>
					<li>
						<FaTwitter />
						{info.twitter_username ? info.twitter_username : 'Not Available'}
					</li>
					<li
						className='link'
						onClick={() => window.open(`${info.html_url}`, '_blank')}>
						<FaLink />
						{info.html_url}
					</li>
					<li>
						<FaBuilding />
						{info.company ? info.company : 'None'}
					</li>
				</AddressLists>
			</UserInfo>
		</Card>
	);
};

export default Info;
