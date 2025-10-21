import Link from "next/link";
import styles from "./style.module.css";

type LinkButtonProps = {
  href: string;
  text: string;
  className?: string;
};

export default function LinkButton({ href, text, className }: LinkButtonProps) {
  return (
    <Link className={`${styles.button} ${className ?? ""}`} href={href}>
      {text}
    </Link>
  );
}
