import React from 'react';

const TodoTemplate = ({children}) => {
    return (
        <div>
            <div className='app-title'>일정 관리</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default TodoTemplate;