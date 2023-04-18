import React from 'react';
import { Nav } from 'react-bootstrap';

export const Contact = () => {
    return (
       <>
            <h1>За контакти</h1>
            <br />
            <p>Здравейте, ако имате някакви въпроси или обратна връзка относно проекта, не се колебайте да се свържете с мен, като използвате информацията по-долу:</p>
            <br />

            <p>
                <strong>Email:</strong>  ninagbs@abv.bg
            </p>

            <br />


            <h2>Информация за проекта</h2>
            <br />
            <p>
                Проектът 'У нас и по света с деца' е подготвен за защита нa изпит по ReactJS към
                <Nav.Link href="https://softuni.bg/" target="_blank" style={{ color: 'green' }} active>
                    СофтУни

                </Nav.Link>

            </p>
            <p>
                Така, че бъдете търпеливи и не толкова придирчиви към разни бъгове, бавно зареждащи се страници и други подобни  
                <i style={{ fontSize: '40px', color: 'orange' }} className="fa-regular fa-face-laugh-wink"></i>

            </p>

            </>
      
    );
};
