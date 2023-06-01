import Head from "next/head";

import Heatmap from "@/components/Heatmap";

import styles from "@/styles/Home.module.css";
import Plot from "@/components/Plot";
import LineChart from "@/components/Line";
import PieChart from "@/components/Pie";
import RadarChart from "@/components/Rada";
import PolarChart from "@/components/Polar";
import ScatterChart from "@/components/Scatter";
import HorizontalBarChart from "@/components/Horinzontal";
import DoughnutChart from "@/components/Doughnut";
import CrazyChart from "@/components/Crazy";
import BubbleChart from "@/components/Bubble";
import BarChart from "@/components/Bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <ul>
          <h3>Team members</h3>
          <li>Trần Nguyễn Thương Trường - ITITIU19228</li>
          <li>Trần Thanh Sơn - ITITIU19201</li>
          <li>Nguyễn Trung Trực- ITITIU19225</li>
          <li>Nguyễn Thanh Thanh Tùng - ITITIU19236</li>
          <li>Phạm Duy Thịnh - ITITIU19215</li>
          <li>Lê Quốc Phong - ITITIU19181</li>
          <li>Trần Cẩm Vinh - ITITIU19244</li>
        </ul>
        <ul>
          <h3>Information</h3>
          <li>Subject: Data Science & Visualization</li>
          <li>Teacher: Mai Hoàng Bảo Ân</li>
          <li>Title: Final project 7/1/2023</li>
          <li>Technologies: Nextjs + D3 + Chartjs </li>
        </ul>
      </div>

      <div className={styles.heatmapContainer}>
        <Heatmap />
        <Plot />
        <LineChart />
        <PieChart />
        <RadarChart />
        <PolarChart />
        <ScatterChart />
        <HorizontalBarChart />
        <DoughnutChart />
        <BubbleChart />
        <div className={styles.cell}>
          <BarChart />
        </div>
        <div className={styles.cell}>
          <CrazyChart />
        </div>
      </div>
    </main>
  );
}
