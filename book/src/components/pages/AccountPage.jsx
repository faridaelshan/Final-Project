import React from 'react'

const AccountPage = () => {
  return (
    <div className='accountpage'>
        <div className="account container">
             <h1>Şəxsi məlumatlar</h1>
            <div className="row">
                <div className="col-6">
                     <h4>Ad, soyad</h4>
                     <input type="text" value="Fəridə Məmmədova"/>
                     <h4>E-mail</h4>
                     <input type="email" value="feride565a3@gmail.com"  />
                     <h4>Əlaqə</h4>
                     <input type="text" value="2148512515456" />
                </div>
                <div className="col-6">
                    <h4>Çatdırılma ünvanı</h4>
                    <input type="text" value="Lorem ipsum dolor sit amet, consectetur adipisicing." />
                    <h4>Şifrə</h4>
                    <input type="password" value="56465"  />
                    <h4>Birthdate</h4>
                    <input type="date" value="12/15/1997"  />
                </div>
            </div>
            <button className='py-1 px-3'>Dəyişiklikləri yadda saxlayın</button>
        </div>
    </div>
  )
}

export default AccountPage