import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
    // Assuming state management and event handling will be added here

    render() {
        return (
            <div className="form-container">
                <input type="text" placeholder="Nome de usuário" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Repetir senha" />
                <button>Logar</button>
                <div className="separator">Ou cadastre com</div>
                <div className="google-btn">
                    <img src="https://source.unsplash.com/random/20x20?google" alt="Google Logo" />
                    <span>Google</span>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<RegistrationForm />, document.getElementById('root'));
