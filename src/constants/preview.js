const chuong1 = {
    title: 'CHƯƠNG 1: MỘT SỐ VẤN ĐỀ CHUNG VỀ KẾ TOÁN\n',
    content: '1.Định nghĩa kế toán:\n' +
        'Theo Luật Kế toán 2015, kế toán là việc thu thập, xử lý, kiểm tra, phân tích và cung cấp thông tin kinh tế, tài chính dưới hình thức giá trị, hiện vật và thời gian lao động\n' +
        '\n2.Đối tượng sử dụng thông tin kế toán:\n' +
        '-Đối tượng bên trong: nhà quản trị\n' +
        '-Đối tượng bên ngoài: chủ nợ, nhà đầu tư, cơ quan thuế…\n' +
        '\n3.Yêu cầu của thông tin kế toán: 6 yêu cầu\n' +
        '-Trung thực \n' +
        '-Khách quan \n' +
        '-Đầy đủ \n' +
        '-Kịp thời \n' +
        '-Dễ hiểu \n' +
        '-Có thể so sánh \n' +
        '\n4.Các nguyên tắc kế toán căn bản: 7 nguyên tắc\n' +
        '-Hoạt động liên tục \n' +
        '-Cơ sở dồn tích \n' +
        '-Giá gốc \n' +
        '-Phù hợp \n' +
        '-Nhất quán \n' +
        '-Thận trọng \n' +
        '-Trọng yếu \n' +
        '\n5.Đối tượng của kế toán:\n' +
        '-Tài sản: TS ngắn hạn, TS dài hạn\n' +
        '-Nguồn vốn: Nợ phải trả, vốn chủ sở hữu\n' +
        'Phương trình kế toán căn bản\n' +
        'Tài sản = Nguồn vốn\n' +
        'Tài sản = Nợ phải trả + Vốn chủ sở hữu'
}

const chuong2 = {
    title: 'CHƯƠNG 2: BÁO CÁO KẾ TOÁN\n',
    content: '1.Bảng cân đối kế toán\n' +
        'Cho biết tình hình tài chính (TS và nguồn hình thành TS (Nguồn vốn)) của đơn vị kế toán tại một thời điểm nhất định (cuối tháng, quý, năm)\n' +
        'Hai dạng trình bày: kết cấu hàng ngang và kết cấu hàng dọc\n' +
        'Cách lập: Căn cứ vào số dư đầu kỳ và cuối kỳ sổ tổng hợp, sổ chi tiết các TK loại 1, 2, 3, 4 (loại TK TS và NV) trong Bảng hệ thống TK kế toán\n' +
        '\t\n' +
        '\n2.Báo cáo kết quả hoạt động kinh doanh\n' +
        'Cho biết tình hình kinh doanh (DT, CP, KQKD) trong một thời kỳ của đơn vị kế toán\n' +
        'Cách lập: Căn cứ vào số phát sinh các TK loại 5, 6, 7, 8, 9 (Loại tài khoản DT, CP, XĐKQKD)\n' +
        '\n' +
        '\n3.Báo cáo lưu chuyển tiền tệ\n' +
        'Cho biết tình hình lưu chuyển tiền tệ (thu, chi tiền) trong một kỳ của đơn vị kế toán\n' +
        '\n' +
        '\n4.Bản thuyết minh BCTC \n' +
        'Cho biết các thông tin bổ sung về tình hình SXKD, tình hình tài chính của đơn vị trong kỳ kế toán mà các BCTC trên không thể trình bày rõ ràng, chi tiết hoặc chưa nêu ra được.\n'
}

