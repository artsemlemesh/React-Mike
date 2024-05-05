import { Form, useLoaderData } from 'react-router-dom'
import { getContact } from '../contacts';


export async function loader({params}){
    const contact = await getContact(params.contactId);
    return {contact}
}


export default function Contact() {
    const {contact} = useLoaderData();


  return (
    <div id="contact">
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
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
        
        {/* 1)when the user hit submit: Form prevents the default browser behavior of sending a new POST request to the server, but instead emulates the browser by creating a POST request with client side routing */}
          <Form
            method="post"
            action="destroy" //2)matches the new route at 'contacts/:contactId/destroy' and sends it the request
            //3) after the action redirects, React Router calls all of the loaders for the data on the page to get the latest values(revalidation) . useLoaderData returns new values and causes the components to updata
            //add a form, add an action, React Router does the rest
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}