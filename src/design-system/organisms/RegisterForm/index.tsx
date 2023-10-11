'use client'

import { useState, SyntheticEvent } from "react"
import styles from './styles.module.css'
import { register } from "@/calls/auth/register"

const RegisterForm = () => {
  const [registerError, setRegisterError] = useState<string>("")
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const registerUser = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setRegisterError('')
      const res = await register(data)
      if(res.error) {
        setRegisterError(res.error)
      } else {
        setData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        alert(`New ${res.user.name} user created!`)
      }
    } catch(error) {
      alert('Erroc ocurred!')
    }

  }

  return (
    <div className="main">
      <div>
        <h2> Register for an account</h2>
      </div>

      <div className={styles.content}>
        <form className={styles.loginForm} onSubmit={registerUser}>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.myInput}
              id="name"
              name="name"
              type="natextme"
              autoComplete="name"
              value={data.name}
              onChange={e => setData({ ...data, name: e.target.value })}
              required
            />
          </div>

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
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirm-password">
              Current Password
            </label>
            <input
              className={styles.myInput}
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="confirm-password"
              required
              value={data.confirmPassword}
              onChange={e => setData({ ...data, confirmPassword: e.target.value })}
            />
          </div>
          {
            registerError && <h5 style={{color: "#ff6666"}}>{registerError}</h5>
          }

          <button className={styles.submitBtn} type="submit">Register</button>
        </form>

        <p>Already have an account?{' '}
          <a href="/signIn">
            Login Here!
          </a>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm