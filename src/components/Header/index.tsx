"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./style.module.css";

export default function Header() {
	const [isOpen, setOpen] = useState(false);
	const open = () => {
		setOpen((isOpen) => !isOpen);
	};

	return (
		<header className={styles.header}>
			<Link href="/" className={styles.headerLogo}>
				<Image
					src="/images/logo.webp"
					alt="ロゴ"
					width={400}
					height={400}
					className={styles.logo}
				/>
			</Link>
			<nav className={styles.headerLinks}>
				{/* <Link href="/" className={styles.link}>
					ホーム
				</Link> */}
				<Link href="/projects" className={styles.link}>
					出展一覧
				</Link>
				<Link href="/guest" className={styles.link}>
					ゲスト
				</Link>
				<Link href="/timetable" className={styles.link}>
					タイムテーブル
				</Link>
				<Link href="/access" className={styles.link}>
					アクセス
				</Link>
				<a
					href="https://www.instagram.com/ichidai_sai/"
					className={styles.link}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
				>
					<Image
						src="/images/instagram.svg"
						alt="Instagram"
						width={32}
						height={32}
					/>
				</a>
			</nav>
			<div
				// id="mobile-menu"
				className={styles.mobileMenu}
				onClick={() => setOpen(!open)}
				style={{ display: isOpen ? "flex" : "none" }}
				// aria-hidden={!isOpen}
			>
				<nav className={styles.mobileNav}>
					{/* <Link
						href="/"
						className={styles.mobileLink}
						onClick={() => setOpen(false)}
					>
						ホーム
					</Link> */}
					<Link
						href="/projects"
						className={styles.mobileLink}
						onClick={() => setOpen(false)}
					>
						出展一覧
					</Link>
					<Link
						href="/guest"
						className={styles.mobileLink}
						onClick={() => setOpen(false)}
					>
						ゲスト
					</Link>
					<Link
						href="/timetable"
						className={styles.mobileLink}
						onClick={() => setOpen(false)}
					>
						タイムテーブル
					</Link>
					<Link
						href="/access"
						className={styles.mobileLink}
						onClick={() => setOpen(false)}
					>
						アクセス
					</Link>
				</nav>
			</div>

			<button
				className={styles.menuButton}
				type="button"
				onClick={open}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				aria-label={isOpen ? "閉じる" : "メニュー"}
			>
				{isOpen ? (
					// バツアイコン（SVG）
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
						focusable="false"
					>
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				) : (
					<Image src="/images/menu.svg" alt="メニュー" width={32} height={32} />
				)}
			</button>
		</header>
	);
}
