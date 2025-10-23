"use client";
import Image from "next/image";
import styles from "./style.module.css";
import EventCard from "@/components/EventCard";
import { useState, useEffect } from "react";
import { Kaisei_Opti } from "next/font/google";
import Day from "@/components/Day";
import { get } from "http";
import { getTimeTable } from "@/libs/dummyData";

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
