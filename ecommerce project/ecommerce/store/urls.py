from django.urls import path
from . import views

urlpatterns = [
    path("", views.store, name="store"),

    path("register/", views.register, name="register"),
    path("login/", views.loginfunction, name="login"),
    path("logout/", views.logoutUser, name="logout"),

    path("cart/", views.cart, name="cart"),
    path("checkout/", views.checkout,name="checkout"),
    
    path("update_item/", views.updateItem,name="update_item"),
    path("product_detail/<int:product_id>/", views.viewProduct,name="product_detail"),
    path("process_order/", views.processOrder,name="process_order"),

   ]
