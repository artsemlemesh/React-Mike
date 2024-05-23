# Generated by Django 5.0.6 on 2024-05-23 05:07

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="HomeProduct",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("price", models.DecimalField(decimal_places=2, max_digits=6)),
                ("image", models.ImageField(upload_to="image")),
                ("category", models.CharField(max_length=100)),
                ("type", models.CharField(max_length=100)),
            ],
        ),
    ]
