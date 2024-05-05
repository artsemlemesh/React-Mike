import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData(); //get data from the request
  // const firstName = formData.get('first')
  // const lastName = formData.get('last')
  const updates = Object.fromEntries(formData); //convert form data to a JS object
  // updates.first;
  // updates.last;
  await updateContact(params.contactId, updates); //update the contact with the provided data
  return redirect(`/contacts/${params.contactId}`); //redirect the user to the updated contact page
}

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="first"
          aria-label="first name"
          type="text"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          placeholder="last"
          aria-label="last name"
          type="text"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>X.com</span>
        <input
          type="text"
          name="X.com"
          placeholder="@mike"
          defaultValue={contact?.x}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact?.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button" // prevents button from submitting the form
          onClick={() => {
            navigate(-1); // when a user hits 'Cancel' they'll be sent back one entry in the browser's history
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
