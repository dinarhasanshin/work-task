import s from "./SidebarItem.module.sass"
import {Icon, InlineIcon} from "@iconify/react"
import inboxIcon from "@iconify-icons/uil/inbox"
import React from "react"
import {useFormik} from "formik"
import plusCircle from "@iconify-icons/uil/plus-circle"

export const SidebarItem = ({item, setSelectedItem, MessageReducer}) => {

    const messageCount = MessageReducer.filter(i => i.nameOfMenu === item.name)

    return (
        <li className={s.sidebarItem} onClick={() => {
            setSelectedItem(item.name)
        }}>
            <InlineIcon className={s.sidebar_item_img} icon={inboxIcon} color={"darkgrey"}/>
            {item.name}
            {messageCount.length === 0 ? '' : <span>({messageCount.length})</span>}
        </li>
    )
}
export const InputSidebarForm = ({addItem}) => {

    const formik = useFormik({
        initialValues: {
            title: '',
        },
        onSubmit: (values, actions) => {
            addItem(values)
            actions.resetForm({
                values: {
                    title: ''
                }
            })
        },
    })
    return (
        <form className={s.add_item_sidebar_form} onSubmit={formik.handleSubmit}>
            <input
                id="title"
                name="title"
                type="title"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label htmlFor="addItem"><Icon icon={plusCircle} color={"darkgrey"} width={"22"}/></label>
            <button type="submit" id={"addItem"} className={s.sidebar_form_button}>Add</button>
        </form>
    )
}