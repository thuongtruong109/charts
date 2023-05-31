import Head from "next/head";

import Heatmap from "@/components/Heatmap";

import styles from "@/styles/Home.module.css";
import Scatter from "@/components/scatter/ScatterPlot";

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
          <li>Vinh</li>
        </ul>
        <ul>
          <h3>Information</h3>
          <li>Title: Data Visualization final project</li>
          <li>Technologies: Nextjs + D3</li>
        </ul>
      </div>

      <div className={styles.heatmapContainer}>
        <div>
          <Heatmap />
          <p>
            1. Heatmap chart -{" "}
            <a href="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_IC.csv">
              View dataset
            </a>
          </p>
        </div>

        <div>
          <Scatter />
          <p>
            2. Scatter plot chart -{" "}
            <a href="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv">
              View dataset
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
