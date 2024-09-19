/* eslint-disable react/prop-types */
import { createContext } from "react";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({children})=>{

    const portfolioItem = [
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'psdconv'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'webdesign'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'react'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'psdconv'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'js'
        }
    ]

    const value = {
        portfolioItem
    }

    return(
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    )
}