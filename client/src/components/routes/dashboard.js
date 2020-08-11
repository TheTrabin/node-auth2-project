/** @format */

import React, { useState, useEffect } from 'react';
import Issue from '../component/Issue';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const Dashboard = () => {
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		axiosWithAuth()
			.get('api/users')
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setUsers(response.data);
			})
			.catch(function (error) {
				console.log({ message: "Something isn't right: ", error });
			});
    };
    
    userEffect(() => {
        getUsers();
    }, []);

	console.log('issue pop: ', userlist); //sees issues fine.

	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<div className='post-list'>
			{issues.map((user) => (
				<User {...user} id={user.id} props={props} user={user} />
			))}
		</div>
	);
};
