import { useParams,useLocation } from "react-router-dom";

const Post = () => {
//get single parameter from url
    const {id}=useParams();
//get appended parameters ?first=Julius&second=Gitonga
    const query=new URLSearchParams(useLocation().search);
  
    return (
        <>
        <h2>The id is {id}</h2>
        <h2>{query.get('first')} </h2>
        </>
    )
}

export default Post
