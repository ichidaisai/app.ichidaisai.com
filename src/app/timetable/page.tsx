"use client";
import Image from "next/image";
import styles from "./style.module.css";
import EventCard from "@/components/EventCard";
import { useState, useEffect } from "react";
import { Kaisei_Opti } from "next/font/google";
import Day from "@/components/Day";
import { get } from "http";
import { getTimeTable } from "@/libs/dummyData";
/*
const data = [
  {
    date: "10/25",
    location: "野外ステージ",
    start: "9:30",
    end: "12:00",
    duration: 150,
    group: "MAC電音",
    name: "ROMP’ 25出張ライブ",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "12:00",
    end: "13:00",
    duration: 60,
    group: "FIT",
    name: "筋肉自慢大会",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "13:00",
    end: "15:00",
    duration: 120,
    group: "レッドブル",
    name: "Dance Your Style HCU",
  },
  {
    date: "10/25",
    location: "大ホール",
    start: "11:00",
    end: "12:30",
    duration: 90,
    group: "regalo",
    name: "アカペラライブ",
  },
  {
    date: "10/25",
    location: "大ホール",
    start: "13:00",
    end: "14:00",
    duration: 60,
    group: "マンドリン・ギター部",
    name: "演奏会",
  },
  {
    date: "10/25",
    location: "小ホール",
    start: "10:30",
    end: "12:30",
    duration: 120,
    group: "広島市立大学",
    name: "第2回 講演会理事会",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "15:00",
    end: "16:00",
    duration: 60,
    group: "",
    name: "ホームカミングデー",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "16:00",
    end: "16:30",
    duration: 30,
    group: "",
    name: "男装・女装コンテスト",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "16:30",
    end: "17:00",
    duration: 30,
    group: "",
    name: "借りモノ競争",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "17:30",
    end: "18:00",
    duration: 30,
    group: "",
    name: "ビンゴ大会",
  },
  {
    date: "10/25",
    location: "野外ステージ",
    start: "18:30",
    end: "20:00",
    duration: 90,
    group: "regalo",
    name: "アカペラLIVE",
  },
  {
    date: "10/25",
    location: "小ホール",
    start: "14:30",
    end: "16:00",
    duration: 90,
    group: "自主制作映画研究会",
    name: "大学祭上映会",
  },
  {
    date: "10/25",
    location: "小ホール",
    start: "16:00",
    end: "18:00",
    duration: 120,
    group: "Vocalists",
    name: "Stay the Sounds",
  },
  {
    date: "10/26",
    location: "野外ステージ",
    start: "9:30",
    end: "11:30",
    duration: 120,
    group: "MAC電音",
    name: "ROMP’ 25出張ライブ",
  },
  {
    date: "10/26",
    location: "野外ステージ",
    start: "13:30",
    end: "14:45",
    duration: 75,
    group: "",
    name: "Laughing Hick",
  },
  {
    date: "10/26",
    location: "大ホール",
    start: "11:00",
    end: "15:00",
    duration: 240,
    group: "神楽のなかまたち",
    name: "高井神楽団による神楽の演舞",
  },
  {
    date: "10/26",
    location: "野外ステージ",
    start: "15:00",
    end: "16:30",
    duration: 90,
    group: "regalo",
    name: "OBOG ライブ",
  },
  {
    date: "10/26",
    location: "野外ステージ",
    start: "17:00",
    end: "19:30",
    duration: 150,
    group: "ADDICTion",
    name: "ダンス部ステージ発表",
  },
  {
    date: "10/26",
    location: "大ホール",
    start: "16:00",
    end: "17:00",
    duration: 60,
    group: "吹奏楽部",
    name: "定期演奏会",
  },
  {
    date: "10/26",
    location: "小ホール",
    start: "13:45",
    end: "15:45",
    duration: 120,
    group: "広島市立大学",
    name: "第2回 講演会理事会",
  },
];
*/
const events = getTimeTable();
const kaisei = Kaisei_Opti({ subsets: ["latin"], weight: ["500"] });
export default function Page() {
  // temporary selectedDay; replace with state/prop when you wire up the buttons
  const [selectedDay, setSelectedDay] = useState<string>("");
  //2025-10-26なら10/26をデフォルトにする
  const today = new Date();
  const effectiveDay =
    selectedDay === ""
      ? today.getFullYear() === 2025 &&
        today.getMonth() === 9 &&
        today.getDate() === 26
        ? "10/26"
        : "10/25"
      : selectedDay;

  const filteredEvents = events.filter((event) => event.day === effectiveDay);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <div className={styles.pageRoot}>
      <div className={styles.inner}>
        <div className={styles.timelineContainer}>
          <div className={styles.dayContainer}>
            <Day
              month="10"
              day={selectedDay === "10/26" ? "26" : "25"}
              count={selectedDay === "10/25" ? 1 : 2}
              className={styles.day}
            />
            <div className={styles.dayButtonsContainer}>
              <button
                type="button"
                className={`${styles.dayButton} ${
                  selectedDay === "10/26" ? "" : styles.active
                }`}
                onClick={() => handleDayClick("10/25")}
              >
                10/25
              </button>
              <button
                type="button"
                className={`${styles.dayButton} ${
                  selectedDay === "10/26" ? styles.active : ""
                }`}
                onClick={() => handleDayClick("10/26")}
              >
                10/26
              </button>
            </div>
          </div>
          {filteredEvents.map((event, index) => (
            <div className={styles.timelineItem} key={index}>
              <div className={styles.timelineContent}>
                <time className={kaisei.className}>{event.start}</time>
                <EventCard
                  location={event.location}
                  min={event.time}
                  category={event.club ?? ""}
                  name={event.name}
                  start={event.start}
                  end={event.end}
                />
                <span className={styles.circle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
