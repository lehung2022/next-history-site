const Introduction = () => {
  const contactText = '"liên hệ"';
  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-2xl md:text-3xl font-bold my-4 border-2 border-white bg-black/50 rounded-lg px-4 py-2 max-w-2xl text-center">
        <p className="text-lg text-center max-w-5xl mb-6 px-4 py-2">
          Trước hết, xin kính chào quý vị. Là một người đam mê môn lịch sử, và
          luôn muốn tìm hiểu về lịch sử nước nhà, tôi, một lập trình viên lâu
          năm trong ngành công nghệ thông tin, đã dành tâm huyết của mình ra để
          nghiên cứu và thực hiện tạo nên trang web này. Mục đích chính của tôi,
          là để hướng các bạn trẻ, tìm về với cội nguồn lịch sử nước Việt. Theo
          đó, có thể thấy được phần nào bức tranh toàn cảnh của nước Việt Nam từ
          xưa tới nay. Do bối cảnh lịch sử của nước Việt luôn dính tới Trung
          Quốc, nước ngay cạnh chúng ta, nên tôi cũng sẽ bao gồm cả lịch sử của
          Trung Quốc. Đi kèm đó, sẽ là tìm hiểu thêm về lịch sử của Nhật Bản,
          đất nước mà Việt Nam có thể học hỏi từ đó, rồi tìm tòi và áp dụng
          những chính sách của họ. Trong quá trình xây dựng trang web này, nếu
          quý vị có yêu cầu gì muốn sửa đổi, hay cập nhật về trang web, có thể
          liên lạc với tôi qua phần {contactText}.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
