import { useLoaderData } from "react-router-dom"
import { getContact } from "../contacts";



export async function loader({params}){
    const contact = await getContact(params.contactId)
    if (!contact){
        throw new Response('', {
            status: 404,
            statusText: 'Not Found Nothing'
        })
    }
    return {contact}
}


export default function Contact(){

    const {contact} = useLoaderData();


    return (
        <div>
            <div>
                <img
                    key={contact.avatar}
                    src={contact.avatar || null}
                />
            </div>
            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                        {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No name</i>
                    )} {' '}
                    {/* <Favorite contact={contact}/> */}
                </h1>
            </div>
        </div>
    )

}