const chuong3 = {
    title: 'CHƯƠNG 3 TÀI KHOẢN VÀ GHI SỔ KÉP\n',
    content:
        '1.\tTài khoản kế toán được phân thành 9 loại:\n' +
        '-\tTài khoản Tài sản (loại 1, 2): Nợ Tăng, Có Giảm, Dư Nợ\n' +
        '-\tTài khoản Nguồn vốn (loại 3, 4) : Nợ Giảm, Có Tăng, Dư Có\n' +
        '-\tTài khoản Doanh thu (loại 5, 7): Nợ Giảm, Có Tăng, Không Dư\n' +
        '-\tTài khoản Chi phí (loại 6, 8): Nợ Tăng, Có Giảm, Không Dư\n' +
        '-\tTài khoản Xác định kết quả kinh doanh (loại 9): Nợ: kết chuyển chi phí, Có: kết chuyển doanh thu, Không dư\n' +
        'Số dư cuối kỳ = Số dư đầu kỳ + Số phát sinh tăng – Số phát sinh giảm\n' +
        '=> Chú ý: Các TK đặc biệt trong Bảng Hệ thống TK kế toán\n' +
        '-\tNhóm TK điều chỉnh giảm: TK 214, TK 229, TK 419, TK 521 => Kết cấu ngược với TK cùng loại => Khi lấy số liệu để lập BCĐKT thì ghi âm \n' +
        '-\tNhóm TK lưỡng tính: TK 131, TK 331 => Kết cấu: Dư Nợ hoặc Có => Khi lấy số liệu để lập BCĐKT thì lấy số dư của TK chi tiết, không lấy số dư của TK tổng hợp: Tổng số dư Nợ chi tiết đưa lên phần tào sản, Tổng số dư có chi tiết đưa lên phần nguồn vốn\n' +
        '\n2.\tĐịnh khoản kế toán: Là việc xác định TK nào ghi Nợ, TK nào ghi Có\n' +
        '  4 bước để định khoản đúng 1 Nghiệp vụ kinh tế \n' +
        'B1: Xác định đối tượng kế toán\n' +
        'B2: Xác định tài khoản liên quan\n' +
        'B3: Xác định hướng tang, giảm của các tài khoản\n' +
        'B4: Xác định tài khoản ghi nợ, tài khoản ghi có\n' +
        'B5: Xác định số tiền ghi vào từng tài khoản và đảm bảo Tổng số tiền bên Nợ = Tổng số tiền bên Có\n' +
        '=> Chú ý:\n' +
        '-\tKhi định khoản kế toán chỉ cần sử dụng số hiệu TK, không cần ghi tên TK\n' +
        '-\tTK ghi Nợ được ghi trước, TK ghi Có ghi sau và lùi vào 1 khoảng so với TK ghi Nợ\n' +
        '\n3.\tGhi sổ kép:\n' +
        'Là ghi số tiền vào bên Nợ, Có tương ứng của các TK kế toán\n' +
        'Nguyên tắc ghi sổ kép:\n' +
        '– Một nghiệp vụ kinh tế phát sinh ảnh hưởng ít nhất tới 02 tài khoản kế toán\n' +
        '– Luôn có ít nhất 01 tài khoản ghi Nợ và 01 tài khoản ghi Có\n' +
        '– Tổng số tiền bên Nợ = Tổng số tiền bên Có\n' +
        '\n4.\tHạch toán tổng hợp và hạch toán chi tiết:\n' +
        '-\tHạch toán tổng hợp: sử dụng TK cấp 1 (VD: TK 152) và thước đo giá trị\n' +
        '-\tHạch toán chi tiết: sử dụng TK cấp 2, các sổ chi tiết (VD; TK 152 (Chính), TK 152 (Phụ)…) và cả 3 thước đo: giá trị, hiện vật và thời gian lao động.'
}

