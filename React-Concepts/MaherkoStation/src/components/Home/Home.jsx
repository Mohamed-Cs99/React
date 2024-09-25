import React, { useEffect, useState } from 'react'

export default function Home() {


    let [user, setUser] = useState({ name: "Mohammed", age: "25", speciality: "Computer Science" });

    let [friends, setFriends] = useState(['ahmed', 'mohammed', 'shawkey'])

    const [name, setname] = useState("hambozo");

    let [count, setCount] = useState(0);

    let [successColor, setSuccessColor] = useState('bg-primary text-white');
    let [warningColor, setWarningColor] = useState('bg-warning text-black');

    function changeCount() {

        setCount(Math.ceil(Math.random() * 100));
    }

    useEffect(function () {
        console.log("Component did mount");
        return () => {
            console.log("Component will amount");
        }
    }, [])


    useEffect(function(){
        if(count==0)
        {
            return 
        }
        console.log("Component Updated"); 
    },[count]);  




    return (
        <>
            <section id='Home' className=' vh-100 bg-success'>
                <div className="container-fluid bg-info">
                    <div className="row bg-dark">
                        <div className="col-md-4 bg-light">
                            <div className="item text-center p-3">
                                <h1>Name :: {user.name}</h1>
                                <h2 className={count > 50 ? successColor : warningColor}>{count}</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet, esse voluptates non perspiciatis doloribus!</p>
                                <button className='btn btn-info px-4' onClick={() => { changeCount() }}>Count</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

// 