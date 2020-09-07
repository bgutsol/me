import Head from "next/head";
import styles from "../styles/Home.module.css";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  // document.querySelector("#theme-btn").addEventListener("click", () => {
  //   var themes = [
  //     "default",
  //     "dark",
  //     "red",
  //     "blue",
  //     "yellow",
  //     "green",
  //     "violet",
  //   ];
  //   var dataTheme = document.documentElement.dataset.theme;
  //   themes = themes.filter((theme) => theme !== dataTheme);
  //   document.documentElement.dataset.theme =
  //     themes[Math.floor(Math.random() * themes.length)];
  // });

  return (
    <div className={styles.container}>
      <Head>
        <title>Bohdan Hutsol</title>
        <meta
          name="description"
          content="Hey! I’m Bohdan Hutsol, a front-end engineer."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏄🏼‍♂️</text></svg>"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={styles.main}>
        <button id="theme-btn" className={styles.themeBtn}>
          Change theme
        </button>

        <div className={styles.description}>
          <p>Hey! I’m Bohdan.</p>
          <p>I’m a front-end engineer with a passion for design.</p>
          <p>
            I recognize and admire clarity, simplicity and utility in the
            objects around me. This is what I strive to re-create in my work.
          </p>
        </div>

        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a href="mailto:bogdan.gutsol@gmail.com" target="_blank">
              email
            </a>
          </li>
          <li className={styles.linkItem}>
            <a
              href="https://www.linkedin.com/in/bohdan-hutsol/"
              target="_blank"
            >
              linkedin
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="https://github.com/bgutsol" target="_blank">
              github
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="https://twitter.com/bgutsol" target="_blank">
              twitter
            </a>
          </li>
          <li className={styles.linkItem}>
            <a href="/CV_BohdanHutsol.pdf" target="_blank">
              CV
            </a>
          </li>
        </ul>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html:
            'document.querySelector("#theme-btn").addEventListener("click", () => { var themes = [ "default", "dark", "red", "blue", "yellow", "green", "violet", ]; var dataTheme = document.documentElement.dataset.theme; themes = themes.filter((theme) => theme !== dataTheme); document.documentElement.dataset.theme = themes[Math.floor(Math.random() * themes.length)]; });',
        }}
      ></script>
    </div>
  );
}
