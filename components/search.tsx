import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import Button from './button';
import Logo from './logo';
import { container } from '../public/consts';
import { useRouter } from 'next/router';

type Props = {
    className?:string;
    size?:"big"|"medium"|"small";
}

type SearchProps = {
    size?:"big"|"medium"|"small";
}

type sizeType = {
    positioning:string,
    searchbar:string,
    searchbutton:string,
}

type location_ex ={
    pathname: string,
    search: string,
    state: {
        query: string,
    }
}

export const sizes = new Map<string, sizeType>(
    [
        ['medium',{positioning:`
        display:flex;
        align-items: center;
        justify-content: center;
        flex-wrap:wrap;
        min-height:62px;
        padding: 2rem 0;
        ${container}
        `,searchbar:`
        height: 0.925rem;
        flex:1;
        margin: 0.5rem 1.1rem 0.5rem 1.1rem;`,
        searchbutton:`
        margin: 1rem auto;
        `}],
        ['big',{positioning:` `,searchbar:`
            height:30px;
            width: 75vw;
            margin: 2.1rem auto;
        `,searchbutton:``}]
    ]
);

const Search_unstyled = (props: Props) => {
    const [input, setInput] = useState("")
    const router = useRouter();

    useEffect(()=>{
        if (!router.isReady){return}
        setInput(router.query.query as string|| "")
        console.log(input)
    }, [router.isReady]);

    const doSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //stop null search
        if(input == ""){router.push("/")}
        //go to location
        router.push({
            pathname: '/results/[query]',
            query: { query: input},
          })
    };

    return (
        <form className={props.className}>
            <Logo onClick={() => {router.push("/")}} primary='purple' secondary='green' size={props.size =='big' ? 60:40}>Bolso<span>data</span></Logo>
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                <input value={input} onChange={e => setInput(e.target.value)}/>
            </div>
            <div className='search-buttons'>
                <Button size={props.size} type='submit' onClick={doSearch}>Buscar</Button>
            </div>
        </form>
    )
}



export const Search = styled(Search_unstyled)<SearchProps>`
    ${(props => (sizes.get(props.size || "big")!.positioning))}
    .search-bar {
        ${(props => (sizes.get(props.size || "big")!.searchbar))}
        display:flex;
        align-items:center;
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        max-width: 800px;
        overflow:hidden;
        background-color:rgb(242, 244, 248);
        min-width: 240px;
    }
    .search-bar:hover {
        box-shadow: 0 1px 1px rgba(32,33,36,.18);
    }
    .search-bar input {
        flex:1;
        padding: 0.625rem 1.25rem;
        font-size: 1.25rem;
        line-height: 1.625;
        border:none;
        font-weight: 500;
        background-color:rgba(242, 244, 248, 0);
        color: #373F41;
        min-width: 1rem;
    }
    .search-buttons{
        ${(props => (sizes.get(props.size || "big")!.searchbutton))}
    }   
    svg{
        font-size: 1.75rem;
    }
    
`
