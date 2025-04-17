import styles from "./comment.module.css";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import { store } from "./socialstore.jsx";

const Comment = () => {
  const { setcommentshow} = useContext(store);
  const handelinvisible = () => {
    setcommentshow(false);
  };
  
  return (
    <div className={styles["content1"]}>
      <div className={styles["cross"]}>
        <RxCross1 className={styles["crossicon"]}onClick={handelinvisible} />
      </div>
      <div className={styles["content2"]}>
       
      </div>
    </div>
  );
};
export default Comment;