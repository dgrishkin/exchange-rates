import React from "react";

const RootPage: React.FC = () => {
    return (
        <div>
            <h1>Разработать таблицу отображающую курсы валют</h1>
            <p>Используя сервис ЦБ РФ <a href="https://www.cbr-xml-daily.ru/daily_json.js" target="_blank">https://www.cbr-xml-daily.ru/daily_json.js</a> вывести таблицу курсов валют:</p>
            <ul>
                <li>Цифровой код валюты <b>(NumCode)</b></li>
                <li>Символьный код валюты <b>(CharCode)</b></li>
                <li>Наименование валюты <b>(Name)</b></li>
                <li>Курс <b>(Value)</b></li>
            </ul>
        </div>
    );
}

export default RootPage;