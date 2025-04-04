// This one is used at "/app/generals/tuong-quan-viet-nam/bio/page.tsx"
// This file will be the example of how we will do things in the future. The fake datas will also be created
// However, change these things into tabs.
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Dữ liệu giả
const vietGenerals = [
  {
    name: "Đinh Bộ Lĩnh",
    image: "/vietnamese_generals/dinh-bo-linh-02.png",
    bio: "Đinh Bộ Lĩnh (924–979), tự xưng Đinh Tiên Hoàng, là vị hoàng đế sáng lập nhà Đinh, người đã thống nhất Việt Nam sau thời kỳ 12 sứ quân hỗn loạn. Ông sinh ra tại làng Đại Hữu, châu Đại Hoàng (nay là Gia Viễn, Ninh Bình), trong một gia đình nông dân nghèo. Từ nhỏ, Đinh Bộ Lĩnh đã bộc lộ tài năng lãnh đạo và ý chí mạnh mẽ. Theo sử sách, khi còn trẻ, ông thường tổ chức các trò chơi quân sự cùng bạn bè, thể hiện tầm nhìn chiến lược.\n\nSau khi cha mất, ông được Trần Lãm, một tướng lĩnh quyền lực ở Bố Hải Khẩu, nhận làm con nuôi và truyền dạy binh pháp. Năm 968, Đinh Bộ Lĩnh tập hợp lực lượng, đánh bại các sứ quân khác, thống nhất giang sơn, lên ngôi hoàng đế, đặt niên hiệu là Thái Bình, và lập kinh đô tại Hoa Lư. Ông là người đầu tiên trong lịch sử Việt Nam chính thức xưng 'Hoàng đế', đánh dấu sự độc lập hoàn toàn khỏi sự đô hộ của Trung Quốc.\n\nĐinh Bộ Lĩnh nổi tiếng với tài thao lược, xây dựng quân đội mạnh mẽ và cải cách hành chính. Tuy nhiên, triều đại của ông ngắn ngủi, đến năm 979, ông bị ám sát bởi một viên quan trong cung, để lại ngai vàng cho con trai Đinh Liễn.",
    source: "https://vi.wikipedia.org/wiki/%C4%90inh_B%E1%BB%99_L%C4%A9nh",
  },
  {
    name: "Đinh Lễ",
    image: "/vietnamese_generals/dinh_le.jpg",
    bio: "là công thần khai quốc nhà Lê sơ trong lịch sử Việt Nam, người sách Thùy Cối, nay là Lam Sơn, Thọ Xuân, Thanh Hoá, Việt Nam. Ông tham gia nghĩa quân Lam Sơn dưới cờ Lê Lợi từ buổi ban đầu, lập nhiều chiến thắng, tiêu biểu là trận Tốt Động-Chúc Động khi ông và Lý Triện, Nguyễn Xí phá tan quân Minh do tổng binh Vương Thông chỉ huy trên đất Bắc. Sử gia Ngô Sĩ Liên cho rằng ông cùng với Lý Triện là những vị tướng giỏi nhất của nghĩa quân Lam Sơn.",
    source: "https://vi.wikipedia.org/wiki/Nh%C3%A0_%C4%90inh",
  },
  {
    name: "Đinh Liễn",
    image: "/vietnamese_generals/dinh_lien.jpg",
    bio: "Đinh Liễn (?-979), con trai trưởng của Đinh Bộ Lĩnh, là người kế vị ngai vàng nhà Đinh sau khi cha bị ám sát. Ông được phong làm Nam Việt Vương từ khi còn nhỏ, tham gia nhiều chiến dịch quân sự cùng cha. Tuy nhiên, triều đại của ông ngắn ngủi, kết thúc khi bị Lê Hoàn tiếm quyền, lập ra nhà Tiền Lê.",
    source: "https://vi.wikipedia.org/wiki/%C4%90inh_Li%C3%AAn",
  },
  {
    name: "Dương Tam Kha",
    image: "/vietnamese_generals/dương-tam-kha-02.png",
    bio: "tức Dương Bình Vương (楊平王), là một vị vua Việt Nam, trị vì từ 944 đến 950, xen giữa triều đại nhà Ngô trong lịch sử Việt Nam. Với thân phận là em vợ của Ngô Quyền và là con trai của Tiết độ sứ Dương Đình Nghệ, ông đã tạo nên một thế lực đủ mạnh để cướp ngôi nhà Ngô, tự lập triều đại riêng của mình trong vòng 6 năm, cho đến khi bị Hậu Ngô Vương phế truất.",
    source: "https://vi.wikipedia.org/wiki/D%C6%B0%C6%A1ng_Tam_Kha",
  },
  {
    name: "Lý Thường Kiệt",
    image: "/vietnamese_generals/ly_thuong_kiet_02.jpg",
    bio: "Lý Thường Kiệt (1019–1105), tên thật là Ngô Tuấn, tự Thường Kiệt, là danh tướng kiệt xuất của nhà Lý, người đã để lại dấu ấn sâu đậm trong lịch sử Việt Nam với chiến thắng chống quân Tống năm 1075-1077. Ông sinh ra tại phường Thái Hòa, Thăng Long (nay là Hà Nội), trong một gia đình quan lại. Từ nhỏ, Lý Thường Kiệt đã thông minh, ham học, và sớm được triều đình nhà Lý trọng dụng.\n\nNăm 1075, khi quân Tống chuẩn bị xâm lược Đại Việt, Lý Thường Kiệt chủ động tấn công phủ đầu, dẫn quân vượt biên giới đánh vào đất Tống, chiếm các thành Ung Châu, Khâm Châu, và Liêm Châu. Chiến thắng này không chỉ làm suy yếu ý chí xâm lược của địch mà còn khẳng định tinh thần độc lập của dân tộc. Đặc biệt, ông là tác giả của bài thơ 'Nam quốc sơn hà', được coi là bản tuyên ngôn độc lập đầu tiên của Việt Nam, khẳng định chủ quyền lãnh thổ.\n\nNăm 1077, khi quân Tống kéo sang lần nữa, Lý Thường Kiệt chỉ huy trận đánh trên sông Như Nguyệt (sông Cầu), dùng chiến thuật mai phục và tâm lý chiến, buộc quân Tống phải rút lui. Ông không chỉ là một nhà quân sự tài ba mà còn là một nhà chính trị, ngoại giao xuất sắc, góp phần xây dựng triều Lý vững mạnh. Cuối đời, ông sống ẩn dật và qua đời năm 1105, hưởng thọ 86 tuổi.",
    source:
      "https://vi.wikipedia.org/wiki/L%C3%BD_Th%C6%B0%E1%BB%9Dng_Ki%E1%BB%87t",
  },
  {
    name: "Nguyễn Ánh",
    image: "/vietnamese_generals/nguyen_anh_02.png",
    bio: "Nguyễn Ánh (1762–1820), tức vua Gia Long, là vị hoàng đế sáng lập nhà Nguyễn, người đã thống nhất Việt Nam sau hàng thế kỷ nội chiến. Ông sinh ra tại Huế, trong dòng dõi chúa Nguyễn ở Đàng Trong. Sau khi Tây Sơn nổi dậy lật đổ chúa Nguyễn, Nguyễn Ánh phải chạy trốn và nhiều lần thất bại trước quân Tây Sơn.\n\nVới sự hỗ trợ của người Pháp (do Giám mục Bá Đa Lộc cầu viện), Nguyễn Ánh xây dựng lại lực lượng, từng bước đánh bại Tây Sơn, chiếm lại Gia Định (1801) và Phú Xuân (1802). Năm 1802, ông lên ngôi hoàng đế, lấy niên hiệu Gia Long, dời đô về Phú Xuân (Huế), chấm dứt thời kỳ phân liệt. Ông nổi tiếng với công cuộc cải cách hành chính, xây dựng luật pháp (Bộ luật Gia Long), nhưng cũng bị chỉ trích vì lệ thuộc ngoại bang và chính sách khắc nghiệt với nhà Tây Sơn.",
    source: "https://vi.wikipedia.org/wiki/Gia_Long",
  },
];

const GeneralBio = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const resolvedSearchParams = await searchParams;
  const { general: generalParam } = resolvedSearchParams;

  const general = vietGenerals.find(
    (g) =>
      generalParam &&
      g.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-") === generalParam
  );

  if (!generalParam || !general) {
    return (
      <div className="flex flex-col items-center text-gray-200 p-6">
        <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
          General Not Found
        </h1>
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
      <h1 className="text-4xl md:text-5xl font-bold my-8 border-2 border-white bg-black/50 rounded-lg px-4 py-2">
        {general.name}
      </h1>
      <div className="w-full  max-w-5xl px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-[1/1] border-2 border-white rounded-lg bg-amber-300">
            <Image
              src={general.image}
              alt={general.name}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="mt-6 text-lg text-center whitespace-pre-line border-2 border-white bg-black/50 rounded-lg p-4">
            {general.bio}
          </div>
          <p className="mt-4 text-sm">
            Nguồn:{" "}
            <a
              href={general.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Wikipedia
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralBio;
