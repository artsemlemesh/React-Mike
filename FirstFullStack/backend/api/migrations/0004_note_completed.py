# Generated by Django 5.0.6 on 2024-05-18 06:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0003_note_created_at"),
    ]

    operations = [
        migrations.AddField(
            model_name="note",
            name="completed",
            field=models.BooleanField(default=False),
        ),
    ]