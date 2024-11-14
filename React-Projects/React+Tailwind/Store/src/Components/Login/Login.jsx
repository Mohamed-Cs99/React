import React from 'react'
import style from './Login.module.css'
export default function Login() {
    return (
        <>
          <section  >
                <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md font-serif mt-10 ">
                    <h2 className="text-2xl text-center mb-4">Login</h2>
                    <form className="grid grid-cols-1 gap-4">
                       
                        <div className=' py-2'>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email:</label>
                            <input type="email" id="email" name="email" required className="input-field w-full py-2" />
                        </div>
                       
                        <div className=' py-2'>
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password:</label>
                            <input type="password" id="password" name="password" required className="input-field w-full py-2" />
                        </div>
                        
                        <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
}
