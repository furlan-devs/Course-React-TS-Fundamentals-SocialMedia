import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Matheus Furlan"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, facilis incidunt! Blanditiis doloribus facilis aspernatur quibusdam molestias tempora, ex suscipit, accusamus nemo, ullam alias! Temporibus non itaque vel consequuntur quis!"
          ></Post>
          <Post author="Kauan" content="Publication content do Kauan"></Post>
        </main>
      </div>
    </div>
  );
}
