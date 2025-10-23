import Image from "next/image";
import styles from "./style.module.css";

type StoreCardProps = {
	name: string;
	category: string;
	location: string;
	detail: string;
	imageSrc: string;
};

export default function StoreCard({
	name,
	category,
	location,
	detail,
	imageSrc,
}: StoreCardProps) {
	const truncateText = (text: string, maxLength: number) => {
		return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
	};

	return (
		<div className={styles.container}>
			<h3 className={styles.name}>{truncateText(name, 20)}</h3>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					width={120}
					height={120}
					src={imageSrc}
					alt={`${name}の画像`}
				/>
				<div className={styles.info}>
					<p className={styles.category}>{category}</p>
					<div className={styles.location}>
						<Image src="/images/map-pin.svg" width={24} height={24} alt="" />
						<p className={styles.locationText}>{truncateText(location, 15)}</p>
					</div>
				</div>
			</div>
			<div className={styles.detail}>{truncateText(detail, 100)}</div>
		</div>
	);
}
