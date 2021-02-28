import React, {useState} from 'react'
import s from './Sidebar.module.sass'
import {useDispatch, useSelector} from "react-redux"
import {addSidebarItem, setSelectedSidebarItem} from "../../redux/SidebarReducer"
import userPhoto from '../../assets/user-photo.jpg'
import {Icon, InlineIcon} from '@iconify/react'
import plusCircle from '@iconify-icons/uil/plus-circle'
import inboxIcon from '@iconify-icons/uil/inbox';
import {InputSidebarForm, SidebarItem} from "./SidebarItem/SidebarItem";


export const Sidebar = () => {


    let [editMode, setEditMode] = useState(false)
    const SidebarReducer = useSelector((state) => state.SidebarReducer)
    const MessageReducer = useSelector((state) => state.MessagesReducer.Messages)
    const dispatch = useDispatch()

    const setSelectedItem = (selectedItem) => {
        dispatch(setSelectedSidebarItem(selectedItem))
    }
    const addItem = (values) => {
        if(values.title.length !== 0) {
            dispatch(addSidebarItem(values.title))
        }
        setEditMode(false)
    }


    const MenuItemMap = SidebarReducer.SidebarItems.map(
        (item, index) => <SidebarItem key={ index } item = { item } setSelectedItem = { setSelectedItem } MessageReducer = { MessageReducer }/>)

    return (
        <section className={s.container}>
            <div className={s.sidebar_header}>
                <div className={s.sidebar_user_item}>
                    <img src={userPhoto} alt={"UserPhoto"}/>
                    <p>David Hill</p>
                </div>
                <div className={s.sidebar_header_add_items}>
                    <Icon icon={plusCircle} color={"darkgrey"} width={"45"} onClick={() => { setEditMode(true) }}/>
                </div>
            </div>

            <hr/>
            <nav>
                <ul>
                    {
                        MenuItemMap
                    }
                    {
                        editMode &&
                        <div className={s.sidebar_item_add}>
                            <InlineIcon className={s.sidebar_item_img} icon={inboxIcon} width={"20"} color={"darkgrey"} />
                        <InputSidebarForm addItem = { addItem }/></div>
                    }
                </ul>
            </nav>
        </section>
    )
}


