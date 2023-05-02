import book from "./book2.jpg";

function StartScreen({
  onClickTest,
  onClickReview,
  onClickTheory,
  onClickChoices,
}) {
  const isMobile = window.innerWidth < 600;
  const bookImg = (
    <img style={{ height: "12em", marginLeft: "2em" }} src={book} alt="Books" />
  );
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div>TRƯỜNG TRUNG CẤP KINH TẾ KỸ THUẬT TÂY NINH</div>
        <div>KHOA KINH TẾ DỊCH VỤ</div>
        <h1 style={{ marginBottom: 0 }}>MÔN HỌC: </h1>
        <h1 style={{ marginTop: 0 }}>NGUYÊN LÝ KẾ TOÁN</h1>
        {isMobile && bookImg}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ cursor: "pointer" }} onClick={onClickReview}>
              <u>PHẦN 1:</u> ĐỀ CƯƠNG ÔN TẬP
            </h2>
            <h2 style={{ cursor: "pointer" }} onClick={onClickTheory}>
              <u>PHẦN 2:</u> CÂU HỎI LÝ THUYẾT
            </h2>
            <h2 style={{ cursor: "pointer" }} onClick={onClickChoices}>
              <u>PHẦN 3:</u> CÂU HỎI TRẮC NGHIỆM
            </h2>
            <h2 style={{ cursor: "pointer" }} onClick={onClickTest}>
              <u>PHẦN 4:</u> KIỂM TRA
            </h2>
          </div>
          {!isMobile && bookImg}
        </div>
      </div>
      <div style={{ textAlign: "right", fontWeight: "bold" }}>
        Giáo viên: Ths. Vi Thị Bích Vân
      </div>
    </div>
  );
}

export default StartScreen;
