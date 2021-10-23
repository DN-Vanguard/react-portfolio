export default function AboutMe() {

	return (
		<div className="page-section">
			<h2 className="lines">About Me</h2>
			<div className="about-me-flex">
				<img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/profilepic.jpg`} alt="Domiltan Nguyen"/>
				<p style={{ textIndent: '40px' }}>
                Aspiring front-end web developer leveraging business Marketing and Information Systems background to build a seamless user experience on the web.
                Earned a Bachelor's degree in Marketing and Information Systems from the Foster School of Business and receiving Full Stack Web Development certificate
				from the UW Professional and Continuing Education Coding Bootcamp; holding newly developed technical skills in JavaScript, CSS, React.js, and responsive web design.
                My teammates describe me as an adaptive problem solver who is fascinated about developing apps, with a focus on mobile-first design and key attention to detail. 
                With each project, my goal is to know how best to engage users with a unique and mesmerizing interface. 
                I hope to utilize my skills and background to be a part of a fast-paced and quality-oriented team to create a gratifying user experience while browsing the web.
				</p>
			</div>
		</div>
	);
}