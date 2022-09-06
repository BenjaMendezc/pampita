import React, { ReactElement } from 'react';
import './Title.scss';

type TitleProps = {
    empanada: string;
    bgcolor: string;
}

function Title({ empanada, bgcolor }: TitleProps): ReactElement {
    return (
        <div className="Title" style={{ backgroundColor: bgcolor }}>
            <div className="Card-body__text">{empanada}</div>
        </div>
    );
}


export default Title

