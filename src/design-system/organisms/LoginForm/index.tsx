'use client'
import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import styles from './styles.module.css'

type LoginFormProps = {
  callbackUrl?: string;
  error?: string;
};

export default function LoginForm({ callbackUrl, error }: LoginFormProps) {
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
    await signIn('credentials' ,{
      ...data, 
      redirect: false
    })
    .then(() => {
      alert('User has been logged in!')
    })

  }

  return (
    <>
      <div className="main">
        <div >
          <h2> Sign in </h2>
        </div>

        <div className={styles.content}>
          <form className={styles.loginForm} onSubmit={loginUser}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">
                Email address
              </label>
              <input
                className={styles.myInput}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={e => setData({ ...data, email: e.target.value })}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">
                Password
              </label>
              <input
                className={styles.myInput}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={e => setData({ ...data, password: e.target.value })}
              />
              <div>
                <a href="#">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              className={styles.submitBtn}
              type="submit"
            >
              Log in
            </button>
          </form>

          <div  className={styles.secondaryLogin}>
            <h4>Log in with Github below</h4>
            <button className={styles.secondaryBtn} onClick={() => signIn('github')} >Log In</button>
          </div>

          <div className={styles.secondaryLogin}>
            <h4>Log in with Google below</h4>
            <button className={styles.secondaryBtn} onClick={() => signIn('google')} >Log In</button>
          </div>

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