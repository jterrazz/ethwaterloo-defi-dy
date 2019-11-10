import React from 'react'

export default function TheHeader() {
    return (
        <header className="container text-left">
            <img src="/logo.png" width={120} class="my-3"/>
            <div className="rounded text-white overflow-hidden d-flex align-items-center pl-5" style={{background: '#1b2638', height: '100px'}}>
                <h1 className="ml-5" style={{flex:1, 'font-size': '2rem'}}>
                  Invest in companies, not speculate
                </h1>
                <img src="/pluto.png" style={{width: '550px', 'margin-right': '-100px', 'margin-top': '14px'}}/>
            </div>
        </header>
    )
}