const chuong4 = {
    title: 'CHƯƠNG 4 TÍNH GIÁ CÁC ĐỐI TƯỢNG KẾ TOÁN\n',
    content:
        '1.\tTính giá tài sản cố định (TSCĐ):\n' +
        '-\tMua về: Nguyên tắc giá gốc\n' +
        'Nguyên giá = Giá mua + Thuế không được hoàn (NK,TTĐB) – Giảm trừ (CKTM, GGHB) + Chi phí trước khi sử dụng\n' +
        '-\tTại bất cứ thời điểm nào trong quá trình sử dụng\n' +
        'Giá trị còn lại = Nguyên giá – Giá trị hao mòn lũy kế\n' +
        'Giá trị hao mòn = Nguyên giá / Số năm sử dụng   (theo phương pháp đường thẳng)\n' +
        '\n2.\tTính giá hàng tồn kho (HTK):\n' +
        '-\tNhập kho: Nguyên tắc giá gốc\n' +
        'Giá gốc (giá thực tế NK) = Giá mua + Thuế không được hoàn (NK, TTĐB) – Giảm trừ (CKTM, GGHB) + Chi phí mua\n' +
        'Đơn giá gốc = Giá gốc / Số lượng \n' +
        '-\tXuất kho: Thực tế đích danh, FIFO (nhập trước, xuất trước), BQGQ (cố định, di động)\n' +
        '+ Thực tế đích danh: Xuất hàng lô nào, tính đơn giá xuất theo lô đó\n' +
        '+ FIFO: Hàng hoá nào nhập trước thì xuất trước, xuất hết số nhập trước rồi mới đến số nhập sau theo giá thực tế của từng lần nhập\n' +
        '+ BQGQ cố định: Tính đơn giá bình quân vào cuối kỳ:\n' +
        'Đơn giá xuất bình quân = Tổng số tiền của HH / Tổng số lượng của HH     (tính cả tồn đầu kỳ và nhập trong kỳ)\n' +
        '+ BQGQ di động: Tính đơn giá bình quân mỗi lần nhập kho'
}

const chuong5 = {
    title: 'CHƯƠNG 5 CHỨNG TỪ KẾ TOÁN VÀ KIỂM KÊ\n',
    content: '1.\tChứng từ\n' +
        '-\tPhân loại chứng từ: có nhiều căn cứ phân loại\n' +
        '+ Căn cứ vào nội dung phản ánh: chứng từ tiền tệ; chứng từ HTK; chứng từ\n' +
        'bán hàng; chứng từ lao động tiền lương; chứng từ TSCĐ\n' +
        '+ Căn cứ vào nơi lập: chứng từ bên trong; chứng từ bên ngoài\n' +
        '+ Căn cứ công dụng: chứng từ mệnh lệnh; chứng từ chấp hành; chứng từ liên hợp\n' +
        '……….\n' +
        '-\tTrình tự luân chuyển chứng từ (theo thứ tự): Lập; Kiểm tra; Hoàn chỉnh; Lưu chuyển; Bảo quản và lưu trữ\n' +
        '\n2.\tKiểm kê\n' +
        'Kiểm kê là phương pháp kiểm tra tại chỗ các loại tài sản hiện có nhằm xác định chính xác số lượng, chất lượng cũng như giá trị của các loại tài sản hiện có.\n' +
        '-\tPhân loại kiểm kê:\n' +
        'o\tTheo phạm vi kiểm kê: kiểm kê toàn bộ, kiểm kê từng phần\n' +
        'o\tTheo thời gian kiểm kê: kiểm kê định kỳ, kiểm kê bất thường\n' +
        '-\tPhương pháp tiến hành kiểm kê:\n' +
        'o\tKiểm kê hiện vật: là việc cân, đo, đong, đếm tại chỗ đối với các loại hiện vật được kiểm kê.\n' +
        'o\tKiểm kê tiền mặt và các chứng khoán có giá trị như tiền: Phải tiến hành kiểm kê toàn bộ cả tiền mặt và các chứng phiếu có giá trị  như séc\n' +
        'o\tKiểm kê tiền gửi ngân hàng và các khoản thanh toán bằng phương pháp đối chiếu số dư của từng tài khoản giữa sổ kế toán của đơn vị với sổ của ngân hàng hoặc đơn vị có quan hệ thanh toán.\n'
}

