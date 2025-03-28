import { FaTwitter, FaSkype, FaEnvelope, FaDiscord } from "react-icons/fa";

interface ContactInfoProps {
  name: string;
  email: string;
  twitter: string;
  skype: string;
  discord: string;
}

const ContactInfo = ({
  name,
  email,
  twitter,
  skype,
  discord,
}: ContactInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-white w-full max-w-3xl mx-auto p-8 border border-gray-700 rounded-lg bg-slate-950/50 shadow-lg animate-slideDown">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-yellow-50">Contact Me</h1>

      {/* Introduction */}
      <p className="text-lg text-gray-300 text-center mb-6">
        My name is <span className="text-white font-semibold">{name}</span>, the
        author of this project. You can reach out to me through the following
        platforms:
      </p>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-center">
        {/* Email */}
        <div className="flex flex-col items-center gap-2 border p-4 rounded-lg bg-slate-950/50">
          <FaEnvelope className="text-yellow-400 text-3xl" />
          <a href={`mailto:${email}`} className="hover:underline text-gray-300">
            {email}
          </a>
        </div>

        {/* Twitter */}
        <div className="flex flex-col items-center gap-2 border p-4 rounded-lg bg-slate-950/50">
          <FaTwitter className="text-blue-400 text-3xl" />
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300"
          >
            Twitter
          </a>
        </div>

        {/* Skype */}
        <div className="flex flex-col items-center gap-2 border p-4 rounded-lg bg-slate-950/50">
          <FaSkype className="text-blue-300 text-3xl" />
          <a
            href={skype}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300"
          >
            Skype
          </a>
        </div>
        {/* Discord */}
        <div className="flex flex-col items-center gap-2 border p-4 rounded-lg bg-slate-950/50">
          <FaDiscord className="text-blue-300 text-3xl" />
          <a
            href={discord}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
