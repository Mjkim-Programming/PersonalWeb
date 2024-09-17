import React from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

import './mainPage.css';

function MainPage() {
    function fireSwal(text,meaning,type){
        Swal.fire({
            title: text,
            text: meaning,
            icon: type
        });
    }
    return(
        <div className="mainDiv">
            <Button variant='primary' onClick={() => fireSwal("테스트용!","테스트용이야!","info")}>Button With Bootstrap</Button>
        </div>
    )
}

export default MainPage;