const chuong6 = {
    title: 'CHƯƠNG 6 SỔ KẾ TOÁN VÀ HÌNH THỨC KẾ TOÁN\n',
    content:
        '1.\tSổ kế toán\n' +
        'Sổ kế toán là những tờ sổ theo mẫu nhất định có liên hệ chặt chẽ với nhau dùng để ghi chép các nghiệp vụ kinh tế phát sinh theo đúng phương pháp kế toán trên cơ sở số liệu của chứng từ gốc.\n' +
        'Phân loại sổ kế toán:\n' +
        '-\tCăn cứ vào phương pháp ghi chép của sổ: sổ theo trình tự thời gian, sổ ghi theo hệ thống, sổ kết hợp\n' +
        '-\tCăn cứ vào mức độ phản ánh: sổ kế toán tổng hợp, sổ kế toán chi tiết\n' +
        '-\tCăn cứ vào kết cấu của sổ: sổ kết cấu kiểu một bên, sổ kết cấu kiểu hai bên\n' +
        'Mở sổ, ghi sổ, khóa sổ và sửa sai trên sổ kế toán:\n' +
        '-\tMở sổ: mở vào đầu niên độ kế toán, mở đầy đủ các loại sổ\n' +
        '-\tGhi sổ: Ghi chép các nghiệp vụ kinh tế phát sinh vào sổ theo đúng quy định trên cơ sở chứng từ gốc đã lập\n' +
        '-\tKhóa sổ: Ghi chuyển số liệu giữa các sổ kế toán có liên quan, kết thúc việc ghi sổ trong một thời kỳ, cộng SPS, tính ra số dư cuối kỳ của các tài khoản trên sổ kế toán.\n' +
        '-\tSửa sai trên sổ kế toán: \n' +
        'o\tPhương pháp cải chính\n' +
        'o\tPhương pháp ghi số âm\n' +
        'o\tPhương pháp ghi bổ sung\n' +
        '\n2.\tHình thức kế toán\n' +
        '-\tHình thức kế toán nhật ký chung\n' +
        '-\tHình thức kế toán nhật ký – sổ cái\n' +
        '-\tHình thức kế toán chứng từ ghi sổ\n' +
        '-\tHình thức kế toán nhật ký chứng từ\n' +
        '-\tHình thức kế toán trên máy vi tính\n'
}

