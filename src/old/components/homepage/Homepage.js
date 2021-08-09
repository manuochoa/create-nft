import React from 'react'
import { Header } from './header/Header'
import { MultiCollect } from './multicollect/MultiCollect'
import NewNavbar from './NewNavbar'
import NewMultiCollect from './multicollect/NewMultiCollect'

export const Homepage = () => {
    return (
        <div>
          <NewNavbar/>
          <NewMultiCollect /> 
        </div>
    )
}
