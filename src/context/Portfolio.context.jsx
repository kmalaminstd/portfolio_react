/* eslint-disable react/prop-types */
import { onSnapshot } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { itemColRef } from "../config/firebase.config";

export const PortfolioContext = createContext()

export const PortfolioProvider = ({children})=>{

    const [items, setItems] = useState(null)

    useEffect(()=>{
        return onSnapshot(itemColRef, snapshot =>{
            const item = snapshot.docs.map(elm => {
                return{
                    ...elm.data(),
                    id: elm.id
                }
            })
            setItems(item)
        })
    },[])

    console.log(items);
    

    // const portfolioItem = [
    //     {
    //         projectName: 'Portfolio',
    //         portfolioImage: '',
    //         details: '<h1>This is the print time</h1>',
    //         category: 'psdconv',
    //         projectLink: 'https://kmalaminstd.github.io/portfolio/'
    //     },
    //     {
    //         projectName: 'Portfolio',
    //         portfolioImage: '',
    //         details: '<h1>This is the print time</h1>',
    //         category: 'webdesign',
    //         projectLink: 'https://kmalaminstd.github.io/portfolio/'
    //     },
    //     {
    //         projectName: 'Portfolio',
    //         portfolioImage: '',
    //         details: '<h1>This is the print time</h1>',
    //         category: 'react',
    //         projectLink: 'https://kmalaminstd.github.io/portfolio/'
    //     },
    //     {
    //         projectName: 'Portfolio',
    //         portfolioImage: '',
    //         details: '<h1>This is the print time</h1>',
    //         category: 'psdconv',
    //         projectLink: 'https://kmalaminstd.github.io/portfolio/'
    //     },
    //     {
    //         projectName: 'Portfolio',
    //         portfolioImage: '',
    //         details: '<h1>This is the print time</h1>',
    //         category: 'js',
    //         projectLink: 'https://kmalaminstd.github.io/portfolio/'
    //     }
    // ]

    const value = {
        items
    }

    return(
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    )
}