const chuong7 = {
    title: 'CHƯƠNG 7 KẾ TOÁN CÁC QUÁ TRÌNH SẢN XUẤT KINH DOANH CHỦ YẾU\n',
    content:
        '1.Kế toán NVL, CCDC\n' +
        '*Tài khoản sử dụng: TK 152, TK 153\n' +
        '*Trình tự hạch toán:\n' +
        '-Mua VL, CCDC nhập kho trong tháng:\n' +
        'Giá mua\n' +
        'Nợ TK 152, TK 153: giá mua chưa VAT \n' +
        'Nợ TK 133 : thuế GTGT được khấu trừ\n' +
        '\tCó TK 331, TK 111, TK 112, TK 141 : giá thanh toán \n' +
        'Chi phí thu mua (tiền vận chuyển, bảo quản, bốc dỡ VL …)\n' +
        'Nợ TK 152, TK 153: Chi phí theo giá chưa VAT\n' +
        'Nợ TK 133: VAT của CP\n' +
        '\tCó TK 331, TK 111, TK 112, TK 141\n' +
        '- Xuất VL, CCDC dùng SXKD:\n' +
        'Nợ TK 621: NVL, CCDC dùng trực tiếp sản xuất sản phẩm\n' +
        'Nợ TK 627: NVL, CCDC dùng cho quản lý và phục vụ phân xưởng\n' +
        'Nợ TK 641: NVL, CCDC dùng cho bộ phận bán hàng\n' +
        'Nợ TK 642: NVL, CCDC dùng cho bộ phận quản lý doanh nghiệp\n' +
        '\tCó TK 152, TK 153: Tổng giá trị NVL, CCDC xuất kho (tính theo các pp FIFO, BQGQ, TTĐD)\n' +
        '\n' +
        '\n2.Kế toán TSCĐ\n' +
        '*Tài khoản sử dụng: TK 211, 213, 214\n' +
        '*Trình tự hạch toán:\n' +
        '-Mua TSCĐ về sử dụng cho SXKD:\n' +
        'Giá mua\n' +
        'Nợ TK 211, TK 213: giá mua chưa VAT \n' +
        'Nợ TK 133 : thuế GTGT được khấu trừ\n' +
        '\tCó TK 331, TK 111, TK 112, TK 141 : giá thanh toán \n' +
        'Chi phí thu mua (tiền vận chuyển, bảo quản, bốc dỡ VL …)\n' +
        'Nợ TK 211, TK 213: Chi phí theo giá chưa VAT\n' +
        'Nợ TK 133: VAT của CP\n' +
        '\tCó TK 331, TK 111, TK 112, TK 141\n' +
        '\n' +
        '- Kế toán khấu hao TSCĐ:\n' +
        'Nợ TK 627: TSCĐ ở phân xưởng sản xuất\n' +
        'Nợ TK 641: TSCĐ dùng cho bộ phận bán hàng\n' +
        'Nợ TK 642: TSCĐ dùng cho bộ phận quản lý doanh nghiệp\n' +
        '\tCó TK 214: Tổng số tiền trích khấu hao TSCĐ\n' +
        '-\tThanh lý, nhượng bánTSCĐ\n' +
        'Xóa sổ TSCĐ:\n' +
        'Nợ TK 214: Giá trị HMLK\n' +
        'Nợ TK 811: GTCL\n' +
        '\tCó TK 211, TK 213: NG TSCĐ\n' +
        'Ghi nhận thu nhập:\n' +
        'Nợ TK 111, 112, 131: Giá thanh toán \n' +
        '\tCó TK 711: Giá bán chưa VAT \n' +
        '\tCó TK 3331: VAT ra\n' +
        'Ghi nhận chi phí:\n' +
        'Nợ TK 811: Chi phi chưa VAT\n' +
        'Nợ TK 133: VAT vào\n' +
        '\tCó TK 111, 112, 331: Giá thanh toán\n' +
        '\n' +
        '\n3.Kế toán tiền lương và các khoản trích theo lương\n' +
        '*Tài khoản sử dụng: TK 334, 338\n' +
        '*Trình tự hạch toán:\n' +
        '-Lương phải trả CNV:\n' +
        'Nợ TK 622: Tiền lương CN trực tiếp sản xuất sphẩm\n' +
        'Nợ TK 627: Tiền lương NV quản lý phân xưởng\n' +
        'Nợ TK 641: Tiền lương NV bán hàng\n' +
        'Nợ TK 642: Tiền lương NV quản lý doanh nghiệp\n' +
        '\tCó TK 334: Tổng tiền lương\n' +
        '-Các khoản trích theo lương (BHXH, BHYT, BHTN, KPCĐ)\n' +
        'Nợ TK 622, 627, 641, 642\n' +
        'Nợ TK 334\n' +
        '\tCó TK 338\n' +
        '-Chi các khoản BHXH, KPCĐ tại đơn vị, nộp BH lên cơ quan quản lý\n' +
        'Nợ TK 338\n' +
        '\tCó TK 111, 112\n' +
        '-Trả lương cho CBCNV\n' +
        'Nợ TK 334\n' +
        '\tCó TK 111, 112\n' +
        '\n' +
        '\n4.Kế toán kết chuyển CPSX và tính giá thành SP:\n' +
        'Cuối kỳ kết chuyển CPSX (621, 622, 627) sang TK 154 để tổng hợp CPSX phát sinh trong kỳ \n' +
        'Nợ TK 154\n' +
        '\tCó TK 621\n' +
        '\tCó TK 622\n' +
        '\tCó TK 627\n' +
        'Xác định giá thành thực tế và ghi chép thành phẩm nhập kho :\n' +
        'Tổng giá thành SP = CPDD đầu kỳ + CPSX phát sinh trong kỳ - CPDD cuối kỳ - Giảm giá thành\n' +
        'Giá thành đơn vị SP = Tổng giá thành SP / Số lượng SP hoàn thành\n' +
        'Nhập kho thành phẩm\n' +
        'Nợ TK 155\n' +
        '\tCó TK 154\n' +
        '\n' +
        '\n5.Kế toán quá trình tiêu thụ sản phẩm:\n' +
        '*Tài khoản sử dụng: TK 155, TK 632, TK 641, TK 642, TK 511\n' +
        '*Trình tự hạch toán:\n' +
        '-Xuất kho thành phẩm tiêu thụ: \n' +
        'Giá vốn:\n' +
        'Nợ TK 632: Trị giá xuất kho SP tính theo các pp FIFO, BQGQ….\n' +
        '\tCó TK 155\n' +
        'Giá bán:\n' +
        'Nợ TK 111, TK 112, TK 131 : giá thanh toán \n' +
        '\tCó TK 511: giá bán chưa thuế GTGT \n' +
        '\tCó TK 3331: thuế GTGT đầu ra\n' +
        '\n6.Kế toán xác định KQKD:\n' +
        'Cuối kỳ kết chuyển doanh thu bán hàng, chi phí sang TK 911\n' +
        '+ Kết chuyển doanh thu bán hàng: \n' +
        'Nợ TK 511\n' +
        '\tCó TK 911\n' +
        '+ Kết chuyển Chi phí\n' +
        'Nợ TK 911\n' +
        '\tCó TK 632\n' +
        '\tCó TK 641\n' +
        '\tCó TK 642\n' +
        'Kết quả KD = Doanh thu (511) – Chi phí (632, 641, 642)\n' +
        '+ Doanh thu > Chi phí => Lãi => phải nộp thuế TNDN\n' +
        'Thuế TNDN phải nộp\n' +
        'Nợ TK 821\n' +
        '\tCó TK 3334\n' +
        'Kết chuyển thuế TNDN phải nộp\n' +
        'Nợ TK 911\n' +
        '\tCó TK 821\n' +
        '+ Doanh thu < Chi phí => Lỗ (Không phải nộp thuế)\n' +
        'Kết chuyển Lãi / Lỗ sang TK 421\n' +
        '+ Kết chuyển Lãi:\n' +
        'Nợ TK 911\n' +
        '\tCó TK 421\n' +
        '+ Kết chuyển Lỗ:\n' +
        'Nợ TK 421\n' +
        '\tCó TK 911\n'
}

