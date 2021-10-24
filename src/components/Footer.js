import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

	return (
		<footer>
			<a href="https://github.com/DN-Vanguard" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faGithubSquare} size="3x" />
			</a>
			<a href="https://www.linkedin.com/in/domiltannguyen/" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faLinkedin} size="3x" />
			</a>
			<a href="https://github.com/DN-Vanguard/react-portfolio" target="_blank" rel="noreferrer">
				<FontAwesomeIcon icon={faGithubSquare} size="3x" />
			</a>
		</footer>
	);
}