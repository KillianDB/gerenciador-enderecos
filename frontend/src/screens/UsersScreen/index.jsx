import './usersScreen.css';
import Header from '../../components/Header';
import { Fragment } from 'react';
import UserCard from '../../components/UserCard';
import { useState, useEffect } from 'react';

function UsersScreen(){

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        console.log('Prazer, eu sou o useEffect!')
    },[page]);

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