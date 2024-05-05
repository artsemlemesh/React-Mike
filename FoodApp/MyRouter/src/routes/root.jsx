import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { useEffect } from "react";



export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`); //after inserting this code we get redirected to the edit page
  // return {contact}
}
//since we changed form to Form(to client side routing we should adjust this func)
// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

export async function loader({request}){
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {

  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  //adding search spinner
  const searching = 
  navigation.location &&
  new URLSearchParams(navigation.location.search).has('q')



  //after hitting the back button useEffect rerenters the page and updates the input
  useEffect(() => {
    document.getElementById('q').value = q
  }, [q])


  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
           {/* changing form to Form to use client side routing */}
          <Form id="search-form" role="search">  {/* def method is get */}
             {/* bcz its a get not a post, React Router does not call the action.
             submitting a GET form is the same as clicking a link: only the url changes.
             that is why the code we added for filtering is in the loader, not the action of this route */}
            <input
              id="q"
              className={searching ? 'loding' : ''}
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q" //thats why URL has ?q=
              defaultValue={q} //we added q to return and here, so then our URL and form state will be synchronized after refresh of the page
              onChange={(e) => {
                const isFirstSearch = q == null;
                submit(e.currentTarget.form, {
                  replace: !isFirstSearch, //fixes the history stack/ each key stroke no longer creates new entries, click back only once to return back
                }) //as you type the form is submitted automatically
              }}
            />
            <div 
            id="search-spinner" 
            aria-hidden hidden={!searching} />  {/* added !searching for true/false */}
            <div className="sr-only" aria-live="polite"></div>
          </Form>

          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                    {""}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div 
      id="detail"
      className={
        navigation.state === 'loading' ? 'loading' : ''
      }
      >
        <Outlet />
      </div>
    </>
  );
}
