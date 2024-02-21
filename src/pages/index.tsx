import Heatmap from "@/components/Heatmap";

import BarChart from "@/components/Bar";
import BubbleChart from "@/components/Bubble";
import CrazyChart from "@/components/Crazy";
import DoughnutChart from "@/components/Doughnut";
import HorizontalBarChart from "@/components/Horinzontal";
import LineChart from "@/components/Line";
import PieChart from "@/components/Pie";
import Plot from "@/components/Plot";
import PolarChart from "@/components/Polar";
import RadarChart from "@/components/Rada";
import ScatterChart from "@/components/Scatter";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.info}>
        <h1>Charts Visualization</h1>
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
