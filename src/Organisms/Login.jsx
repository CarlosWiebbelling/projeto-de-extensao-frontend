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
                            <label>Usuário</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Seu login" />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" placeholder="Senha" />
                        </div>
                        {/* 
                            <div className="form-group form-check col-9">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label">Eu li e aceito os termos e condições de uso</label>
                            </div> 
                        */}
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
