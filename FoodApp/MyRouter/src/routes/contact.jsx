import { Form, useLoaderData, useFetcher, } from 'react-router-dom'
import { getContact, updateContact } from '../contacts';

//after we defined action, we need to configure the route's new action
export async function action({request, params}){
    let formData = await request.formData()
    return updateContact(params.contactId, {
        favorite: formData.get('favorite') === 'true'
    })
}

export async function loader({params}){
    const contact = await getContact(params.contactId);
    if (!contact) {
        throw new Response('', {
            status: 404,
            statusText: 'Not Found',
        })
    }
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
  const fetcher = useFetcher();
  let favorite = contact.favorite;

    // to immediately update the star's state, even though the network hasnt finished.
    //if the update eventually fails, the UI will revert to the real data.
  if(fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true';
  }


  return (
    <fetcher.Form method="post">  {/* bcz method post, we define function action above (for favirite key (star)) */}
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
    </fetcher.Form>
  );
}