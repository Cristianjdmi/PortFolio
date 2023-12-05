import React, { useState } from "react";
import "./Portfolio.css";
import { projects } from "./projects";
import { Modal } from "../components/index";

const Portfolio = () => {
	const [currentidx, setCurrentIdx] = useState(null);

	const handleClick = (i) => setCurrentIdx(i);
	const clearCurrent = ()=> setCurrentIdx(null)

	const projectList = projects.map((project, i) => {
		return (
			<div
				key={i}
				onClick={() => handleClick(i)}
				className='portfolio-projects-frame'>
				<h3 className="bold">{project.title}</h3>
				<img src={project.image} alt={project.title} />
			</div>
		);
	});

	let currentProject = currentidx >= 0 && projects[currentidx];

	return (
		<div id='portfolio' className='portfolio-container'>
			<h1>Portfolio</h1>
			<h3>
				Il mio Github :{" "}
				<span>
					<a
						target='_blank'
						href='https://github.com/Cristianjdmi'
						rel='noreferrer'>
						{" "}
						🚀Git.hub
					</a>
				</span>
			</h3>
			<div className='portfolio-grid'>
				{currentProject && (
					<Modal
						onClick={clearCurrent}
						title={currentProject.title}
						description={currentProject.description}
            image={currentProject.image}
            url={currentProject.url}
					/>
				)}
				{projectList}
			</div>
		</div>
	);
};

export default Portfolio;
