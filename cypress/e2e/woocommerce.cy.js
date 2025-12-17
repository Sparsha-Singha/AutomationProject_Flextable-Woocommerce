const LoginPage = require("../pages/LoginPage");
const OpenPage = require("../pages/OpenPage");
const AddToCart = require("../pages/AddToCart");
const ContactInfo = require("../pages/ContactInfo");

describe("Woocommerce Webstore Visit", () => {
    
    

    it("User Account Order History", () => {
    OpenPage.pageShop();
    AddToCart.addToCart();
    OpenPage.openCart();
    OpenPage.checkout();
    ContactInfo.contactGmail();
    ContactInfo.shippingAddress();
    ContactInfo.billingAddress();
    ContactInfo.placeOrder();
    })

    it("End-to-End Checkout Flow", () => {
        OpenPage.pageShop(); cy.wait(2000); 
        cy.get('#modal-1-content a[href="http://localhost/wordpress/index.php/my-account/"] span.wp-block-navigation-item__label').click();
        LoginPage.loginAccount();
        OpenPage.pageOrders();
    })
})