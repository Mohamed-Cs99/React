import React from 'react'
import style from './Register.module.css'
export default function Register() {
    return (
        <>
            <section className='bg-slate-400 '>
                <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md font-serif mt-10 ">
                    <h2 className="text-2xl text-center mb-4">Sign Up</h2>
                    <form className="grid grid-cols-1 gap-4">
                        <div className=' py-2'>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 ">Name:</label>
                            <input type="text" id="name" name="name" required className="input-field w-full py-2" />
                        </div>
                        <div className=' py-2'>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email:</label>
                            <input type="email" id="email" name="email" required className="input-field w-full py-2" />
                        </div>
                        <div className=' py-2'>
                            <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone:</label>
                            <input type="tel" id="phone" name="phone" required className="input-field w-full py-2" />
                        </div>
                        <div className=' py-2'>
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password:</label>
                            <input type="password" id="password" name="password" required className="input-field w-full py-2" />
                        </div>
                        <div className=' py-2'>
                            <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-700">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="confirm-password" required className="input-field w-full py-2" />
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600">Sign Up</button>
                    </form>
                </div>
            </section>
        </>

    );
}