const chuong8 = {
    title: 'CHƯƠNG 8 TỔ CHỨC CÔNG TÁC KẾ TOÁN VÀ TỰ KIỂM TRA KẾ TOÁN\n',
    content:
        '1.Tổ chức công tác kế toán:\n' +
        '-Tổ chức thực hiện các chế độ và phương pháp kế toán:\n' +
        '-Lập và luân chuyển chứng từ kế toán\n' +
        '-Vận dụng hệ thống tài khoản kế toán, ghi chép vào tài khoản và sổ kế toán\n' +
        '-Lập báo cáo tài chính\n' +
        '-Kiểm kê tài sản\n' +
        '-Bảo quản – lưu trữ tài liệu kế toán\n' +
        '-Kiểm tra kế toán\n' +
        '-Tổ chức bộ máy kế toán: hình thức tổ chức bộ máy kế toán, \n' +
        '\n2.Tổ chức công tác tự kiểm tra kế toán:\n' +
        '-Hình thức kiểm tra kế toán:\n' +
        'oTheo thời gian thực hiện: tự kiểm tra thường xuyên, tự kiểm tra đột xuất\n' +
        'oTheo phạm vi công việc: tự kiểm tra toàn diện, tự kiểm tra từng phần\n'
}

export const reviews = [chuong1, chuong2, chuong3, chuong4, chuong5, chuong6, chuong7, chuong8]