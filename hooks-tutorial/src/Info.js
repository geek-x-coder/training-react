import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
    }, [name])

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input onChange={(e) => { setName(e.target.value)}} type="text" value={name}/>
                <input onChange={(e) => {setNickname(e.target.value)}} type="text" value={nickName}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickName}
                </div>
            </div>
        </div>
    );
};


export default Info;