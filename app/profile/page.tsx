import Container from '@/components/Container';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Profile() {
  return (
    <main className="py-8">
      <Container>
        <h1 className="mb-6 text-4xl font-semibold">My Profile</h1>
        <form className="w-full max-w-sm flex flex-col">
          <InputGroup label="Name (English)" id="name" name="name" required />
          <InputGroup label="Name (Korean)" id="nameKr" name="nameKr" />
          <InputGroup
            label="Affiliation"
            id="affiliation"
            name="affiliation"
            required
          />
          <InputGroup label="Title" id="title" name="title" required />
          <InputGroup
            label="Email"
            type="email"
            id="email"
            name="email"
            required
          />
          <fieldset className="mb-5">
            <legend className="mb-1 text-slate-500">
              Email Privacy Settings
            </legend>

            <input
              className="peer/public"
              type="radio"
              name="email-privacy"
              id="email-privacy-public"
              required
            />
            <label
              className="ml-2 mr-6 peer-checked/public:text-blue-500"
              htmlFor="email-privacy-public"
            >
              Public
            </label>

            <input
              className="peer/hidden"
              type="radio"
              name="email-privacy"
              id="email-privacy-hidden"
              required
            />
            <label
              className="ml-2 peer-checked/hidden:text-blue-500"
              htmlFor="email-privacy-hidden"
            >
              Private
            </label>

            <div className="mt-2 hidden peer-checked/public:block text-sm text-slate-500">
              Your email address will be publicly available to{' '}
              <strong className="font-semibold">all</strong> website visitors.
            </div>
            <div className="mt-2 hidden peer-checked/hidden:block text-sm text-slate-500">
              <FontAwesomeIcon
                icon={faLock}
                className="mr-2 w-2 inline-block relative bottom-[2px]"
              />
              Your email address will be hidden from other users.
            </div>
          </fieldset>
          <InputGroup label="Homepage URL" type="url" id="url" name="url" />
          <div className="flex flex-col-reverse">
            <div className="mt-2 text-sm text-slate-500">
              Provide a short description of yourself.
            </div>
            <textarea
              rows={5}
              name="bio"
              id="bio"
              className="rounded border border-slate-500 focus:shadow px-4 py-2"
            />
            <label htmlFor="bio" className="mb-1 text-slate-500">
              Bio
            </label>
          </div>
          <button
            className="mt-8 rounded w-full py-2 font-medium bg-blue-700 text-white"
            type="submit"
          >
            Save
          </button>
        </form>
      </Container>
    </main>
  );
}

function InputGroup({
  label,
  type = 'text',
  id,
  className,
  required,
  ...props
}: { label: string } & InputProps) {
  return (
    <div className="mb-5 flex flex-col-reverse">
      <input
        id={id}
        type={type}
        className={`peer rounded border border-slate-500 invalid:border-red-500 focus:shadow px-4 py-2 ${
          className || ''
        }`}
        required={required}
        aria-required={required}
        {...props}
      />
      <label
        htmlFor={id}
        className="mb-1 text-slate-500 peer-invalid:text-red-500 after:content-['*'] peer-invalid:after:content-['(Invalid)'] peer-invalid:peer-required:after:content-['*_Required'] after:text-red-500 after:font-bold after:text-sm after:ml-1 after:hidden peer-invalid:after:inline-block peer-required:after:inline-block"
      >
        {label}
      </label>
    </div>
  );
}
