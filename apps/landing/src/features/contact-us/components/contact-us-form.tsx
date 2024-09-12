import { Button } from "@/features/common/components/ui/button";
import { Checkbox } from "@/features/common/components/ui/checkbox";
import { Input } from "@/features/common/components/ui/input";
import { Textarea } from "@/features/common/components/ui/textarea";

export const ContactUsForm = () => {
	return (
		<section
			className="bg-cover bg-center bg-no-repeat 2xl:h-[80vh] w-full flex flex-col items-center py-[2.625rem] px-4 md:px-0"
			style={{
				backgroundImage: "url('/images/contact-3degrees.png')",
			}}
		>
			<form className="bg-3deg-choco-500 rounded-lg py-6 px-4 md:px-8 xl:w-2/5 2xl:w-1/3">
				<h2 className="text-center text-3deg-black-300 text-5xl">
					Stay in touch
				</h2>
				<p className="text-center text-3deg-black-300 pt-2 pb-8">
					We’d love to hear from you. Please fill out this form.
				</p>

				<div className="grid md:grid-cols-2 gap-4">
					<Input label="First name" placeholder="First name" />
					<Input label="Last name" placeholder="Last name" type="email" />
				</div>

				<Input label="Email" placeholder="you@company.com" />

				<Input
					label="Phone number"
					placeholder="+1 (555) 000-0000"
					type="tel"
				/>

				<Textarea
					label="Message"
					placeholder="Leave us a message..."
					rows={5}
				/>

				<div className="flex space-x-2 items-center mb-8">
					<Checkbox id="acceptPrivacyPolicy" />
					<label
						htmlFor="acceptPrivacyPolicy"
						className="text-3deg-black-300 text-sm font-medium cursor-pointer"
					>
						You agree to our friendly privacy policy.
					</label>
				</div>

				<Button variant="default">Send message</Button>
			</form>
		</section>
	);
};
