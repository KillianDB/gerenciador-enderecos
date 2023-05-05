import './userCard.css';
import { Link } from 'react-router-dom';

function UserCard({ id, name, email, addresses }) {
    return (
        <div>
            <span>Id: {id}</span>
            <span>Nome: {name}</span>
            <span>Email: {email}</span>
            <div>Endereços:
                <Link to={`/endereco-registro/${id}`}>

                    <button>Adicionar</button>
                </Link>
                {addresses.map(address => {
                    return (
                        <div>
                            <span>CEP: {address.postal_code}</span>
                            <span> {address.street},</span>
                            <span> {address.house_number}</span>
                            <span> {address.city}</span>
                        </div>
                    )
                })}</div>
        </div>
    );
}

export default UserCard;