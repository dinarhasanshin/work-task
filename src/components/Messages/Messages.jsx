import React from 'react'
import s from './Messages.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../redux/MessagesReducer";
import {InputMessageForm, MessageItem} from "./MessageItem/MessageItem";

export const Messages = () => {

    const MessageReducer = useSelector((state) => state.MessagesReducer.Messages)
    const SidebarReducer = useSelector((state) => state.SidebarReducer)
    const dispatch = useDispatch()
    const MessageItemMap = MessageReducer.map((item, index) => item.nameOfMenu === SidebarReducer.selectedSidebarItem
        && <MessageItem index={ index } item={ item } />)

    const onSubmitFormInput = (values) => {
        if (values.message.length !== 0)
        dispatch(addMessage(values.message, SidebarReducer.selectedSidebarItem))
    }


    return (
        <section className={s.container}>
            <div className={s.message_header}>
                <h2>Questions: { SidebarReducer.selectedSidebarItem }</h2>
            </div>
            <div className={s.message_content}>
                {
                    MessageItemMap
                }
            </div>
            <div className={s.message_input}>
                <InputMessageForm onSubmitFormInput = { onSubmitFormInput }/>
            </div>
        </section>
    )
}


