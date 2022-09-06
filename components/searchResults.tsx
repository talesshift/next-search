import styled from "@emotion/styled";
import { colors, container } from "../public/consts";
import { test_error, test_response } from "../public/response";

type Props = {
    request: typeof test_response | typeof test_error;
}

type ResultProps = {
    item: typeof test_response.items[0];
    className?:string
}


const SearchResult_unstyled = (props: ResultProps) => {
  return (
    <div key={props.item.cacheId} className={props.className}> 
        <div className="date">20/02/2022 20:07:10</div>
        <div className="info"><a href="#" className="author">{props.item.displayLink}</a><a className="from">{props.item.kind}</a></div>
        <div className="titulo"><a href={props.item.link}>{props.item.snippet}</a></div>
        <div className="original"><a href={props.item.link}>Post original</a></div>
    </div>
  )
}

const NoSearchResult = styled.div`
    ${container}
    flex:1;
    .sorry{
        display:inline-block;
        padding: 1rem;
        border-radius: 0.1rem;
        //background-color: rgb(242, 244, 248);
        font-size: large;
        font-weight: 300;
        color:rgb(153, 154, 158);
        margin-left:auto;
        margin-right: auto;
    }
    display:flex;
    flex-direction:column;
    justify-content: center;
    justify-items: center;
    text-align: center;
    line-height: 100%;
    margin-bottom: 3rem;
`

const SearchResults = (props: Props) => {
    const sorry = "Sorry, no results found..."

    if(props.request.hasOwnProperty('error')){
        const error = props.request as typeof test_error;
        return (<NoSearchResult> <a className="sorry">{error.error.code} : {error.error.status}</a></NoSearchResult>)
    }
    if (typeof props.request != typeof test_response){
        return (<NoSearchResult> <a className="sorry">{sorry}</a></NoSearchResult>)
    }
    if (props.request.hasOwnProperty('searchInformation')){
        const req = props.request as typeof test_response;
        return (
            <>  
                <div className="title">Aproximadamente {req.searchInformation.totalResults} resultados</div>
                {req.items.map(function(item) {
                    return(
                        <SearchResult key={item.cacheId} item={item}/>
                    )
                })}
            </>
        )
    }
    return(<NoSearchResult> <a className="sorry">{sorry}</a></NoSearchResult>)

}

const SearchResult = styled(SearchResult_unstyled)`
    ${container}
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    div{
        max-width: 41rem;
    }
    .date{
        color: #bfbfbf;
        font-size: 0.75rem;
    }
    .info{
        margin-top: 0.1rem;
    }
    .info a{
        text-decoration: none;
    }
    .info .author{
        font-size: 0.875rem;
        color: ${colors.get("pink")};
        font-weight: 600;
    }
    .info .from{
        font-size: 0.875rem;
        color: ${colors.get("blue")};
        font-weight: 300;
        margin-left: 0.5rem;
    }
    .titulo{
        font-size: 1rem;
        color: ${colors.get("blue")};
        font-weight: 500;
        margin-top: 0.625rem;
    }
    .original{
        font-size: 0.875rem;
        color: ${colors.get("blue")};
        font-weight: 300;
        margin-top: 0.625rem;
    }
`

export default SearchResults