import './usersScreen.css';
import Header from '../../components/Header';
import { Fragment } from 'react';
import UserCard from '../../components/UserCard';
import { useState, useEffect } from 'react';
import api from "../../api/api";

function UsersScreen(){

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        async function getUsers(){
            const response = await api.get('/users');
            setUsers(response.data)
        }
        getUsers();
    },[]);

    return(
        <Fragment>
        <Header title='Usuários cadastrados'/>
        <main>
            {users.map(user=>
            <UserCard 
            key={user.id}
            id={user.id} 
            name={user.name} 
            email={user.email}
            />
                )}
                <button onClick={()=>setPage(page+1)}>Próxima página</button>
        </main>
        </Fragment>
    );
}

export default UsersScreen;