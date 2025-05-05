import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import React from 'react'

const Home = () => {
    const loggedIn={firstName:'Arkadeep',lastName:'Bag',email:'arkadeepbag3390@gmail.com'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName||'Guest'}
                subtext='Access and manage your account and transactions efficiently'></HeaderBox></header>

           RECENT TRANSACTIONS  
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance:125.50},{currentBalance:250.30}]}
        ></RightSidebar>
    </section>
  )
}

export default Home