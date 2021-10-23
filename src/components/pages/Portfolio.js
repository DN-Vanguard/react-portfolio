import Project from '../Project';

const allProjectInfo = [
	{
		id: 1,
		title: 'Bar Hoppers',
		imageName: 'barHoppers.jpg',
		liveURL: 'https://dn-bar-hoppers.herokuapp.com/',
		repoURL: 'https://github.com/DN-Vanguard/bar-hoppers'
	},
	{
		id: 2,
		title: 'Facility Management',
		imageName: 'facilityMana.jpg',
		liveURL: 'https://dn-fac-mgmt.herokuapp.com/',
		repoURL: 'https://github.com/DN-Vanguard/Facility_Management'
	},
	{
		id: 3,
		title: 'Tech Blog',
		imageName: 'techBlog.jpg',
		liveURL: 'https://tech-blog-dn.herokuapp.com/',
		repoURL: 'https://github.com/DN-Vanguard/tech-blog'
	},
	{
		id: 4,
		title: 'Ecommerce Back End',
		imageName: 'backEnd.jpg',
		liveURL: 'https://www.youtube.com/watch?v=Cb57cVRGQbk',
		repoURL: 'https://github.com/DN-Vanguard/ecommerce-back-end'
	},
	{
		id: 5,
		title: 'Bike Trails',
		imageName: 'bikeTrails.jpg',
		liveURL: 'https://dn-vanguard.github.io/BikeTrails/',
		repoURL: 'https://github.com/DN-Vanguard/BikeTrails'
	},
	{
		id: 6,
		title: 'Budget Tracker',
		imageName: 'budgetTrack.jpg',
		liveURL: 'https://budget-tracker-dn.herokuapp.com/',
		repoURL: 'https://github.com/DN-Vanguard/progressive-budget'
	}
];

export default function Portfolio() {

	return (
		<div className="page-section">
			<h2 className="lines">Portfolio</h2>
			<div className="all-projects-container">
				{allProjectInfo.map( ( projectInfo ) => (
					<Project key={projectInfo.id}
						title={projectInfo.title}
						imageName={projectInfo.imageName}
						liveURL={projectInfo.liveURL}
						repoURL={projectInfo.repoURL}
					/>
				) )}
			</div>
		</div>
	);
}