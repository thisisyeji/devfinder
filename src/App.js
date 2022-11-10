import Search from './component/Search';
import Info from './component/Info';
import axios from 'axios';
import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.body};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu', sans-serif;

}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
text-decoration: none;
}
`;

const Loading = styled.p`
	color: ${({ theme }) => theme.text};
	text-align: center;
	font-size: 24px;
	margin-top: 30px;
`;

const Header = styled.div`
	position: relative;

	h1 {
		color: ${({ theme }) => theme.text};
		font-size: 32px;
		font-weight: 700;
		margin: 20px;
	}

	button {
		color: ${({ theme }) => theme.text};
		font-size: 20px;
		border: none;
		background: none;
		position: absolute;
		top: 0;
		right: 20px;
		transition: 0.5s;
		cursor: pointer;

		&:hover {
			transform: rotate(-40deg);
		}
	}
`;

const Error = styled(Loading)``;

function App() {
	const [info, setInfo] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [theme, setTheme] = useState('light');
	const isDarkMode = theme === 'dark';

	const onDark = () => setTheme(isDarkMode ? 'light' : 'dark');

	const onSearch = async (username) => {
		if (!username.trim()) return alert('이름을 입력하세요.');
		setIsLoading(true);
		setError(false);
		try {
			const res = await axios.get(`https://api.github.com/users/${username}`);
			setInfo(res.data);
		} catch {
			setInfo('');
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				<section>
					<Header>
						<h1>devfinder</h1>
						<button onClick={() => onDark()}>
							{isDarkMode ? <BsFillSunFill /> : <BsMoonStarsFill />}
						</button>
					</Header>

					<Search onSearch={onSearch} />
					{isLoading ? (
						<Loading>Loading...</Loading>
					) : (
						info && <Info info={info} />
					)}

					{error && <Error>Oops! No data.</Error>}
				</section>
			</ThemeProvider>
		</>
	);
}

export default App;
