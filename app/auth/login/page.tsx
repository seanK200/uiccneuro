import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UICCN: Login',
};

export default function Login() {
  return (
    <div className="w-full max-w-sm">
      <h1 className="text-4xl font-semibold mb-4">Sign In or Join</h1>
      <p className="mb-8">Log in or create a new account to access UICCN.</p>
      <div className="flex flex-col space-y-3">
        <LoginLink icon={faGoogle} label="Google" />
        <LoginLink icon={faGithub} label="Github" />
      </div>
    </div>
  );
}

function LoginLink({
  icon,
  label,
  color,
}: {
  color?: string;
  icon: IconProp;
  label: string;
}) {
  return (
    <button className="mb-2 w-full px-4 py-3 md:py-2 rounded bg-slate-200 flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className="w-4" />
      <span className="flex-grow text-center">Continue with {label}</span>
    </button>
  );
}
