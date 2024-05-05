import {useLoaderData, Form, redirect} from 'react-router-dom';
import { updateContact } from "../contacts";


export async function action({request, params}){
    const formData = await request.formData() //gets data from the request
    const updates = Object.fromEntries(formData)// converts form data to a JS object
    await updateContact(params.contactId, updates) //updates contact with the provided data
    return redirect(`/contacts/${params.contactId}`) //redirects the user to the updated contact page
}   



export default function EditContact(){
    const { contact } = useLoaderData()//loads the contact


    return (
        <Form method='post'>
            <p>
                <span>Name</span>
                <input
                    placeholder='first'
                    aria-label='first name'
                    type='text'
                    name='first'
                    defaultValue={contact?.first}
                />
                <input
                    placeholder='last'
                    aria-label='last name'
                    type='text'
                    name='last'
                    defaultValue={contact?.last}
                />
            </p>
            <label>
                <span>X.com</span>
                <input
                    type='text'
                    name='x.com'
                    placeholder='@mike'
                    defaultValue={contact?.x}
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    type='text'
                    arial-label='Avatar URL'
                    name='avatar'
                    placeholder='https://example.com/avatar.jpg'
                    defaultValue={contact?.avatar}
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea name='notes' defaultValue={contact?.notes}/>
            </label>
            <p>
                <button type='submit'>Save</button>
                <button
                // type='button'
                // onClick={() => {

                // }}
                >Cancel</button>
            </p>
        </Form>
    )

}