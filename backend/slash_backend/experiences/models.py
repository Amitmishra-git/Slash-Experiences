from django.db import models

class Experience(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    tags = models.CharField(max_length=255)
    main_image = models.ImageField(upload_to='experiences/')
    gallery = models.ImageField(upload_to='experiences/gallery/', blank=True, null=True)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.title