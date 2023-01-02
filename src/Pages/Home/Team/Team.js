import React, { useEffect, useState } from 'react';
import "./Team.css";


import TeamScolar from '../../Scolar/TeamScolar';
import SingleTeam from './SingleTeam';
import Experts from '../../../hooks/Experts';
import Imam from './Imam';
import Khatib from './Khatib';
import Khadem from './Khadem';
import Chairman from './Chairman';
import SecretaryGeneral from './SecretaryGeneral';
import Member from './Member';
import Muyajjem from './Muyajjem';
const Team = () => {


	// const [experts] = Experts();

	return (

		<div>
			{/* <section class="container pt-5 pb-5 ">

				<div class="mini_title">
					<p class="text-center">Our Expert</p>
				</div>

				<div class="text-center">
					<h5 class="main_heading">Islamic Scholars</h5>
				</div>

				<div class="d-flex justify-content-center mt-4">
					<div class="heading_line"></div>
				</div>
				<p class="text-center help_section_body_text mt-3">
					Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do <br></br> eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>

				<div class="row mt-5 d-flex justify-content-center text-center poppins">





					{
						experts.map(expert => <SingleTeam
							key={expert._id}
							expert={expert}
						></SingleTeam>)
					}



				</div>
			</section> */}
			<section>
				<TeamScolar></TeamScolar>
				<Imam></Imam>
				<Muyajjem></Muyajjem>
				<Khatib></Khatib>
				<Khadem></Khadem>
				<Chairman></Chairman>
				<SecretaryGeneral></SecretaryGeneral>
				<Member></Member>
			</section>
		</div>
	);
};

export default Team;