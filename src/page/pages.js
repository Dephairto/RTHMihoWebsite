import NavBar from "../components/NavBar";
import DocPage from "./DocPage/DocPage";

import FloatButton from "../components/FloatButton";

import Comment from "../components/Comment";

function Pages(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <FloatButton />
    </>
  );
}

function Home() {
  return (
    <Pages>
    </Pages>
  );
}

function Discussion() {
  return (
    <Comment slug="/discussion" />
  );
}

function About() {
  const info = {
    preFolder :"about",
    list : [
      ["关于", "about"],
    ["鸣谢", "thanks"],
    ]
  }

  return (
    <DocPage info={info} />
  );
}

function Help() {
  const info = {
    preFolder: "helps",
    list: [
      ["Phigros 帮助文档", "phigros"],
      ["娱乐", "play"],
      ["常见问题", "Q&A"],
    ]
  }

  return (
    <DocPage info={info} comment />
  );
}

export { Home, Discussion, About, Help };