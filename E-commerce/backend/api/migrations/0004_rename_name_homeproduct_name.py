# Generated by Django 5.0.6 on 2024-05-23 06:02

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0003_rename_name_homeproduct_name"),
    ]

    operations = [
        migrations.RenameField(
            model_name="homeproduct",
            old_name="Name",
            new_name="name",
        ),
    ]