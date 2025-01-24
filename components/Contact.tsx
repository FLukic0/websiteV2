"use client";

import { FC, useContext, useState } from "react";
import SectionHeading from "./accessories/SectionHeading";
import Container from "./Container";
import FadeUp from "@/motions/FadeUp";
import Link from "next/link";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import Button from "./accessories/Button";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContext } from "@/providers/ToastProvider";
import { isEmpty, trim } from "lodash";
import { externalLinks } from "@/data/externalLinks";
import useSectionInView from "@/hooks/useSectionInView";
import TripleDotLoader from "./accessories/TripleDotLoader";

const Contact: FC = () => {
  const { ref } = useSectionInView("Contact");

  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const { setToast } = useContext(ToastContext);

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    setSendingEmail(true);

    if (isEmpty(trim(e.target.message.value))) {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Please put some message",
      });
      setSendingEmail(false);
      return;
    }

    if (isEmpty(trim(e.target.subject.value))) {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Please put some Subject",
      });
      setSendingEmail(false);
      return;
    }

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/sendEmail";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      setToast({
        severity: "success",
        title: "Sent!",
        description: "Successfully Sent Email",
      });
      setSendingEmail(false);
      setEmailInput("");
      setSubjectInput("");
      setMessageInput("");
    } else {
      setToast({
        severity: "error",
        title: "Oops!",
        description: "Something went wrong",
      });
    }
  };

  return (
    <section className="contact-container" id="contact" ref={ref}>
      <Container>
        <FadeUp>
          <SectionHeading>Contact Me</SectionHeading>
        </FadeUp>
        <div className="contact">
          <div className="info">
            <FadeUp>
              <h3>Please reach out!</h3>
            </FadeUp>
            <FadeUp>
              <p>
                I'm always welcome new opportunities. Feel free to send me an email and I'll get back to you!
              </p>
              <p>
                You can contact me directly at{" "}
                <Link href="mailto:filiplukic000@gmail.com">
                  filiplukic000@gmail.com
                </Link>{" "}
                Alternatively, you can use the form!
              </p>
            </FadeUp>
            <div className="socials">
              <FadeUp>
                <h3>Socials</h3>
              </FadeUp>

              <div className="links">
                <FadeUp delay={0.175}>
                  <Button to={externalLinks.linkedIn} newTab noText>
                    <FaLinkedinIn />
                  </Button>
                </FadeUp>
                <FadeUp delay={0.195}>
                  <Button to={externalLinks.github} newTab noText>
                    <FaGithubSquare />
                  </Button>
                </FadeUp>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            {/* <FadeUp>
              <div className="top-layer">
                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    placeholder="anthony@google.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
              </div>
              <div className="subject-layer">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  placeholder="Hello!"
                  value={subjectInput}
                  onChange={(e) => setSubjectInput(e.target.value)}
                />
              </div>
              <div className="msg-layer">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="I thought your website was awesome!"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
              </div>
              {!sendingEmail ? (
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={sendingEmail}
                >
                  Send <AiOutlineSend />
                </button>
              ) : (
                <TripleDotLoader />
              )}
            </FadeUp> */}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
