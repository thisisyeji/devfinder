import Header from '../../component/Header';
import Search from '../../component/Search';
import Info from '../../component/Info';
import axios from 'axios';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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
  height: 100vh;
  box-sizing: border-box;
  background: #01012a;

  display: flex;
  justify-content: center;
  align-items: center;
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
	color: #fff;
	text-align: center;
	font-size: 24px;
	margin-top: 30px;
`;

function App() {
	const [info, setInfo] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onSearch = async (username) => {
		if (!username.trim()) return alert('이름을 입력하세요.');
		setIsLoading(true);
		try {
			const res = await axios.get(`https://api.github.com/users/${username}`);
			setInfo(res.data);
		} catch {
			setInfo('');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<GlobalStyle />

			<section>
				<Header />
				<Search onSearch={onSearch} />
				{isLoading ? (
					<Loading>Loading...</Loading>
				) : (
					info && <Info info={info} />
				)}
			</section>
		</>
	);
}

export default App;
