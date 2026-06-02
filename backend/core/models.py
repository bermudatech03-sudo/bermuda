# backend/core/models.py
from django.db import models

class Lead(models.Model):
    name             = models.CharField(max_length=255)
    email            = models.EmailField()
    phone            = models.CharField(max_length=20)
    company          = models.CharField(max_length=255, blank=True, default='')
    service          = models.CharField(max_length=100, blank=True, default='')
    budget           = models.CharField(max_length=50,  blank=True, default='')
    timeline         = models.CharField(max_length=50,  blank=True, default='')
    message          = models.TextField()
    selected_product = models.CharField(max_length=100, blank=True, default='')
    created_at       = models.DateTimeField(auto_now_add=True)
    is_read          = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} — {self.email}"