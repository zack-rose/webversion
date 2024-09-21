interface Props {
	errorMessage?: string | string[];
}

export const ErrorMessage = ({ errorMessage }: Props) => {
	return <p className="text-red-600 text-xs">{errorMessage}</p>;
};
