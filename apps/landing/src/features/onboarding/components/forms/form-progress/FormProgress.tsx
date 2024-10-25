import styles from "./FormProgress.module.css";

interface Props {
	progressValue: number;
}

export const FormProgress = ({ progressValue }: Props) => {
	return (
		<div className="mb-11">
			<h3 className="text-3deg-black-300 font-semibold text-2xl text-center">
				A little information about you
			</h3>

			<progress
				id="welcome-progress"
				value={progressValue}
				max={100}
				className={styles.progress}
			/>
		</div>
	);
};
