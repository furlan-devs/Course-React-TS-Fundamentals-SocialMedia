import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export const App = () => {
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/alysongadelha.png",
        name: "Alysson G.",
        role: "Front End Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galera 👋" },
        {
          type: "paragraph",
          content:
            "Hoje postei mais um projeto pra vocês no meu GitHub. Vão lá conferir !",
        },
        {
          type: "link",
          content: "https://github.com/alysongadelha/retomadadopoder",
        },
      ],
      publishedAt: new Date("2023-04-02 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/DouglasBavoso.png",
        name: "Douglas B.",
        role: "Back End Developer",
      },
      content: [
        { type: "paragraph", content: "Aee timee " },
        {
          type: "paragraph",
          content: "Deem um confere no meu mais novo projeto 🚀",
        },
        { type: "link", content: "https://github.com/DouglasBavoso/dinoGame" },
      ],
      publishedAt: new Date("2023-01-03 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
};
