export default class PhuongThuc_Product {
    constructor(Product) {
       this.Product = Product;
    };
    Get_Product(Product) {
        for (const element of this.Product) {
            console.log(element)
        }
    }
    Get_Product_Name_Price(Product) {
        this.Product.map((element) => {
            console.log({
                "name": element.name,
                "price": element.price
            })
        })
    }
    Get_Product_Quantity_be_khong(Product) {
        const het_hang = this.Product.filter(item => item.quantity > 0);
        console.log("Hết hàng:", het_hang);
    }
    Get_Some_tren_30(Product) {
        const itgia30 = this.Product.some(item => item.price > 30000)
        if (itgia30 === true) return console.log("kiểm tra có giá nào trên 30.000 ")
        return console.log(" không có sản phẩm nào")
    }
    Get_Kiem_Ngung_Ban(Product) {
        const ngung_ban = this.Product.some(item => item.inAvailable === false)
        console.log(ngung_ban === false ? "không có sản phẩm nào ngưng bán" : " có sản phẩm ngưng bán")
    }
    Get_Tinh_tong(Product) {
        const tong = this.Product.reduce((curr, acc) => curr += (Number(acc.price) * Number(acc.quantity)), 0)
        console.log("tong tài sản là" + tong)
    }
    Get_Name_Categroy_Price(Product) {
        for (const element of this.Product) {
            console.log({
                "NAme": element.name,
                "categroy": element.categroy,
                "inAvailable": element.inAvailable
            })
        }
    }
    Get_Name_Categroy_Price(Product) {
        for (const element of this.Product) {
            console.log({
                "NAme": element.name,
                "categroy": element.categroy,
                "inAvailable": element.inAvailable
            })
        }
    }
    Get_Product_In(Product) {
        for (const e in this.Product) {
            console.log(Product[e])
        }
    }
    
}
