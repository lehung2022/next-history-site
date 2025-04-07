import ContactInfo from "@/client-components/sub/ContactInfo";
import Link from "next/link";

const ContactPage = () => {
  return (
    <>
      <div className={`flex flex-col items-center p-10 text-white`}>
        <ContactInfo
          name="陳元扞: Trần Nguyên Hãn"
          email="tran.nguyen.han1427@gmail.com"
          twitter="https://x.com/musashi_300"
          skype="https://join.skype.com/invite/pMngRGworexZ"
          discord="https://discord.com/users/1344897403093909566"
        />
        <Link
          href="/"
          className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 active:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-102 active:scale-102"
        >
          ← Back
        </Link>
      </div>
    </>
  );
};

export default ContactPage;
