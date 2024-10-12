"use client";

import { useState } from "react";
import {
	useDropzone,
	DropzoneRootProps,
	DropzoneInputProps,
	FileWithPath,
} from "react-dropzone";

interface UploadHookProps {
	setFileChange?: (files: File[]) => void;
}

interface FilePreview {
	url: string;
	index: number;
}

interface UploadHookResult {
	files: File[];
	preview: FilePreview[];
	getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
	getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
	removeFile: () => void;
	removeSingleFile: (index: number) => void;
	acceptedFiles: readonly FileWithPath[];
}

export const useUploadFile = ({
	setFileChange,
}: UploadHookProps): UploadHookResult => {
	const [files, setFiles] = useState<File[]>([]);
	const [preview, setPreview] = useState<FilePreview[]>([]);

	const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
		return new Promise((resolve, reject) => {
			const reader: FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const onDrop = async (acceptedFiles: File[]) => {
		setFiles([...files, ...acceptedFiles]);
		setFileChange?.([...files, ...acceptedFiles]);

		let b64arr: FilePreview[] = [];
		const pr_arr = acceptedFiles.map(
			(item: File, i: number) =>
				new Promise(async (res) => {
					let b64 = (await getBase64(item)) as string;
					b64arr.push({ url: b64, index: i });
					res(null);
				})
		);

		await Promise.all(pr_arr);
		setPreview([...preview, ...b64arr]);
	};

	const removeFile = () => {
		setFiles([]);
		setPreview([]);
	};

	const removeSingleFile = (index: number) => {
		const updatedFiles = files.filter((_item, i) => i !== index);
		const updatedPreviewFiles = preview.filter((_item, i) => i !== index);
		setFiles(updatedFiles);
		setPreview(updatedPreviewFiles);
	};

	const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
		onDrop,
	});

	return {
		files,
		preview,
		getRootProps,
		getInputProps,
		removeFile,
		removeSingleFile,
		acceptedFiles,
	};
};
