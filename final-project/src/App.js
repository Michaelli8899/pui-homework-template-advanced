import logo from "./logo.svg";
import "./App.css";
import "./css/navbar.css";
import "./css/text-animation.css";
import "./css/read-more.css";
import "./css/timeline.css";
import "./css/strokes.css";
import "./css/history-detail.css";
import { default as History } from "./views/home";
import { default as Stroke } from "./views/strokes";
import { default as HistoryDetails } from "./views/historyDetails";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./views/partials/NavBar.js";
import StrokesPage from "./views/strokes/partials/StrokesPage";

const timeline = [
  {
    src: `/text-img/0.png`,
    alt: "orcale bone script for fish",
    name: "Oracle Bone Script",
    chinese: ["甲", "骨", "文"],
    pinyin: ["jia", "gu", "wen"],
    timeframe: "14th - 11th Century BCE",
  },
  {
    src: `/text-img/1.png`,
    alt: "bronze inscription for fish",
    name: "Bronze Inscription",
    chinese: ["金", "文", "_"],
    pinyin: ["jin", "wen", "_"],
    timeframe: "11th Century - 771 BCE",
  },
  {
    src: `/text-img/2.png`,
    alt: "seal script for fish",
    name: "Seal Script",
    chinese: ["篆", "书", "_"],
    pinyin: ["zhuan", "shu", "_"],
    timeframe: "771 BCE - 221 BCE",
  },
  {
    src: `/text-img/3.png`,
    alt: "clerical script for fish",
    name: "Clerical Script",
    chinese: ["隶", "书", "_"],
    pinyin: ["li", "shu", "_"],
    timeframe: "206 BCE - 220 CE",
  },
  {
    src: `/text-img/4.png`,
    alt: "cursive script for fish",
    name: "Cursive Script",
    chinese: ["草", "书", "_"],
    pinyin: ["cao", "shu", "_"],
    timeframe: "206 BCE - 220 CE",
  },
  {
    src: `/text-img/5.png`,
    alt: "running script for fish",
    name: "Running Script",
    chinese: ["行", "书", "_"],
    pinyin: ["xing", "shu", "_"],
    timeframe: "220 CE - 618 CE",
  },
  {
    src: `/text-img/6.png`,
    alt: "regular script for fish",
    name: "Regular Script",
    chinese: ["楷", "书", "_"],
    pinyin: ["kai", "shu", "_"],
    timeframe: "220 CE - 618 CE",
  },
];

function App() {
  return (
    <>
      <Outlet />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/pui-homework-template-advanced/final-project"
          // element={<History timeline={timeline} />}
        />
        <Route path="/" 
        // element={<History timeline={timeline} />} 
        />
        <Route path="/history" element={<History timeline={timeline} />} />
        <Route
          path="/history/timeline"
          element={<HistoryDetails timeline={timeline} />}
        />

        <Route path="/strokes" element={<Stroke />} />

        <Route path="/strokes/dian" element={<StrokesPage type="dian" />} />
        <Route path="/strokes/gou" element={<StrokesPage type="gou" />} />
        <Route path="/strokes/heng" element={<StrokesPage type="heng" />} />
        <Route path="/strokes/na" element={<StrokesPage type="na" />} />
        <Route path="/strokes/pie" element={<StrokesPage type="pie" />} />
        <Route path="/strokes/shu" element={<StrokesPage type="shu" />} />
        <Route path="/strokes/ti" element={<StrokesPage type="ti" />} />
        <Route path="/strokes/wan" element={<StrokesPage type="wan" />} />
      </Routes>
      
    </>
  );
}

export default App;
