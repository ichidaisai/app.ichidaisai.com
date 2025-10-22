import Pending from "@/components/Pending";
import Style from "./page.module.css";

export default function Page() {
  return (
    <>
      <Pending />
      <div className={Style.mapContainer}>
        <h1 className={Style.title}>会場マップ</h1>
        <p className={Style.text}>現在、会場マップは準備中です。</p>
        <p className={Style.text}>しばらくお待ちください。</p>
      </div>
    </>
  );
}
