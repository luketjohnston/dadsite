from django.contrib import admin

# Register your models here.
from .models import Portrait
from .models import Award

admin.site.register(Portrait)
admin.site.register(Award)

