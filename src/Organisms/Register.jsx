import React from 'react'

import ifrs from '../Utils/static/images/ifrs.png'

export default props => {
	return (
		<div className='login'>
			<div className='login-content'>
				<div className='login-header'>
					<img src={ ifrs } alt='logo' />
				</div>
                <div className='login-body'>
                    <form>
                        <div className="form-group">
                            <label>Nome completo</label>
                            <input type="email" className="form-control" aria-describedby="email" placeholder="Seu nome completo" />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" className="form-control" aria-describedby="email" placeholder="Seu email" />
                        </div>
                        <button type="submit" className="btn btn-login">Entrar</button>
                        <button onClick={ props.changeMode } type="submit" className="btn btn-register">Registrar</button>
                    </form>
                </div>
                <hr/>
                <div className='login-footer'>
                    {/* <a href="http://google">Esqueci minha senha</a> */}
                </div>
			</div>
		</div>
	)
}

/*
<h4
    style={{
        color: '#848484',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginBottom: '0',
        marginLeft: '15px',
        fontSize: '27px'
    }}>
    DRUMBO
</h4>
*/
