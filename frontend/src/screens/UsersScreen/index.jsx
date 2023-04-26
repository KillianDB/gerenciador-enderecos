import './usersScreen.css';
import Header from '../../components/Header';
import { Fragment } from 'react';
import UserCard from '../../components/UserCard';

function UsersScreen(){
    const users = [
        {
            id: 1,
            name: "Julia Soares",
            email: "julia@email.com",
        },
        {
            id: 2,
            name: "Amanda Teles",
            email: "amanda@email.com",
        },
        {
            id: 3,
            name: "Conceição Jatoba",
            email: "conceicao@email.com",
        },
    ]

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
        </main>
        </Fragment>
    );
}

export default UsersScreen;