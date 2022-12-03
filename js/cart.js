function updateFieldTongTien() {
	const cart_tongtien     = document.querySelector("#cart-tong-tien");
	cart_tongtien.innerHTML = showMoney(getTongTien()) + " VNĐ";
}

function deleteToCart(e) {
	const btn_remove   = e.target;
	const tr           = btn_remove.closest('tr');
	const confirm_bool = confirm("Bạn muốn xoá sản phẩm ra khỏi giỏ hàng?");
	if(confirm_bool === true) {
		tr.remove();
	}
	updateCartIcon(-1);
	updateFieldTongTien();
}

function updateQuantity(int, event) {
	const btn = event.target;
	const tr  = btn.closest("tr");
	const td  = btn.closest("td");
	if(updateFieldSoLuong(td, int) === true) {
		updateFieldThanhTien(tr, td);
	}
	updateFieldTongTien();
}

function updateFieldThanhTien(tr, td) {
	const don_gia           = getFieldDonGia(tr);
	const so_luong          = td.querySelector("input[type=text]").value;
	const thanh_tien_td     = tr.querySelector("td:nth-child(7)");
	const thanh_tien        = Number(don_gia) * Number(so_luong);
	thanh_tien_td.innerHTML = showMoney(thanh_tien) + " VNĐ";
	thanh_tien_td.setAttribute("data-value", thanh_tien);
	updateFieldTongTien();
}

function updateFieldSoLuong(td, int) {
	var input    = td.querySelector("input[type=text]");
	var so_luong = Number(input.value) + int;
	if(so_luong <= 0) {
		return false;
	}
	input.value = so_luong;
	return true;
}

function getFieldDonGia(tr) {
	const don_gia = tr.querySelector("td:nth-child(3)").getAttribute("data-value");
	return Number(don_gia);
}

function getTongTien() {
	const table   = document.querySelector("div.box-cart table");
	const trs     = table.rows;
	let tong_tien = 0;
	for(let i = 0; i < trs.length; i++) {
		let td = trs[i].querySelector("td:nth-child(7)");
		console.log(td);
		let sotien = td.getAttribute("data-value");
		tong_tien += Number(sotien);
	}
	return tong_tien;
}

updateFieldTongTien();
