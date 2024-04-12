import "./Form.css";

import React from 'react'

const Form = () => {
    return (
        <div className="Form-menu">
            <div className="Container">
                <input className="input" type="text" placeholder="E-posta ve ya Telefon Numarasi" />
                <input className="input" type="password" placeholder="Sifre" />
                <button className="Login" type="submit">Giris Yap</button>
                <a href="#">Sifreni mi Unuttun?</a>
                <hr />
                <button className="Create" type="submit">Yeni hesap olustur</button>
            </div>

            <div className="footer">
                <p>Ünlü biri, marka veya işletme için</p>
                <a href="#">Sayfa oluştur.</a>
            </div>
        </div>
    )
}

export default Form