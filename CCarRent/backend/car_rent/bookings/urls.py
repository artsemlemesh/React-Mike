
from django.urls import path
# from .views import book_car
from .views import BookingListCreateView

urlpatterns = [
    # path('book/', book_car, name='book_car'),
    path('book/', BookingListCreateView.as_view(), name='book_car'),
]