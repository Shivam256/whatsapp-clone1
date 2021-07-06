import React, {useState,useEffect} from "react";
import "./sidebar.styles.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from '../sidebar-chat/sidebar-chat.component';
import {db} from '../../firebase/firebase.utils';
import {useStateValue} from '../../StateProvider';

const Sidebar = () => {
  const [rooms,setRooms] = useState([]);
  const [{user},dispatch] = useStateValue()
  useEffect(()=>{
    
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
      // console.log(snapshot);
      setRooms(snapshot.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })

    return () => {
      unsubscribe();
    }
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user ? user.photoURL:''} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {
          rooms.map(room => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))
        }
      </div>
    </div>
  )
};

export default Sidebar;
