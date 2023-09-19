import * as React from "react";
import styles from "../styles/index.module.css";
import HotLink from "../components/HotLinks/hotlinks";
import { Notes } from "../components/Notes/notes";

export default function LandingPage() {
  return (
    <div className={styles.body}>
      <LandingPage.Nav />
      <div className={styles.main}>
        <LandingPage.HookContent />
        <LandingPage.GetStarted />
      </div>
    </div>
  );
}

LandingPage.Nav = () => {
  return (
    <div style={{ padding: "1rem 0px", margin: "1rem 0px" }}>ELXSCRIPTER</div>
  );
};

LandingPage.HookContent = () => (
  <div className={styles.hookcontent}>
    <h1 className={styles.header}>Elixer for Scripters</h1>
    <p>
      <b style={{ fontSize: "1.1rem" }}>
        You've always wanted to learn Elixir?{" "}
      </b>
      This is the resource that helps you study Elixir at your pace and the
      friendliest way you could ever imagine.
    </p>
    <p>
      If you've had another language experience, this will feel like a match
      made from heaven.
    </p>
    <p>
      Perhaps, you never had any programming experience and you are making
      Elixir your first 😱. Come let's make Elixir easy together.
    </p>
  </div>
);

LandingPage.GetStarted = () => (
  <div className={styles.cardBody}>
    <div className={styles.cardBox}></div>
    <section className={styles.card}>
      <div>
        <header
          style={{
            textAlign: "center",
            fontSize: "larger",
            margin: "1rem 0px",
          }}
        >
          GET STARTED
        </header>
        <ul style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <li key={index}>
              <HotLink href="/">
                5 minutes peep into Elixir for JavaScript devs
              </HotLink>
              <Notes>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                soluta.
              </Notes>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);
