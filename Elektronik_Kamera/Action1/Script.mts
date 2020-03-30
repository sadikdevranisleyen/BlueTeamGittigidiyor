
Browser("GittiGidiyor – Türkiye'nin").Page("GittiGidiyor – Türkiye'nin").Link("Fotoğraf, Kamera").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Fotoğraf Makinesi, Kamera").WebCheckBox("WebCheckBox").Set "ON"
Browser("GittiGidiyor – Türkiye'nin").Page("Fotoğraf Makinesi, Kamera").WebElement("Akıllı Sıralama Akıllı").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Fotoğraf Makinesi, Kamera").WebList("select").Select "Fiyata Göre (Önce En Yüksek)"
Browser("GittiGidiyor – Türkiye'nin").Page("Fotoğraf Makinesi, Kamera").Link("2").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Fotoğraf Makinesi, Kamera").Image("Godox Video Işığı Led170").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Godox Video Işığı Led170").WebButton("Sepete Ekle").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Godox Video Işığı Led170").Link("Sepete Git").Click
Browser("GittiGidiyor – Türkiye'nin").Page("Sepetim - GittiGidiyor").WebElement("Sil").Click

