import useFetchAPI from "../hooks/useFetchAPI"

export default function CharDBZ(){
    const{loading, error, ret} = useFetchAPI(
        "https://dragonball-api.com/api/characters/", "2"
    )
    if(loading){
        return(<div>carregando</div>)
    }
    if(error){
        return(<div>Ocorreu um erro</div>)
    }
    return(
        <div>
            <img src = {ret.image} className="base" width="170" height="300" alt=""/>
        </div>
    )
}