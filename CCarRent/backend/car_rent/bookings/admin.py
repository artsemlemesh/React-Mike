from django.contrib import admin
from .models import Booking

#displays these fields in the admin panel
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'car_model', 'pick_up_date', 'drop_off_date')