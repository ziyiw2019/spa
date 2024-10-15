
import Button from './reusable/Button';
import FormInput from './reusable/FormInput';

const ContactForm = ({onName,onEmail,onSubject,onMessage,onSubmit}) => {
	return (
		<div className="w-full ">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
					    onSubmit(e)
						//e.preventDefault();

					}}
					className="max-w-xl   bg-secondary-light dark:bg-secondary-dark rounded-xl  text-left"
				>

				   <div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Comment*
						</label>
                        <textarea
							className="w-full  px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Comment*"
							onChange={onMessage}
							required
						></textarea>
					</div>



					<FormInput
						inputLabel="Name*"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText=""
						ariaLabelName="Name"
						required={true}
						onValueChange={onName}
					/>
					<FormInput
						inputLabel="Email*"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText=""
						ariaLabelName="Email"
						onValueChange={onEmail}
						required={true}
					/>
					<FormInput
						inputLabel="Website"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText=""
						ariaLabelName="Subject"
						onValueChange={onSubject}
						required={false}
					/>



					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-amber-400 hover:bg-amber-600 focus:ring-1 focus:ring-amber-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
