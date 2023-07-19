'use client'
import React, { useState } from 'react'
import styles from './styles.module.css'

interface InitialProps {
  id: string,
  label: string,
  onChange?: Function
}

const SearchInput = (props: InitialProps) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>("")

  const handleSubmit = () => {
    if(props.onChange) {
      props.onChange(inputValue)
    }
    if(inputValue) {
      setInputValue("")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <span className={`${styles.borderOverlap} ${inputValue || hasFocus ? styles.activeOverlap : ""}`} ></span>
        <label 
          className={`${styles.myLabel} ${inputValue || hasFocus ? styles.activeMyLabel : ""}`}
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <input
          id={props.id}
          className={`${styles.myInput} ${inputValue ? styles.activeMyInput : ""}`}
          type='text'
          value={inputValue}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button className={styles.button} onClick={handleSubmit}>SEARCH</button>
    </div>
  )
}

export default SearchInput