import styled from "@emotion/styled"
import Head from 'next/head'
import { useEffect, useState } from "react"
import { Search } from "../../components/search"
import SearchResults from "../../components/searchResults"
import useGoogleSearch from "../../components/useGoogleSearch"
import { container } from "../../public/consts"
import { test_error, test_response } from "../../public/response"
import { useRouter } from 'next/router';
import { Pagination } from "@mui/material"
import { createSecretKey } from "crypto"

const key = process.env.NEXT_PUBLIC_SEARCH_API_KEY

const GOOGLE_CONTEXT_KEY = "a0d1d7ad50cc04e1e"

type Props = {
    className?: string
}

type DataType = ReturnType<typeof useGoogleSearch>

type PaginatorProps = {
    className: string;
    page:number;
    pages:number;
}



const Results_unstyled = (props: Props) => {
    const router = useRouter();
    //const [query, setQuery] = useState<string|string[]|undefined>()
    const [data, setData] = useState<typeof test_response>()
    //const [page, setPage] = useState<string>()
    const results_p_page = 10
    const this_page = parseInt(router.query.page as string)||1;
    const this_start = ((this_page - 1) * results_p_page)+1;

    useEffect(()=> {
        if (!router.isReady){return}
        if( router.query.query === null){
            router.push("/")
        }
        console.log(router.query.page + "alou")
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${GOOGLE_CONTEXT_KEY}&q=${router.query.query}&num=${results_p_page}&start=${this_start||1}`
            )
            .then((response) => response.json())
            .then(result => {
                setData(result)
                console.log(result)
                console.log( `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${GOOGLE_CONTEXT_KEY}&q=${router.query.query}&num=${results_p_page}&start=${this_start||1}`)
            })
        }
        fetchData()
        
    }, [router.asPath]);
    //const data = useGoogleSearch(query as string || "google")
    
    //console.log(data)

    //const data = response;

    return (
        <section  className={props.className}>
            <Head>
                <title>Search_Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/index.png" />
            </Head>
            <Search key={router.isReady? "hydrated":"dehydrated"} size="medium"/>
            <SearchResults request={data || test_error} />
        </section>
    );
};

const Results = styled(Results_unstyled)`
    height:100%;
    min-height:100vh;
    display: flex;
    flex-direction: column;
    .title{
        ${container}
        font-size:1.25rem;
        border-bottom: 1px solid #C4C4C4;
        padding-bottom: 0.2rem;
    }
    .paginations{
        ${container}
        display:flex;
        align-items:center;
        justify-content: center;
    }
`

export default Results;

//process.env.REACT_APP_CUSTOM_SEARCH_API_KEY
