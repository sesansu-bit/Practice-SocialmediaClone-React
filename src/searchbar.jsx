import styles from "./searchbar.module.css";
import { useContext } from "react";
import {store} from "./socialstore.jsx";
import { useState } from "react";

const Searchbar =()=>{
const [searchInput, setSearchInput] = useState("");

  const users = [
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.sdFH8Obw484lRvZVSi6o_AHaFx&pid=Api&P=0&h=180",
        name:"me_robin...",
        duration:"7w"
      },{
        image:"https://tse2.mm.bing.net/th?id=OIP.Oqu68urPE4ssXbIgXDRL5AAAAA&pid=Api&P=0&h=180",
        name:"me_ayan...",
        duration:"9w"
      },{
        image:"https://tse3.mm.bing.net/th?id=OIP.68NL4wEUbqenNzY0UYCuWgHaJQ&pid=Api&P=0&h=180",
        name:"_Anuska...",
        duration:"2w"
      },{
        image:"https://www.modelmanagement.com/blog/wp-content/uploads/2020/09/mario-rodriguez.png",
        name:"me_riaz...",
        duration:"2w"
      },{
        image:"https://tse4.mm.bing.net/th?id=OIP.VptYq4W8whj1Mo05DCrCbAHaLG&pid=Api&P=0&h=180",
        name:"me_rahul...",
        duration:"7w"
      },{
        image:"https://tse3.mm.bing.net/th?id=OIP.5lAkNpWy0RrQfuc42dLWuwHaLH&pid=Api&P=0&h=180",
        name:"_lovely...",
        duration:"8w"
      },{
        image:"https://tse2.mm.bing.net/th?id=OIP.mR-AK0mxli56O74w_YrILQHaJ4&pid=Api&P=0&h=180",
        name:"_rashmika...",
        duration:"9w"
      },{
        image:"https://i.pinimg.com/736x/82/67/20/8267204c8ec12d3382a874cf2050825e.jpg",
        name:"me_sam6...",
        duration:"3w"
      }
  ];

    const filteredUsers = users.filter((user) => {
        try {
          const regex = new RegExp(searchInput, 'i'); // 'i' for case-insensitive
          return regex.test(user.name);
        } catch (e) {
          return false;
        }
      });  

const {searchshow} =useContext(store);
return(
    <>
<div className={`${styles.searchbox} ${searchshow && styles.expand }`}>
<br/> 
<p>Search</p>
<input type="text" placeholder="Search"   value={searchInput}   onChange={(e) => setSearchInput(e.target.value)}/>
<div className={styles["line"]}> </div> 

{searchInput.length > 0 ? ( <ul >
          {filteredUsers.map((user, index) => (
            <div className={styles["top"]} key={user.index} >
                   <div className={styles["message"]}>
                     <img src={user.image}/>
                   </div>
                   <div className={styles["dist"]}>
                   <pre>{user.name}</pre>
                   <p>Instagram user sent an attachment. {user.duration}</p>
                   </div>  
                   </div>
          ))}</ul> )

:(
<div className={styles["nosearch"]}>No recent searches.</div>
)
}



</div>
</>
);
}
export default Searchbar;
