import React from "react";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post author="Matheus Furlan" content="Publication content"></Post>
      <Post author="Kauan" content="Publication content do Kauan"></Post>
      <Post author="Alana" content="Publication content da Alana"></Post>
      <Post
        author="Diego Martins"
        content="Publication content do Diego"
      ></Post>
    </div>
  );
}
