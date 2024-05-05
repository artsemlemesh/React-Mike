import { Form, useLoaderData, NavLink, Outlet } from "react-router-dom";

import { getContacts } from "../contacts";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export default function Root() {
  const { contacts, q } = useLoaderData();

  return (
    <>
      <div id="sidebar">
        <h1>React Router contacts</h1>

        {/* sidemenu search field and button */}
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={false} />
          </Form>
          <Form method="post">
            <button type="submit"> New</button>
          </Form>
        </div>
        {/* end of search field */}
        {/* dynamicly render new users */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No Contacts</i>
            </p>
          )}
        </nav>
      </div>
          {/* end of sidebar */}

          {/* right side, displays each user individually */}
      <div id='detail'>
          <Outlet/>  {/* placeholder for rendering child routes within the parent's route component */}
      </div>
    </>
  );
}
