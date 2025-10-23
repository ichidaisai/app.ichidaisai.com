import styles from "./style.module.css";

const StandardLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.pageRoot}>{children}</div>;
};

export default StandardLayout;
