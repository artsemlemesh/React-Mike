from django.db import models

# Create your models here.


class Booking(models.Model):
    CAR_MODELS = [
        ('Sedan', 'Sedan'),
        ('SUV', 'SUV'),
        ('Truck', 'Truck'),
        ('Convertible', 'Convertible'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    pick_up_date = models.DateField()
    drop_off_date = models.DateField()
    car_model = models.CharField(max_length=20, choices=CAR_MODELS)

    def __str__(self):
        return f"{self.name} - {self.car_model} from {self.pick_up_date} to {self.drop_off_date}"