import styles from "./FormProgress.module.css";

interface Props {
	progressValue: number;
}

export const FormProgress = ({ progressValue }: Props) => {
	return (
		<div>
			<progress
				id="welcome-progress"
				value={progressValue}
				max={100}
				className={styles.progress}
			/>
		</div>
	);
};
