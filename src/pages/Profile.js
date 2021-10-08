import { Link,Switch,useHistory,Route,useRouteMatch } from "react-router-dom";
import {useEffect} from 'react';
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";


const Profile = ({login}) => {
   const history=useHistory();

   useEffect(() => {
    if(!login){
        history.push('/');
    }
       
   }, [login,history])
   
   const {path,url}=useRouteMatch();
    return (
        <>
         <h4>Profile Page</h4> 
         <ul>
            <li><Link to={`${url}/viewprofile`}>View Profile</Link></li> 
            <li><Link to={`${url}/editprofile`}>Edit Profile</Link></li> 
             </ul>  

             <Switch>
                 <Route path={`${path}/viewprofile`} component={ViewProfile} />
                 <Route path={`${path}/editprofile`}  component={EditProfile}/>
             </Switch>
        </>
    )
}

export default Profile
