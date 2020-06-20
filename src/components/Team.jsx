import React from 'react';
import Member from './Member';
import './Team.css';
import 'bulma/css/bulma.min.css';


const Team = () => {
	let about = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, corrupti, aliquid laudantium ullam perferendis nesciunt placeat, numquam facere dignissimos quos hic voluptatibus at.Eaque esse nesciunt inventore placeat, praesentium maiores ? '

	let name = 'Nombre del integrante'

	return (
		<div class="columns container__nhulox">
			<Member isFirst={true} about={about} name={name} side='left' />
			<Member isFirst={false} about={about} name={name} side='right' />
		</div>
	)
}

export default Team;