import s from "./MessageItem.module.sass"
import React from "react"
import {useFormik} from "formik"

export const MessageItem = ({index, item}) => {

    return (
        <div key={index} className={s.message_item}>
            <p className={s.message_icon}></p>
            <p className={s.message_item_content}>{item.message}</p>
        </div>
    )
}
export const InputMessageForm = ({onSubmitFormInput}) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: (values, actions) => {
            onSubmitFormInput(values)
            actions.resetForm({
                values: {
                    message: ''
                }
            })
        },
    })
    return (
        <form className={s.message_item_add_form} onSubmit={formik.handleSubmit}>
            <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />

            <button type="submit">Send</button>
        </form>
    )
}