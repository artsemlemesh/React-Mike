
from django.urls import path

from .views import *

urlpatterns = [
    path('books/<int:book_id>', book_detail_view),
    path('books/', books_list),
    path('home/', home_view),
    # path('create-book/', book_create_view),
    path('create-book/', BookCreate.as_view())
]
