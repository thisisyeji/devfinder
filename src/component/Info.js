import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';

const Card = styled.article`
	max-width: 500px;
	height: 100%;
	background-color: #33336d;
	border-radius: 10px;
	padding: 40px;

	display: flex;
	gap: 20px;
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
`;

const UserInfo = styled.div`
	width: 340px;
	padding-left: 10px;
	color: #999;

	.title {
		display: flex;
		justify-content: space-between;
		gap: 50px;

		.name {
			margin-bottom: 30px;
			h2 {
				font-size: 36px;
				margin-bottom: 20px;
				color: #fff;
			}
		}

		span {
			font-style: italic;
		}
	}

	.bio {
		color: #fff;
		font-size: 20px;
		text-align: center;
	}
`;

const NumLists = styled.ul`
	background: #020243;
	color: #d7d7d7;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	padding: 30px;
	margin: 30px 0;

	li {
		display: flex;
		flex-direction: column;
		gap: 5px;
		font-size: 14px;

		strong {
			font-size: 20px;
			font-weight: 700;
		}
	}
`;

const AddressLists = styled.ul`
	color: #d7d7d7;
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

					<span>
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
