import Link from "next/link";
import Image from "next/image";
import { generals } from "@/types/vietGenerals";
import { toSlug } from "@/types/vietGenerals";

const VietGeneralBio = async ({ params }: { params: { slug: string } }) => {
  // Giả lập fetch từ Firebase, sau này thay bằng:
  // const querySnapshot = await firebase.firestore().collection('generals').where('slug', '==', params.slug).get();
  const general = generals.find((g) => toSlug(g.name) === params.slug);

  if (!general) {
    return (
      <div className="flex flex-col items-center text-gray-200 p-6">
        <div className="text-4xl md:text-5xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
          General Not Found
        </div>
        <p className="text-lg text-center">
          Please select a general from the list.
        </p>
        <Link
          href="/generals/tuong-quan-viet-nam"
          className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
        >
          ← Back to Vietnamese generals
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-gray-200">
      <Link
        href="/generals/tuong-quan-viet-nam"
        className="text-white bg-transparent border border-gray-300 hover:bg-red-700 active:bg-red-700 mt-4 px-4 py-2 rounded-lg mb-4"
      >
        ← Back to Vietnamese generals
      </Link>
      <div className="text-4xl md:text-5xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        {general.name}
      </div>
      <div className="w-full max-w-5xl px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg bg-amber-300">
            <Image
              src={general.image}
              alt={general.name}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={60}
            />
          </div>
          <div className="mt-6 text-lg text-center whitespace-pre-line border-2 border-white bg-black/50 rounded-lg p-4">
            {general.bio}
          </div>
          <p className="mt-4 text-sm">Nguồn: Chronicles of Valor</p>
        </div>
      </div>
    </div>
  );
};

export default VietGeneralBio;
