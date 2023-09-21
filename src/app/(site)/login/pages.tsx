'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import Image from "next/image"


export default function Login() {
    const session = useSession()
    const router = useRouter()
    const [data, setData] = useState({
      email: '',
      password: ''
    })


    useEffect(() => {
      if (session?.status === 'authenticated') {
          router.push('/') 
      }
    })

    const loginUser = async (e: any) => {
        e.preventDefault()
        signIn('credentials',
          {...data, redirect: false
        })
        .then((callback) => {
            if (callback?.error) {
                console.log(callback.error)
            }

            if(callback?.ok && !callback?.error) {
                console.log('Logged in successfully!')
            }
        } )
    }

    return (
      <>
        <div className="main">
          <div >
            <Image
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 > Log In </h2>
          </div>
  
          <div>
            <form onSubmit={loginUser}>
              <div>
                <label htmlFor="email">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    required
                  />
                </div>
              </div>
  
              <div>
                <div>
                  <label htmlFor="password">
                    Password
                  </label>
                  <div>
                    <a href="#">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
            <h1>Log in with Github below</h1>
            <button onClick={() => signIn('github')} >Log In</button>
            <h1>Log in with Google below</h1>
            <button onClick={() => signIn('google')} >Log In</button>
  
            <p>
              Need an Account?{' '}
              <a href="/register">
                Register here
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }