"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { addWord } from "../data/db/actions";

const inputClassName =
	"px-3 py-1.5 mt-1 mb-5 block w-full rounded-md dark:bg-slate-800 dark:text-slate-100";

export default function WordForm() {
	const formRef = useRef<HTMLFormElement>(null);

	return (
		<form
			className="relative max-w-[500px]"
			ref={formRef}
			action={async (formData) => {
				await addWord(formData);
				formRef.current?.reset();
			}}
		>
			<label htmlFor="spelling">Spelling</label>
			<input
				aria-label="Spelling"
				name="spelling"
				id="spelling"
				type="text"
				required
				className={inputClassName}
			/>

			<label htmlFor="definition">Definition</label>
			<textarea
				aria-label="Definition"
				name="definition"
				id="definition"
				required
				className={inputClassName}
				spellCheck
			/>

			<label htmlFor="partOfSpeech">Part of Speech</label>
			<select
				defaultValue="noun"
				aria-label="Part of Speech"
				name="partOfSpeech"
				id="partOfSpeech"
				required
				className={inputClassName}
			>
				<option>noun</option>
				<option>adjective</option>
				<option>verb</option>
				<option>adverb</option>
				<option>conjunction</option>
				<option>interjection</option>
				<option>preposition</option>
				<option>pronoun</option>
			</select>

			<label htmlFor="dateLearned">Date Learned</label>
			<input
				aria-label="Date Learned"
				name="dateLearned"
				id="dateLearned"
				type="datetime-local"
				required
				className={inputClassName}
			/>
			<SubmitButton />
		</form>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			aria-disabled={pending}
			className="py-1 w-1/2 rounded-xs  dark:border-2 dark:border-violet-500"
		>
			Submit
		</button>
	);
}
