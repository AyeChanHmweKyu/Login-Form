import Head from 'next/head';
import { useState } from "react";
import {useRouter} from 'next/router'
import { useForm } from "react-hook-form";


export default function login () {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('P@$$W0RD')
    const router = useRouter();

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        
        try{
            console.log(data.username);
            window.localStorage.setItem('name',data.username)
            if(data.password=="P@$$W0RD"){
                router.push({
                    pathname: '/homepage',
                    // query: { name: data.username }
    
                });
            }
            else{
                alert("Wrong Password!");
            }
            
        }catch(e){
            console.log(e.message);
        }
        
    }

    return(
        <>
        <Head>
         <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
        </Head> 
            <div className="card mt-5" style={{width: "20rem", margin: "auto"}}>
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                            <label style={{margin:2}}>Username</label>
                            <input 
                            name="username" 
                            type="text" 
                            {...register('username')}
                            />
                        </div>
                        <div className="form-group">
                            <label style={{margin:2}}>Password</label>
                            <input 
                            name="password" 
                            type="password" 
                            {...register('password')}
                            />
                        </div>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}