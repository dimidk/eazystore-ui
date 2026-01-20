import Footer from "./footer/Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";
import apiClient from "../api/apiClient";
import { Form } from "react-router-dom";
import {
  useActionData,
  useNavigation,
  useSubmit,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //const location = useLocation();

  const submit = useSubmit();

  const actionData = useActionData();
  useEffect(() => {
    if (actionData?.success) {
      formRef.current?.reset();
    }
  }, [actionData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmSubmit = window.confirm("Are you sure to submit?");

    if (confirmSubmit) {
      const formData = new FormData(formRef.current);
      submit(formData, { method: "POST" });
    }
    console.log(event.target);
  };

  return (
    // <React.Fragment>
    //   <Header />
    <div align="center">
      <PageTitle title="Contact Page" />
      <div>
        <Form ref={formRef} method="POST" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              minLength={5}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your email"
              required
              minLength={5}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile number</label>
            <input
              id="mobile"
              name="mobile"
              placeholder="give your mobile number"
              required
              minLength={10}
            />
          </div>
          <div>
            <label htmlFor="message">Text</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="type your message"
              minLength={10}
              maxLength={500}
            ></textarea>
          </div>
          <div>
            <button id="submitButton" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting" : "Submit"}
            </button>
            {/* <button id="resetButton" type="reset">
              Reset
            </button> */}
          </div>
        </Form>
      </div>
    </div>
  );
}

export async function contactAction({ request, params }) {
  const data = await request.formData();

  const contactData = {
    name: data.get("name"),
    email: data.get("email"),
    phone: data.get("mobile"),
    message: data.get("message"),
  };

  try {
    await apiClient.post("/contact", contactData); // Axios GET Request
    return { success: true };
  } catch (error) {
    throw new Response(error.message || "Failed to get products", {
      status: error.status || 500,
    });
  }
}
