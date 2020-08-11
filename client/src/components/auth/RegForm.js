import React, {useState, useEffect, useHistory} from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';


const history = useHistoryl

export const RegForm = props => {
    const [post, setPost] = useState([]);

    const [err, setErr] = useState({
        username:'',
        password:'',
        role: ''
    });

    const [user, setUser] = useState({
        username:'',
        password: '',
        role:''
    });

const handleChanges = e => {
    e.persist();
    const newFormData = {
        ...usersModel, [e.target.name]: e.target.value
    }
    setUser(newFormData);
}
const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/register', users)
    .then(res => {
        setPost(res.data);
        console.log("Successful Registration! ", res.data);

        setUser({
            username: '',
            password:'',
            role:''
        });
        console.log("user data within registration ", user);
        history.push('/login');
    })
    .catch(err => {
        console.log(err.res);
    });
};

return (
    <form onSubmit={submitForm}>
        <label htmlFor="username">
            <input
            id="username"
            type="text"
            placeholder="Enter Username"
            onChange={handleChanges}
            value={user.username}
            name="username" />
        </label>
    <label htmlFor="password">
        <input
        id="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleChanges}
        value={user.passsword}
        name="password" />
    </label>
    <button>Submit</button>
</form>
);


}