let products = [
    {
        name: "Iphone 13 Pro Max",  // Tên sản phẩm
        price: 3000000,             // Giá mỗi sản phẩm
        brand: "Apple",             // Thương hiệu
        count: 2,                   // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },

]

console.log("1------------")
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
function productInfo() {
    products.forEach(products => {
        console.log(`${products.name} - ${products.price} - ${products.brand} - ${products.count}`);
    })
}
productInfo();

console.log("2------------")
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function priceSum() {
    let sum = 0;
    for(const key in products) {
        sum += products[key].price * products[key].count;
    }
    console.log(sum);
}
priceSum();

console.log("3------------")
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function findApple() {
    for(let i = 0; i < products.length; i++) {
        if(products[i].brand == "Apple") {
            console.log(`${products[i].name} - ${products[i].price} - ${products[i].brand} - ${products[i].count}`);
        }
    }
}
findApple();
//có thể dùng for(const key in products)

console.log("4------------")
// 4. Tìm các sản phẩm có giá > 20000000
function findPrice() {
    for(let i = 0; i < products.length; i++) {
        if(products[i].price > 20000000) {
            console.log(`${products[i].name} - ${products[i].price} - ${products[i].brand} - ${products[i].count}`);
        }
    }
}
findPrice();

console.log("5------------")
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function findProProduct() {
    for(const key in products) {
        if(products[key].name.toLowerCase().includes("pro")) {
            console.log(`${products[key].name} - ${products[key].price} - ${products[key].brand} - ${products[key].count}`);
        }
    }
}
findProProduct();

console.log("6------------")
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
function addProduct(name, price, brand, count) {
    products.push({name, price, brand, count});
    productInfo();
}
addProduct("Iphone 14 Pro Max", 36000000, "Iphone", 2);

console.log("7------------")
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function delSamsung() {
    for(let i = 0; i < products.length; i++) {
        if(products[i].brand.toLowerCase().includes("samsung")) {
            delete products[i];
        }
    }
    productInfo()
}
delSamsung();

console.log("8------------")
// 8. Sắp xếp giỏ hàng theo price tăng dần
function priceSort() {
    products.sort(function(a,b) {
        return a.price - b.price;
    })
    productInfo()
}
priceSort();
//Cách 2:   products.sort((a,b)=>(a.price < b.price) ? 1 : -1);

console.log("9------------")
// 9. Sắp xếp giỏ hàng theo count giảm dần
function countSort() {
    products.sort(function(a,b) {
        return b.count - a.count;
    })
    productInfo()
}
countSort();

console.log("10------------")
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function randomProduct() {
    let random1 = Math.floor(Math.random()*products.length);
    let random2 = Math.floor(Math.random()*products.length);
    console.log(products[random1]);
    console.log(products[random2]);
}
randomProduct();