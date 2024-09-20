/* eslint-disable react/prop-types */
import { createContext } from "react";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({children})=>{

    const portfolioItem = [
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'psdconv',
            projectLink: 'https://kmalaminstd.github.io/portfolio/'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'webdesign',
            projectLink: 'https://kmalaminstd.github.io/portfolio/'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'react',
            projectLink: 'https://kmalaminstd.github.io/portfolio/'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'psdconv',
            projectLink: 'https://kmalaminstd.github.io/portfolio/'
        },
        {
            projectName: 'Portfolio',
            portfolioImage: '',
            details: '<h1>This is the print time</h1>',
            category: 'js',
            projectLink: 'https://kmalaminstd.github.io/portfolio/'
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