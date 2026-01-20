export default class PhuongThuc_Product {
    constructor(Product) {
       this.Product = Product;
    };
    Get_Product(Product) {
         console.log("danh sách  sản phẩm ")
        for (const element of this.Product) {
            console.log(element)
        }
    }
    Get_Product_Name_Price(Product) {
        console.log("In sản phẩm name và giá")
        this.Product.map((element) => {
            console.log({
                name: element.name,
                price: element.price
            })
        })
    }
    Get_Product_Quantity_be_khong(Product) {
        console.log("kiểm tra đã có sản phẩm nào hết hàng chưa ")
        const het_hang = this.Product.filter(item => item.quantity > 0);
        console.log("Hết hàng:", het_hang);
    }
    Get_Some_tren_30(Product) {
         console.log("kiểm tra tồn tại sản phẩm có giá 30.000Đ không")
        const itgia30 = this.Product.some(item => item.price > 30000)
        if (itgia30 === true) return console.log("có ")
        return console.log("Không")
    }
    Get_Kiem_Ngung_Ban(Product) {
        const ngung_ban = this.Product.some(item => item.inAvailable === false)
        console.log(ngung_ban === false ? "không có sản phẩm nào ngưng bán" : " có sản phẩm ngưng bán")
    }
    Get_Tinh_tong(Product) {
           console.log("kiểm tra tổng tài sản")
        const tong = this.Product.reduce((curr, acc) => curr += (Number(acc.price) * Number(acc.quantity)), 0)
        console.log("tong tài sản là" + tong)
    }
    Get_Name_Categroy_Price(Product) {
        for (const element of this.Product) {
             console.log("Sản phẩm được in có  danh mục và  tên là ")
            console.log({
                NAme: element.name,
                categroy: element.categroy,
                inAvailable: element.inAvailable
            })
        }
    }
    Get_Name_Categroy_Price(Product) {
        for (const element of this.Product) {
             console.log("Sản phẩm được in có  danh mục và  tên  thêm đang bán hay ngừng bán là ")
            console.log({
                NAme: element.name,
                categroy: element.categroy,
                inAvailable: element.inAvailable
            })
        }
    }
    Get_Product_In(Product) {
        for (const e in this.Product) {
            console.log("Sản phẩm được in  là  : ")
            console.log( { 
                id : this.Product[e].id,
                name :  this.Product[e].name, 
                categroy: this.Product[e].categroy,
                quantity : this.Product[e].quantity , 
                 inAvailable: this.Product[e].inAvailable
            })
        }
    }
    Get_Danh_Sach_Ten_Ban(Product){
        console.log("danh sách bán")
        console.log(this.Product.filter(e=> e.inAvailable === true))
    }
}
