import "./Form.css";

import React from 'react'

const Form = () => {
    return (
        <div className="Form-menu">
            <div className="Container">
                <input type="text" placeholder="E-posta ve ya Telefon Numarasi" />
                <input type="password" placeholder="Sifre" />
                <button type="submit">Giris Yap</button>
                <a href="#">Sifreni mi Unuttun?</a>
                <hr />
                <button type="submit">Yeni hesap olustur</button>
            </div>
            <p>Ünlü biri, marka veya işletme için</p>
            <a href="#">Sayfa oluştur.</a>

        </div>
    )
}

export default Form