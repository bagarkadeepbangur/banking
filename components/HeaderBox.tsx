import { Span } from 'next/dist/trace'
import { space } from 'postcss/lib/list'
import React from 'react'
import TotalBalanceBox from './TotalBalanceBox'

const HeaderBox = ({type,title,user,subtext}:HeaderBoxProps) => {
  return (
    <div className='header-box'>
        <h1 className='header-box-title'>
        {title}
        {type ==='greeting' && (<span className='text-bankGradient'>&nbsp;{user}</span>)}
        </h1>
        <p className='header-box-subtext'>{subtext}</p>
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}></TotalBalanceBox>
    </div>
  )
}

export default HeaderBox