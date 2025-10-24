import styles from "./style.module.css";

type TitleProps = {
	heading: string;
	headingEnglish: string;
};

export default function Title({ heading, headingEnglish }: TitleProps) {
	return (
		<div className={styles.headingWrapper}>
			<div className={styles.heading}>{heading}</div>
			<div className={styles.headingEnglish}>{headingEnglish}</div>
		</div>
	);
}
