import PhuongThuc_Product from './phuong_thuc.js'
import { Product } from './data.js'

function main() {
    const phuong_thuc = new PhuongThuc_Product(Product);
   phuong_thuc.Get_Product();
     phuong_thuc.Get_Product_Name_Price();
    phuong_thuc.Get_Product_Quantity_be_khong();
     phuong_thuc.Get_Some_tren_30();
    phuong_thuc.Get_Kiem_Ngung_Ban();
    phuong_thuc.Get_Tinh_tong();
    phuong_thuc.Get_Name_Categroy_Price();
    phuong_thuc.Get_Product_In()
        phuong_thuc.Get_Danh_Sach_Ten_Ban()
}

main();
